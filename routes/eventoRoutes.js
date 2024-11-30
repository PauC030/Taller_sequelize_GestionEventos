const express = require('express');
const router = express.Router();
const EventoController = require('../controller/eventoController');

router.get('/evento', EventoController.obtenerEventos);
router.post('/evento', EventoController.crearEvento);
router.put('/evento/:id', EventoController.actualizarEvento);
router.delete('/evento/:id', EventoController.eliminarEvento);


module.exports = router;
