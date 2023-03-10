//Loads the express module
const express = require('express');
//Creates our express server
const app = express();
const port = 3000;
//Serves static files (we need it to import a css file)
app.use(express.static('public'))
//Sets a basic route
app.get('/saludo', (req, res) => {
    // Aquí puedes leer el parámetro de la URL
    const nombre = req.query.nombre;
  
    // Aquí puedes modificar la respuesta en función del parámetro
    const mensaje = nombre ? `¡Hola, ${nombre}!` : '¡Hola!';
  
    // Aquí envías la respuesta al cliente
    res.send(mensaje);
  });

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));