const path = require("path");
const esbuild = require("esbuild");

function build(filePath) {
  const fileName = path.basename(filePath);
  const outputFilePath = `./docs/js/${fileName}`;

  esbuild
    .build({
      entryPoints: [filePath],
      bundle: true,
      outfile: outputFilePath,
      minify: true,
      treeShaking:true,
      sourcemap: true,
    }).then(() => {
      console.log(`Bundling complete! Output: ${outputFilePath}`);
    }).catch(() => {
      console.error("Bundling failed.");
    });
}

exports.build = build;

// Example usage:
// build("./js/main.js");