const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const registroRoutes = require("./routes/registroRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", registroRoutes);

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB", err));

module.exports = app;
