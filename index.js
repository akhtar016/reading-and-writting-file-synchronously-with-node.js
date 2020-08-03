const fs = require('fs');


// Read File
const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
console.log(textIn)

// Write File
const textOut =  `This is what we know about lorem ipsum: ${textIn}\n Created on ${Date.now()}`;
fs.writeFileSync('./text/output.txt', textOut)
console.log('File written!')
