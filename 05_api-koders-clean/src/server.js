// description server
const express = require("express");
const loggerMiddleware = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.get("/", (require, response) => {
  response.json({
    succes: true,
    message: "Koders APIv1",
  });
});

module.exports = app;
