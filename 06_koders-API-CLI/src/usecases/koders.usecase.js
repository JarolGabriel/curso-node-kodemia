const Koder = require("../models/koders.models");

async function create(data) {
  const newKoders = await Koder.create(data);
  return newKoders;
}

async function getAll() {
  const koders = await Koder.find({});
  return koders;
}

async function getById(id) {
  const koder = await Koder.findById(id);
  return koder;
}

async function update(id, newData) {
  const koder = await Koder.findByIdAndUpdate(id, newData, { new: true });
  return koder;
}

async function deleteById(id) {
  const deleteKoder = await Koder.findByIdAndDelete(id);
  return deleteKoder;
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
};
