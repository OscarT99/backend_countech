const Sequelize = require('sequelize');
const mysql2 = require('mysql2');

const sequelize = new Sequelize('db_project_aws', 'admin', 'Default2023', {
  host: 'database-project-paula.cz2io8dbm9oh.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',
  dialectModule: mysql2,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos.', err);
  });

sequelize.sync()
  .then(() => {
    console.log('Tablas sincronizadas con éxito.');
  })
  .catch((err) => {
    console.error('Error al sincronizar las tablas:', err);
  });

module.exports = { sequelize };