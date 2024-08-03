// start app
// listen server
// open conection

const serve = require("./src/server");
const db = require("./src/lib/db");

const port = 8080;

db.initialize();
serve.listen(port, () => {
  console.log(`server is listening on http://localhost${port}`);
});
