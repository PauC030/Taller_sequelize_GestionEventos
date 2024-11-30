const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');
const evento = require('../models/evento');

    const Inscripcion = Sequelize.define('Inscripcion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuarioId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        eventoId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        fechaInscripcion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW 
        },
        estado: {
            type: DataTypes.ENUM('confirmada', 'cancelada'), 
            defaultValue: 'confirmada'
        }
    }, {
        Sequelize,
        modelName: 'Inscripcion',
    });
    
    // Definición de la relación
    Inscripcion.belongsTo(evento, { foreignKey: 'eventoId', onDelete: 'CASCADE' });
    
    module.exports = Inscripcion;