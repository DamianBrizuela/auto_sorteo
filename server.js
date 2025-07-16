const app  = require ('./app');
const sequelize  = require ('./database');
// const { Sequelize, DataTypes } = require('sequelize');

const PORT= 3000;


(async () => {
    console.log('initialize server!')
    try {
      await sequelize.sync(); // Crea tablas si no existen
      console.log('Base de datos sincronizada');
  
      app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error('Error al iniciar:', err);
    }
  })();