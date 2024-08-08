const express = require("express");
const kodersUsecases = require("../usecases/koders.usecase");
const createError = require("http-errors");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const koders = await kodersUsecases.getAll();

    response.json({
      success: true,
      message: "all koders",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/id", async (request, response) => {
  try {
    const id = request.params.id;
    const koders = await kodersUsecases.getById(id);

    if (!koders) {
      throw createError(404, "koders not found");
    }

    response.json({
      success: true,
      message: "koders by id",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const kodersData = request.body;
    const newKoders = await kodersUsecases.create(kodersData);

    response.json({
      success: true,
      message: "koders by id",
      data: { koder: newKoders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const kodersData = request.body;

    const newKoders = await kodersUsecases.create(kodersData);

    response.json({
      success: true,
      message: "koders by id",
      data: { koder: newKoders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const kodersData = request.body;

    const newKoders = await kodersUsecases.create(kodersData);
    response.json({
      success: true,
      message: "koders by id",
      data: { koder: newKoders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
