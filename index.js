const browserSync = require('browser-sync').create();
const esbuild = require('esbuild');
const chokidar = require('chokidar'); // Add chokidar for file watching

// Function to bundle the JavaScript files
function bundleJS() {
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
}

// Initial bundling
bundleJS();

// Watch for changes in the ./js directory
chokidar.watch('./js/**/*.js').on('change', (path) => {
  console.log(`File changed: ${path}`);
  bundleJS();
});

// Start the server
browserSync.init({
    server: './docs',
    port: 8080,
    files: ['./docs/**/*'] // Monitor changes in the ./docs directory
});