const mongoose = require("mongoose");

const kodersSchema = new mongoose.Schema({
  firsName: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 100,
  },
  lastName: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 100,
  },
  email: {
    type: String,
    require: true,
    match: RegExp(".*@.*..*"),
  },
});

//modelo nesewsitamos el nombre del modelo el nombre de la coleccion
module.exports = mongoose.model("koder", kodersSchema);
//usando nuestro modelo vamos a comunicarnos con nuestra base de datos
//crear documentos
// buscar documentos
