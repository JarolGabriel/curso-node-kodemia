const KodersUsecase = require("../usecases/koders.usecase");
const getArgValue = require("../lib/getArgValue");

async function add() {
  const firstName = getArg("firstName");
  const lastName = getArg("lastName");
  const email = getArg("email");

  const newKoder = await KodersUsecase.create({
    firstName,
    lastName,
    email,
  });

  console.log("====== koders create====");
  console.log(newKoder);
  process.exit(0);
}

async function rm() {
  const id = getArgValue("id");

  const kodersdelete = await KodersUsecase.deleteById(id);

  console.log("====== koders delete ====");
  console.log(kodersdelete);
  process.exit(0);
}

async function ls() {
  const koders = await KodersUsecase.getAll();
  console.log(koders);
  process.exit(0);
}

module.exports = {
  add,
  rm,
  ls,
};
