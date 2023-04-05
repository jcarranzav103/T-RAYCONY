

function places(){
  const express = require('express');
  const cors = require('cors');
  const fetch = require('node-fetch');
  
  const app = express();
  
  // Habilitar CORS
  app.use(cors());
  
  // Configurar los encabezados CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Permite el acceso desde cualquier dominio
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  // Definir ruta para obtener reseñas
  app.get('/reviews', async (req, res) => {
    const placeId = 'ChIJ-ChIJ-9QqT3z5oI8RY_FsBnGbBhs'; // ID del lugar
    const apiKey = 'AIzaSyCFOKzHxB4NUnAJrsk3X3X6DCRlfESVvZ0'; // Clave de API de Google Places
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,review&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.send(data.result.reviews); // Enviar las reseñas como respuesta
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener las reseñas');
    }
  });
  
  // Iniciar servidor
  app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
  });
  

}







