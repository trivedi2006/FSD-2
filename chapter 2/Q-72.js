const fs = require('fs');

const fileName = 'example.txt';

// Content (original format preserved)
const content = `Hello World
This is a Node.js file.
Content is written as it is.`;

// Step 1: Write to file
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("File written successfully!");

    // Step 2: Delete the file
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log("Error deleting file:", err);
            return;
        }

        console.log("File deleted successfully!");
    });
});