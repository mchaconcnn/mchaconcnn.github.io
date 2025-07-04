import browserSync from 'browser-sync';
import { build } from 'esbuild';
import * as sass from 'sass';
import fs from 'fs-extra';
import { watch } from 'fs';
import path from 'path';
import { glob } from 'glob';
import Handlebars from 'handlebars';

const bs = browserSync.create();
const cssOut = '../docs/irire/css/bundle.css';
const jsOut = '../docs/irire/js/bundle.js';
const scssDir = './irire';
const jsEntry = './irire/main.js';
const templatesDir = './irire/templates';
const outputDir = '../docs/irire';
const helpersDir = './irire/helpers';

// Compilar SCSS
async function compileSCSS() {
  try {
    const allScssFiles = await glob(`${scssDir}/**/*.scss`);
    const uses = [];

    for (const file of allScssFiles) {
      const fileName = path.basename(file);
      const relativePath = path.relative(scssDir, file);
      
      if (fileName !== 'main.scss') {
        const modulePath = `./${relativePath.replace(/\.scss$/, '')}`;
        uses.push(`@use "${modulePath}";`);
      }
    }

    console.log(`[SCSS] Encontrados ${uses.length} módulos SCSS para @use`);

    const mainScssPath = path.join(scssDir, 'main.scss');
    const mainContent = await fs.readFile(mainScssPath, 'utf8');
    const generatedContent = `${uses.join('\n')}\n${mainContent}`;

    const result = await sass.compileStringAsync(generatedContent, {
      style: 'compressed',
      loadPaths: [scssDir],
      sourceMap: true,
      url: new URL(`file://${path.resolve(mainScssPath)}`)
    });

    // Add sourcemap reference comment to CSS
    const cssWithSourceMap = result.css + `\n/*# sourceMappingURL=${path.basename(cssOut)}.map */`;
    
    await fs.writeFile(cssOut, cssWithSourceMap);
    if (result.sourceMap) {
      await fs.writeFile(cssOut + '.map', JSON.stringify(result.sourceMap));
    }
    console.log('[SCSS] Compiled with auto @use and source maps');
  } catch (e) {
    console.error('[SCSS] Error:', e.message);
  }
}

// Bundle JS con esbuild
async function bundleJS() {
  await build({
    entryPoints: [jsEntry],
    outfile: jsOut,
    bundle: true,
    format: 'esm',
    sourcemap: true
  }).then(() => console.log('[JS] Bundled'))
    .catch((e) => console.error('[JS] Error', e));
}

// Registrar helpers personalizados
async function loadHelpers() {
  try {
    const files = await fs.readdir(helpersDir);
    for (const file of files) {
      if (file.endsWith('.js')) {
        const { default: helper } = await import(path.resolve(helpersDir, file));
        const name = path.basename(file, '.js');
        Handlebars.registerHelper(name, helper);
      }
    }
    console.log('[HBS] Helpers cargados');
  } catch (e) {
    console.warn('[HBS] No se pudieron cargar helpers:', e.message);
  }
}

// Registrar partials
async function registerPartials() {
  const partialsDir = path.join(templatesDir, 'partials');
  try {
    const files = await fs.readdir(partialsDir);
    for (const file of files) {
      if (file.endsWith('.hbs')) {
        const name = path.basename(file, '.hbs');
        const content = await fs.readFile(path.join(partialsDir, file), 'utf8');
        Handlebars.registerPartial(name, content);
      }
    }
    console.log('[HBS] Partials registrados');
  } catch (e) {
    console.warn('[HBS] No se pudieron registrar partials:', e.message);
  }
}

// Compilar templates
async function compileTemplates() {
  const files = await glob(`${templatesDir}/*.hbs`);
  for (const file of files) {
    const name = path.basename(file, '.hbs');
    const templateStr = await fs.readFile(file, 'utf8');
    const template = Handlebars.compile(templateStr);

    let data = {};
    const dataFile = `${templatesDir}/data/${name}.json`;
    try {
      data = JSON.parse(await fs.readFile(dataFile, 'utf8'));
    } catch (e) {
      console.warn(`[HBS] Sin datos para ${name}`);
    }

    const html = template(data);
    await fs.writeFile(`${outputDir}/${name}.html`, html);
    console.log(`[HBS] ${name}.html generado`);
  }
}

// Inicializar entorno
(async () => {
  // Limpiar terminal
  console.clear();
  
  await compileSCSS();
  await bundleJS();
  await loadHelpers();
  await registerPartials();
  await compileTemplates();

  // Watch SCSS
  watch(scssDir, { recursive: true }, async (event, filename) => {
    if (filename.endsWith('.scss')) {
      await compileSCSS();
      bs.reload('*.css');
    }
  });

  // Watch JS
  watch(scssDir, { recursive: true }, (event, filename) => {
    if (filename.endsWith('.js')) {
      bundleJS();
      bs.reload('*.js');
    }
  });

  // Watch HBS / JSON
  watch(templatesDir, { recursive: true }, async (event, filename) => {
    if (/\.(hbs|json)$/.test(filename)) {
      await registerPartials();
      await compileTemplates();
      bs.reload();
    }
  });

  // Watch Helpers
  watch(helpersDir, async () => {
    await loadHelpers();
    await compileTemplates();
    bs.reload();
  });

  // Iniciar BrowserSync
  bs.init({
    server: '../docs/',
    files: ['../docs/**/*'],
    open: false,
    notify: false
  });
})();
