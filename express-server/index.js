const express = require("express");

let koders = ["adolfo", "luis", "jose"];

const server = express();
//const app = express();

server.use(express.json());

server.get("/", (request, response) => {
  response.writeHead(200, { "content-type": "text/plain" });
  response.write("hello world");
  response.end();
});

// list koders

server.get("/koders", (request, response) => {
  response.status(200).json(koders);
});

// create a new koders
server.post("/koders", (request, response) => {
  const name = request.body.name;

  if (!name) {
    response.status(400).json({
      message: "Name is required",
    });
    return;
  }

  koders.push(name);

  response.json(koders);
});

// Delete koders
// /koderes/VARIABLE

server.delete("/koders/:name", (request, response) => {
  console.log("params", request.params);
  const name = request.params.name;

  const newkoders = koders.filter(
    (koder) => koder.toLowerCase() !== name.toLowerCase()
  );
  koders = newkoders;

  response.json(koders);
});

//reset of the list

server.delete("/koders", (request, response) => {
  koders = [];

  response.json(koders);
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
