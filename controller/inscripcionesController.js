const InscripcionService = require('../service/inscripcionService');

class InscripcionController {
    static async inscribirUsuario(req, res) {
        try {
            const inscripcion = await InscripcionService.inscribirUsuario(req.body);
            res.status(201).json(inscripcion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async cancelarInscripcion(req, res) {
        try {
            const mensaje = await InscripcionService.cancelarInscripcion(req.params.id);
            res.json(mensaje);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async obtenerInscripciones(req, res) {
        try {
            const inscripciones = await InscripcionService.obtenerInscripciones();
            res.json(inscripciones);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = InscripcionController;
