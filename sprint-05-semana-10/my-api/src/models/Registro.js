const mongoose = require("mongoose");

const registroSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Registro = mongoose.model("Registro", registroSchema);

module.exports = Registro;
