const express = require("express");
const kodersRouter = require("./koders.routers");
const mentorsRouter = require("./mentors.routers");

const app = express();
app.use(express.json());

//middleware
app.use((request, response, next) => {
  console.log("middleware application");
  console.log(`${request.method} ${request.url}: ${request.body}`);
  next();
});

app.use((request, response, next) => {
  console.log("middleware authentication");
  if (request.headers.authorization === "pinkibuddin") {
    next();
  } else {
    response.status(401);
    response.json({
      message: "No tiene autorizacion",
      success: false,
    });
  }
});

// montar el routers

app.use("/koders", kodersRouter);

//Mentors

app.use("/mentors", mentorsRouter);

app.listen(8080, () => {
  console.log("server is running");
});
