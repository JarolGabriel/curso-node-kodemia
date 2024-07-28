const fs = require("fs");
const express = require("express");

const server = express();

server.use(express.json());

let path = "./usuarios.json";

server.get("/", (request, response) => {
  response.write("hello world");
  response.end();
});

//GET
server.get("/usuarios", (request, response) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      response.status(500).json({ message: "error to read the file" });
      return;
    }
    response.status(200).json(JSON.parse(data));
  });
});

// POST

server.post("/usuarios", (request, response) => {
  const name = request.body.name;

  if (!name) {
    response.status(400).json({
      message: "Name is required",
    });
    return;
  }

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.status(500).json({ message: "Error al leer el archivo" });
      return;
    }

    let users = JSON.parse(data);
    users.push({ name });

    fs.writeFile(path, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error(err);
        response
          .status(500)
          .json({ message: "Error al escribir en el archivo" });
        return;
      }

      response
        .status(201)
        .json({ message: "Usuario añadido con éxito", user: { name } });
    });
  });
});

// Delete koders

server.delete("/usuarios/:name", (request, response) => {
  const name = request.params.name;

  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      response.status(500).json({ message: "Error al leer el archivo" });
      return;
    }

    let users = JSON.parse(data);
    const filteredUsers = users.filter(
      (user) => user.name.toLowerCase() !== name.toLowerCase()
    );

    if (users.length === filteredUsers.length) {
      response.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    fs.writeFile(path, JSON.stringify(filteredUsers, null, 2), (err) => {
      if (err) {
        console.error(err);
        response
          .status(500)
          .json({ message: "Error al escribir en el archivo" });
        return;
      }

      response.status(200).json({ message: "Usuario eliminado con éxito" });
    });
  });
});

// reset
server.delete("/usuarios", (request, response) => {
  // Escribir un array vacío en el archivo JSON para eliminar todos los usuarios
  fs.writeFile(path, JSON.stringify([], null, 2), (err) => {
    if (err) {
      console.error(err);
      response.status(500).json({ message: "Error al escribir en el archivo" });
      return;
    }

    response
      .status(200)
      .json({ message: "Todos los usuarios eliminados con éxito" });
  });
});

server.listen(8080, () => {
  console.log("server is running on port 8080");
});
