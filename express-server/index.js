const express = require("express");

const koders = ["adolfo", "luis", "jose"];

const server = express();
//const app = express();

server.get("/", (request, response) => {
  response.writeHead(200, { "content-type": "text/plain" });
  response.write("hello world");
  response.end();
});

// list koders

server.get("/koders", (request, response) => {
  //     response.writeHead(200, { "content-type": "text/plain" });
  //   response.write(JSON.stringify(koders));
  //   response.end();

  response.status(500).json(koders);
});

server.listen(8080, () => {
  console.log("server is running on port 8080");
});
