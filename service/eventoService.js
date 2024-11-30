const Evento = require('../models/evento');

class EventoService {
    static async crearEvento(data) {
        return await Evento.create(data);
    }

    static async obtenerEventos() {
        try {
            return await Evento.findAll();
        } catch (error) {
            console.error('Error al obtener eventos:', error);
            throw error; // Lanza el error para manejarlo en el controlador
        }
    }

    static async actualizarEvento(id, datos) {
        try {
            const [actualizar] = await Evento.update(datos, { where: { id } });
            if (actualizar === 0) {
                return { mensaje: 'Evento no encontrado' };
            } else {
                return { mensaje: 'Evento actualizado exitosamente' };
            }
        } catch (e) {
            console.error('Error al actualizar el evento:', e);
            throw e; // Lanza el error para manejarlo en el controlador
        }
    }

    static async eliminarEvento(id) {
        try {
            const borrar = await Evento.destroy({ where: { id } });
            if (borrar === 0) {
                return { mensaje: 'Evento no encontrado para eliminar' };
            } else {
                return { mensaje: 'Evento eliminado exitosamente' };
            }
        } catch (e) {
            console.error('Error al eliminar el evento:', e);
            throw e; // Lanza el error para manejarlo en el controlador
        }
    }
}

module.exports = EventoService;
