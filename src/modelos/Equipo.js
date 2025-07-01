const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
  tipo: String,
  estado: String,
  laboratorio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Laboratorio'
  }
});

module.exports = mongoose.model('Equipo', equipoSchema);
