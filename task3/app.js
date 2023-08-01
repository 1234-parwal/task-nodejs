// wordCount.js

const fs = require("fs");

function countWordsInFile(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const wordCount = data.split(/\s+/).filter(Boolean).length;
    console.log(`Total word count in "${filename}": ${wordCount}`);
  });
}

// Example usage:
const filename = "data.txt";
countWordsInFile(filename);
