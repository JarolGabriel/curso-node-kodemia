const express = require("express");
const kodersRouters = require("./routers/koders.routers");

const app = express();

app.use(express.json());
app.use("/koders", kodersRouters);

app.get("/", (request, response) => {
  response.json({
    seccess: true,
    message: "KodersAPI",
  });
});

module.exports = app;
