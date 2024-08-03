const { error } = require("console");
const fs = require("fs");
const dbName = "db.json";

function initialize() {
  const exist = fs.existsSync(dbName);
  if (!exist) {
    fs.writeFileSync(
      dbName,
      JSON.stringify({
        koders: [],
        mentors: [],
        generation: [],
      })
    );
  }
}

function read(key) {
  const content = fs.readFileSync(dbName, "utf-8");
  const json = JSON.parse(content);

  if (key) {
    return json[key];
  }

  return json;
}

function save(key, newDate) {
  const content = fs.readFileSync(dbName, "utf-8");
  const json = JSON.parse(content);

  if (key && typeof key === "string") {
    json[key] = newDate;
  } else {
    throw new error("key is required and should be a string");
  }

  fs.writeFileSync(dbName, JSON.stringify(json));

  return json;
}

module.exports = {
  initialize,
  read,
  save,
};
