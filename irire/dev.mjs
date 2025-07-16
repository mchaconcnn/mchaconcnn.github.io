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
const mediaDir = './irire/media';
const mediaOutDir = '../docs/irire/media';
const xhrDir = './xhr';
const xhrOutDir = '../docs/irire/xhr';

// Compilar SCSS
async function compileSCSS() {
  try {
    const allScssFiles = await fs.readdir(scssDir);
    const uses = [];

    for (const file of allScssFiles) {
      if (file.endsWith('.scss') && file !== 'main.scss') {
        const modulePath = `./${file.replace(/\.scss$/, '')}`;
        uses.push(`@use "${modulePath}";`);
      }
    }

    const mainContent = await fs.readFile(path.join(scssDir, 'main.scss'), 'utf8');
    const generatedContent = `${uses.join('\n')}\n${mainContent}`;
    const generatedPath = path.join(scssDir, '.main.generated.scss');

    await fs.writeFile(generatedPath, generatedContent);

    const result = await sass.compileAsync(generatedPath, {
      style: 'compressed'
    });

    await fs.writeFile(cssOut, result.css);
    console.log('[SCSS] Compiled with auto @use');
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

// Sincronizar carpeta media
async function syncMedia() {
  try {
    await fs.ensureDir(mediaOutDir);
    await fs.copy(mediaDir, mediaOutDir, { 
      overwrite: true,
      errorOnExist: false 
    });
    console.log('[MEDIA] Sincronizado con ../docs/irire/media');
  } catch (e) {
    console.error('[MEDIA] Error al sincronizar:', e.message);
  }
}

// Compilar componentes XHR
async function compileXHRComponents() {
  try {
    const xhrFolders = await fs.readdir(xhrDir);
    await fs.ensureDir(xhrOutDir);
    
    for (const folder of xhrFolders) {
      const folderPath = path.join(xhrDir, folder);
      const stat = await fs.stat(folderPath);
      
      if (stat.isDirectory()) {
        const hbsFile = path.join(folderPath, `${folder}.hbs`);
        const scssFile = path.join(folderPath, `${folder}.scss`);
        const jsFile = path.join(folderPath, `${folder}.js`);
        
        // Verificar si existe el archivo HBS
        if (await fs.pathExists(hbsFile)) {
          let compiledCSS = '';
          let compiledJS = '';
          
          // Compilar SCSS si existe
          if (await fs.pathExists(scssFile)) {
            try {
              const scssContent = await fs.readFile(scssFile, 'utf8');
              const result = await sass.compileStringAsync(scssContent, {
                style: 'compressed',
                loadPaths: [folderPath, scssDir]
              });
              compiledCSS = result.css;
              console.log(`[XHR] ${folder}.scss compilado`);
            } catch (e) {
              console.error(`[XHR] Error compilando ${folder}.scss:`, e.message);
            }
          }
          
          // Compilar JS si existe
          if (await fs.pathExists(jsFile)) {
            try {
              await build({
                entryPoints: [jsFile],
                bundle: false,
                format: 'cjs',
                minify: false,
                write: false
              }).then(async (result) => {
                compiledJS = result.outputFiles[0].text;
                console.log(`[XHR] ${folder}.js minificado`);
              });
            } catch (e) {
              console.error(`[XHR] Error compilando ${folder}.js:`, e.message);
            }
          }
          
          // Compilar HBS
          const templateStr = await fs.readFile(hbsFile, 'utf8');
          const template = Handlebars.compile(templateStr);
          
          // Buscar datos JSON
          let data = {};
          const dataFile = path.join(folderPath, `${folder}.json`);
          try {
            if (await fs.pathExists(dataFile)) {
              data = JSON.parse(await fs.readFile(dataFile, 'utf8'));
            }
          } catch (e) {
            console.warn(`[XHR] Sin datos para ${folder}`);
          }
          
          // Compilar template
          let html = template(data);
          
          // Inyectar CSS al principio
          if (compiledCSS) {
            html = `<style>${compiledCSS}</style>\n${html}`;
          }
          
          // Guardar JS como archivo separado e inyectar script loader
          if (compiledJS) {
            const jsOutputFile = path.join(xhrOutDir, `${folder}.js`);
            await fs.writeFile(jsOutputFile, compiledJS);
            console.log(`[XHR] ${folder}.js guardado como archivo separado`);
          }
          
          // Escribir archivo final
          const outputFile = path.join(xhrOutDir, `${folder}.html`);
          await fs.writeFile(outputFile, html);
          console.log(`[XHR] ${folder}.html generado con CSS embebido y JS como archivo separado`);
        }
      }
    }
  } catch (e) {
    console.error('[XHR] Error compilando componentes:', e.message);
  }
}

// Inicializar entorno
(async () => {
  await compileSCSS();
  await bundleJS();
  await loadHelpers();
  await registerPartials();
  await compileTemplates();
  await syncMedia();
  await compileXHRComponents();
  await syncMedia();
  await compileXHRComponents();

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

  // Watch Media
  watch(mediaDir, { recursive: true }, async (event, filename) => {
    console.log(`[MEDIA] ${event} detectado en ${filename}`);
    await syncMedia();
    bs.reload();
  });

  // Watch XHR components
  watch(xhrDir, { recursive: true }, async (event, filename) => {
    if (/\.(hbs|scss|js|json)$/.test(filename)) {
      console.log(`[XHR] ${event} detectado en ${filename}`);
      await compileXHRComponents();
      bs.reload();
    }
  });

  // Iniciar BrowserSync
  bs.init({
    server: '../docs/',
    files: ['../docs/**/*'],
    open: false,
    notify: false
  });
})();
