//CLI
const db = require("./src/lib/db");

const kodersActions = require("./src/commands/koders.commands");

const recurso = process.argv[2]; //koders, mentors, generation
const action = process.argv[3]; // add, rm, ls

const allowedActions = {
  koders: kodersActions,
  mentors: {},
  generations: {},
};

db.connect()
  .then(async () => {
    console.log("DB connection");
    const resorceActions = allowedActions[recurso];

    if (!resorceActions) {
      console.log(`unknown recurso ${recurso}`);
      process.exit(3);
    }

    const requesActions = resorceActions[action];

    if (!requesActions) {
      console.log(`unknown action ${action}`);
      process.exit(2);
    }

    requesActions();
  })
  .catch((error) => {
    console.error("DB connection error:", error);
    process.exit(1);
  });

// Promise

//stados
//. pendiente
//. resuelta .then(function(resultado))
//. rechasada .catch(function(resultado))
