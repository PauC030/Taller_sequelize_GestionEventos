const InscripcionService = require('../service/inscripcionService');

class InscripcionController {
    static async inscribirUsuario(req, res) {
        try {
            const inscripcion = await InscripcionService.inscribirUsuario(req.body);
            res.json(inscripcion);
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    static async cancelarInscripcion(req, res) {
        try {
            const mensaje = await InscripcionService.cancelarInscripcion(req.params.id);
            res.json(mensaje);
        } catch (error) {
            res.json({ error:'error al cancelar la incripcion' });
        }
    }

    static async obtenerInscripciones(req, res) {
        try {
            const inscripciones = await InscripcionService.obtenerInscripciones();
            res.json(inscripciones);
        } catch (error) {
            res.json({ error:'error al obtener evento' });
        }
    }
}

module.exports = InscripcionController;
