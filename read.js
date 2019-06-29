const fs = require("fs");

const rawData = fs.readFileSync("data.txt");

console.log(rawData);

console.log(rawData.toString());

const jsnStr = JSON.parse(rawData);

console.log(jsnStr);
