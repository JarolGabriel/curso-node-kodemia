const http = require("http");

const koders = ["adolfo", "luis", "jose"];

const server = http.createServer((request, response) => {
  const { method, url } = request;
  console.log(`${response.method} ${request.url}`);

  // create server to manage koders list
  if (method === "GET" && url === "/koders") {
    response.writeHead(200, { "content-type": "application.json" });
    response.write(JSON.stringify(koders));
    response.end();
  }
  if (method === "POST" && url === "/koders") {
    const newKoder = "nuevencio";
    koders.push(newKoder);

    response.writeHead(201, { "content-type": "application.json" });
    response.write(JSON.stringify(koders));
    response.end();
  }
});

server.listen(8080, () => {
  console.log("server started on http://8080");
});
