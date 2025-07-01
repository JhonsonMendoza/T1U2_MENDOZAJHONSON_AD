const mongoose = require('mongoose');

const laboratorioSchema = new mongoose.Schema({
  nombre: String,
  ubicacion: String
});

module.exports = mongoose.model('Laboratorio', laboratorioSchema);
