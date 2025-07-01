require('dotenv').config();
const mongoose = require('mongoose');
const Usuario = require('./modelos/Usuario');
const Laboratorio = require('./modelos/Laboratorio');
const Equipo = require('./modelos/Equipo');

mongoose.connect('mongodb://admin:admin123@localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function ejecutarConsultas() {
  // 1. Listar todos los usuarios
  console.log(await Usuario.find());

  // 2. Laboratorios con equipos disponibles
  const equiposDisponibles = await Equipo.find({ estado: 'disponible' }).populate('laboratorio');
  console.log(equiposDisponibles);

  // 3. Contar equipos por estado
  const cantidadEquipos = await Equipo.countDocuments({ estado: 'disponible' });
  console.log(`Equipos disponibles: ${cantidadEquipos}`);

  // 4. Usuarios con correo @universidad.edu
  const correosUni = await Usuario.find({ correo: /@universidad\.edu$/ });
  console.log(correosUni);

  // 5. Promedio de equipos por laboratorio
  const promedio = await Equipo.aggregate([
    { $group: { _id: "$laboratorio", totalEquipos: { $sum: 1 } } }
  ]);
  console.log(promedio);

  mongoose.connection.close();
}

ejecutarConsultas();
