const express = require('express');
const router = express.Router();
const controller = require('../laboratorio28/entregan.controller');

router.post('/', controller.registrarEntrega);

module.exports = router;