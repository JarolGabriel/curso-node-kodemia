const fs = require("node:fs");

const dbName = "db.json";

const initialData = {
  koders: [],
  mentors: [],
  generations: [],
};

function initialize() {
  const exists = fs.existsSync(dbName);

  if (!exists) {
    fs.writeFileSync(dbName, JSON.stringify(initialData));
  }
}

function read(key) {
  const content = fs.readFileSync(dbName, "utf8");
  const json = JSON.parse(content);

  if (key) {
    return json[key];
  }

  return json;
}

function save(key, newData) {
  const content = fs.readFileSync(dbName, "utf8");
  const json = JSON.parse(content);
  const validKeys = Object.keys(initialData);

  if (!key) {
    throw new Error("key is required");
  }

  if (!validKeys.includes(key)) {
    throw new Error("key should be one of: " + validKeys.join(", "));
  }

  if (!newData) {
    throw new Error("newData is required");
  }

  if (!Array.isArray(newData)) {
    throw new Error("newData should be an array");
  }

  json[key] = newData;

  fs.writeFileSync(dbName, JSON.stringify(json));

  return json;
}

module.exports = {
  initialize,
  read,
  save,
};
