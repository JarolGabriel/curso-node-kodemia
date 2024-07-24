const fs = require("fs");

let path = "./usuarios.json";

const args = process.argv.slice(2);
console.log(process.argv);
const command = args[0];
const userName = args[1];

function leerUsuarios() {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, "utf-8");
    return JSON.parse(data);
  } else {
    return [];
  }
}

function escribirUsuarios(usuarios) {
  fs.writeFileSync(path, JSON.stringify(usuarios, null, 2), "utf-8");
}

switch (command) {
  case "add":
    if (userName) {
      let usuarios = leerUsuarios();
      usuarios.push({ name: userName });
      escribirUsuarios(usuarios);
      console.log(`Usuario ${userName} agregado.`);
    } else {
      console.log("Por favor, proporciona un nombre de usuario.");
    }
    break;

  case "ls":
    const usuarios = leerUsuarios();
    console.log("Lista de usuarios:");
    usuarios.forEach((usuario, index) => {
      console.log(`${index + 1}. ${usuario.name}`);
    });
    break;

  case "rm":
    if (userName) {
      let usuarios = leerUsuarios();
      const nuevosUsuarios = usuarios.filter(
        (usuario) => usuario.name !== userName
      );
      escribirUsuarios(nuevosUsuarios);
      console.log(`Usuario ${userName} eliminado.`);
    } else {
      console.log("Por favor, proporciona un nombre de usuario.");
    }
    break;

  case "reset":
    escribirUsuarios([]);
    console.log("Todos los usuarios han sido eliminados.");
    break;

  default:
    console.log('Comando no reconocido. Usa "add", "ls", "rm" o "reset".');
}
