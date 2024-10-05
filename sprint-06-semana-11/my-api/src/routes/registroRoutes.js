const express = require("express");
const Registro = require("../models/Registro");

const router = express.Router();

router.post("/registro", async (req, res) => {
  const { url, name, description } = req.body;

  if (!url || !name || !description) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    const novoRegistro = new Registro({ url, name, description });
    await novoRegistro.save();
    res.status(201).json(novoRegistro);
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar o registro", error: err });
  }
});

router.get("/dados", async (req, res) => {
  try {
    const registros = await Registro.find();
    res.json(registros);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao buscar os registros", error: err });
  }
});

module.exports = router;
