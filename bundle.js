const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./js/main.js'],
  bundle: true,
  outfile: './docs/js/main.js',
  minify: true,
  sourcemap: true
}).then(() => {
  console.log('Bundling complete!');
}).catch(() => {
  console.error('Bundling failed.');
});