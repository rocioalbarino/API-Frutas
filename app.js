// Dependencias
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

// Express
const app = express();

// Puerto
const port = process.env.PORT || 3008;

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Carga los datos desde frutas.json
const frutasData = JSON.parse(fs.readFileSync('frutas.json', 'utf-8'));

// Conexión a MongoDB
const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexión a MongoDB establecida');
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

// Rutas

// Ruta base para /api/v1/
app.get('/api/v1/', (req, res) => {
  res.send('Bienvenida a nuestra API de frutas');
});


// Ruta para obtener todas las frutas
app.get('/api/v1/frutas', (req, res) => {
  res.json(frutasData);
});


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
