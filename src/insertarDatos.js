require('dotenv').config();
const mongoose = require('mongoose');
const Usuario = require('./modelos/Usuario');
const Laboratorio = require('./modelos/Laboratorio');
const Equipo = require('./modelos/Equipo');

mongoose.connect('mongodb://admin:admin123@localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function insertar() {
  await Usuario.deleteMany();
  await Laboratorio.deleteMany();
  await Equipo.deleteMany();

  const usuarios = await Usuario.insertMany([
    { nombre: 'Carlos', correo: 'carlos@universidad.edu' },
    { nombre: 'Ana', correo: 'ana@gmail.com' }
  ]);

  const laboratorio1 = await Laboratorio.create({ nombre: 'Lab Redes', ubicacion: 'Bloque B' });
  const laboratorio2 = await Laboratorio.create({ nombre: 'Lab Electrónica', ubicacion: 'Bloque C' });

  await Equipo.insertMany([
    { tipo: 'Router', estado: 'disponible', laboratorio: laboratorio1._id },
    { tipo: 'Switch', estado: 'en uso', laboratorio: laboratorio1._id },
    { tipo: 'Osciloscopio', estado: 'disponible', laboratorio: laboratorio2._id }
  ]);

  console.log('Datos insertados');
  mongoose.connection.close();
}

insertar();
