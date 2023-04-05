const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola mundo!');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});

const express = require('express');
const cors = require('cors');

const app = express();

// Habilitar CORS
app.use(cors());

// Configurar los encabezados CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Permite el acceso desde cualquier dominio
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
