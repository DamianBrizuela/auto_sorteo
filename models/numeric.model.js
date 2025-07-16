const  DataTypes  = require('sequelize');
const sequelize = require('../database');

// Defino un modelo
const NumericRecord = sequelize.define('NumericRecord', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true
      },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buyer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    obsv: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // numero pago o no (true o false respectivamente)
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  });

  module.exports = NumericRecord;