const { Sequelize, DataTypes } = require('sequelize');

// Conexión a SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Archivo donde se guarda la base
});

// Defino un modelo
const Cuadro = sequelize.define('Cuadro', {
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

// Sincronización de tablas
(async () => {
    await sequelize.sync();
  })();
  
  // Exporta los modelos y la conexión
  module.exports = { sequelize, Cuadro };