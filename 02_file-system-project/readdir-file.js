const fs = require("fs");

const data = fs.readdirSync("../02_file-system-project", "utf-8");

console.log(data);
