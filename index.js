const browserSync = require('browser-sync').create();
const build = require('./bundle');
const chokidar = require('chokidar'); // Add chokidar for file watching
const fs = require('fs');


let httpsOptions; // Define httpsOptions outside the try block

try {

    const key=fs.readFileSync('./ssl/key.pem');
    const cert=fs.readFileSync('./ssl/cert.pem');
    httpsOptions = {
        key: './ssl/key.pem',
        cert: './ssl/cert.pem'
    };

} catch (error) {
    console.error('Error loading SSL files:', error);
    process.exit(1); // Exit the process if SSL files cannot be loaded
}

const watcher = chokidar.watch('./js/**/*.js');

watcher
  .on('change', (path) => {
    build.build(path); // Call the build function with the changed file
  })
  .on('add', (path) => {
    watcher.emit('change', path); // Trigger the change event manually
  });

// Start the server with HTTPS
browserSync.init({
    server: './docs',
    port: 8080,
    https: httpsOptions, // Use self-signed certificates
    files: ['./docs/**/*'],
    ghostMode: false
});