const fs = require("fs");
const path = require("path");

let allOperations = {};

fs.readdirSync(path.join(__dirname, "ops")).filter(file => fs.statSync(path.join(__dirname, "ops", file)).isDirectory())
.forEach(dir => {
    console.log(path.join(__dirname, "ops", dir));
    allOperations[dir] = require(path.join(__dirname, "ops", dir));
});
console.log(allOperations);
module.exports = allOperations;