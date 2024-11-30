const express = require('express');
const router = express.Router();
const InscripcionController = require('../controller/inscripcionesController');

router.post('/inscripcion', InscripcionController.inscribirUsuario);
router.put('inscripcion/:id', InscripcionController.cancelarInscripcion);
router.get('/inscripcion', InscripcionController.obtenerInscripciones);

module.exports = router;
