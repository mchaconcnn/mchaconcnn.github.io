const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Directory containing EXR files
const vrFolder = path.join(__dirname, 'docs', 'vr');
const outputFolder = vrFolder; // No need to create a separate folder

// Function to convert EXR to JPG using ImageMagick
function convertExrToJpg(inputPath, outputPath, exposure = 0.0015, gamma = 2.2, contrast = 50, center = 2) {
    return new Promise((resolve, reject) => {
        const command = `magick ${inputPath} -colorspace sRGB -evaluate Multiply ${exposure} -gamma ${gamma} -sigmoidal-contrast ${contrast}x${center}% -define quantum:format=floating-point -compress JPEG ${outputPath}`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error converting ${inputPath}:`, stderr);
                reject(error);
            } else {
                console.log(`Converted ${inputPath} to ${outputPath}`);
                resolve(stdout);
            }
        });
    });
}

// Recursively find all EXR files in the vr folder
function findExrFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(findExrFiles(filePath));
        } else if (path.extname(file).toLowerCase() === '.exr') {
            results.push(filePath);
        }
    });
    return results;
}

(async () => {
    try {
        const exrFiles = findExrFiles(vrFolder);
        console.log(`Found ${exrFiles.length} EXR files.`);

        for (const exrFile of exrFiles) {
            const outputFileName = path.basename(exrFile, '.exr') + '.jpg';
            const outputPath = path.join(path.dirname(exrFile), outputFileName); // Use the same folder as the input file
            await convertExrToJpg(exrFile, outputPath);
        }

        console.log('All files converted successfully.');
    } catch (error) {
        console.error('Error during conversion:', error);
    }
})();