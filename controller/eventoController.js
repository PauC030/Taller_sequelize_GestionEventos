const EventoService = require('../service/eventoService');

class EventoController {
    static async crearEvento(req, res) {
        try {
            const evento = await EventoService.crearEvento(req.body);
            res.status(201).json(evento);
        } catch (e) {
            res.status(400).json({ error: 'Error al crear el evento' });
        }
    }

    static async obtenerEventos(req, res) {
        try {
            const eventos = await EventoService.obtenerEventos();
            console.log(eventos);
            res.json(eventos);
        } catch (error) {
            res.json({ error: 'Error al obtener eventos' });
        }
    }

    static async actualizarEvento(req, res) {
        try {
            const mensaje = await EventoService.actualizarEvento(req.params.id, req.body);
            res.json(mensaje);
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    static async eliminarEvento(req, res) {
        try {
            const mensaje = await EventoService.eliminarEvento(req.params.id);
            res.json(mensaje);
        } catch (error) {
            res.json({ error: 'errror al eliminar' });
        }
    }
}

module.exports = EventoController;
