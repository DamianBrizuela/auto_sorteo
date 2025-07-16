const { Sequelize, DataTypes } = require('sequelize');

// Conexión a SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Archivo donde se guarda la base
});
  
  // Exporta la conexión
  module.exports = sequelize;