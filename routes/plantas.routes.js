const express = require('express');

const router = express.Router();

const plantas_controller = require('../controller/plantas.controller')

//Aqui estaba el arreglo pero se camvbia a controller para que funcione la logica
const plantas = [];

//router.get es para registrar un middleware para peticiones HTTP GET

//Una vez se pone el controller se pasa de esta funcion:

//router.get('/agregar', (request, response, next) => {
  //  response.render('agregar_planta');
//});

// A esto separando la logica de las rutas

router.get('/agregar', plantas_controller.get_agregar);
router.get('/add', plantas_controller.get_agregar); // mismo metodo mismas acciones solo cambia la traducción

//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', plantas_controller.post_agregar);

const path = require('path');

router.get('/regar', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;