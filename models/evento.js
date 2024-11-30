
const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');


    const Evento = Sequelize.define('Evento', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255), 
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT 
        },
        fecha: {
            type: DataTypes.DATE, 
            allowNull: false
        },
        lugar: {
            type: DataTypes.STRING(255), 
            allowNull: false
        },
        capacidadMaxima: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagenUrl: {
            type: DataTypes.STRING(255)
        },
        precioEntrada: {
            type: DataTypes.DECIMAL(10, 2) 
        },
        categoria: {
            type: DataTypes.STRING(100) 
        },
        estado: {
            type: DataTypes.ENUM('activo', 'inactivo'), 
            defaultValue: 'activo'
        }
    }, {
        Sequelize,
        modelName: 'Evento',
    });
    
    module.exports = Evento;

