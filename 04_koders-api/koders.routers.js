const express = require("express");

const router = express.Router();

router.use((request, response, next) => {
  console.log("middleware koders");
  next();
});

//podemos montar otros rauters
//router.use("/attendace", attendaceRouter)

router.get(
  "/",
  (request, response, next) => {
    console.log("middleware");
    next();
  },
  (request, response) => {
    response.json({ message: "GET koders" });
  }
);

router.post("/", (request, response) => {
  response.json({ message: "POST koders" });
});

//
router.delete("/:name", (request, response) => {
  response.json({ message: "DELETE koders" });
});

router.delete("/sofia", (request, response) => {
  response.json({ message: "DELETE sofia" });
});

router.delete("/:name/attendance/:day", (request, response) => {
  response.json({ message: "DELETE attendance" });
});

module.exports = router;
