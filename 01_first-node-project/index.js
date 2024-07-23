const prompt = require("prompt-sync")();

console.log("Bienvenido");
let nombre;

while (true) {
  nombre = prompt(
    'Por favor, ingresa una lista de nombres o escribe "EXIT" para salir:'
  );

  if (nombre.trim() === "") {
    console.log("No ha ingresado ningún nombre aún. Intente de nuevo.");
  } else if (nombre.trim().toLowerCase() === "exit") {
    console.log("Usted ha decidido salir del programa.");
    process.exit();
  } else {
    break;
  }
}

// para mostrar la cantida de nombres que se ha ingresado

const showCountsName = () => {
  const nombreArray = nombre.split(" ");
  const numeroDeNombre = nombreArray.length;
  console.log(
    `el numero de nombres que usted a ingresado es: ${numeroDeNombre}`
  );
};
// Mostrar cuantas veces se repite un nombre ingresado por el usuario

const showName = () => {
  const nombreArray = nombre.split(" ");
  const nameCounts = {};

  nombreArray.forEach((name) => {
    if (nameCounts[name]) {
      nameCounts[name]++;
    } else {
      nameCounts[name] = 1;
    }
  });

  let repeatedFound = false;
  for (const [name, count] of Object.entries(nameCounts)) {
    if (count > 1) {
      console.log(`El nombre ${name} se repite ${count} veces.`);
      repeatedFound = true;
    }
  }
  if (!repeatedFound) {
    console.log("no hay nombres repetidos");
  }
};

// mostrar cual es el nombre mas largo y mas corto

const longAndShortName = () => {
  const nombreArray = nombre.split(" ");
  let longestName = nombreArray[0];
  let shortestName = nombreArray[0];

  nombreArray.forEach((name) => {
    if (name.length > longestName.length) {
      longestName = name;
    }
    if (name.length < shortestName.length) {
      shortestName = name;
    }
  });

  console.log(`El nombre mas largo es: ${longestName}`);

  console.log(`El nombre mas corto es: ${shortestName}`);
};

showCountsName();
showName();
longAndShortName();
