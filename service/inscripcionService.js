const Inscripcion = require('../models/inscripcion');
const Evento = require('../models/evento');

class InscripcionService {
    static async inscribirUsuario(data) {
        const evento = await Evento.findByPk(data.eventoId);
        if (!evento) throw new Error('Evento no encontrado');

        const inscripciones = await Inscripcion.count({ where: { eventoId: data.eventoId } });
        if (inscripciones >= evento.capacidadMaxima) {
           
        }

        return await Inscripcion.create(data);
    }

    static async cancelarInscripcion(id) {
        const inscripcion = await Inscripcion.findByPk(id);
        if (!inscripcion) throw new Error('Inscripción no encontrada');

        await inscripcion.update({ estado: 'cancelada' });
        return { mensaje: 'Inscripción cancelada exitosamente' };
    }

    static async obtenerInscripciones() {
        try {
            return await Inscripcion.findAll();
        } catch (error) {
            console.error('Error al obtener inscripciones:', error);
            
        }
    }
}

module.exports = InscripcionService;
