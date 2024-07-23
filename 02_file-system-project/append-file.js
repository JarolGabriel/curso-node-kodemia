const fs = require("fs");

fs.appendFileSync(
  "nuevo_archivo.txt",
  "\neste contenido es nuevo para sobre escribir el anterior",
  "utf-8"
);
