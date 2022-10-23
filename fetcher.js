const path = process.argv[3];
const domain = process.argv[2];

const fs = require('fs');
const writeFile = fs.writeFile;

const request = require('request');
request(domain, (error, response, body) => {
  if (error) {
    console.log("Error", error)
  }
  writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
  });
  
});