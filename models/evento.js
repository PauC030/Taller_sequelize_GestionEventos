
const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');


    const Evento = Sequelize.define('Evento', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255), // Coincide con VARCHAR(255)
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT // Coincide con TEXT
        },
        fecha: {
            type: DataTypes.DATE, // Coincide con DATETIME
            allowNull: false
        },
        lugar: {
            type: DataTypes.STRING(255), // Coincide con VARCHAR(255)
            allowNull: false
        },
        capacidadMaxima: {
            type: DataTypes.INTEGER, // Coincide con INT
            allowNull: false
        },
        imagenUrl: {
            type: DataTypes.STRING(255) // Coincide con VARCHAR(255)
        },
        precioEntrada: {
            type: DataTypes.DECIMAL(10, 2) // Coincide con DECIMAL(10, 2)
        },
        categoria: {
            type: DataTypes.STRING(100) // Coincide con VARCHAR(100)
        },
        estado: {
            type: DataTypes.ENUM('activo', 'inactivo'), // Coincide con ENUM
            defaultValue: 'activo'
        }
    }, {
        Sequelize,
        modelName: 'Evento',
    });
    
    module.exports = Evento;

