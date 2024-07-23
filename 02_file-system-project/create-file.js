//const fs = require("node:fs");
const fs = require("fs");

fs.writeFileSync(
  "nuevo_archivo.txt",
  "este es un ejemplo de como leer un archivo con readFile",
  "utf-8"
);
