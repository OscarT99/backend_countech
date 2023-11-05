const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect:'mysql',
    host:'localhost',
    username:'root',
    password:'password',
    database:'project_db_v1'
})

sequelize
    .authenticate()
    .then(() =>{
        console.log('Conexion a la base de datos exitosa.')
    })
    .catch((err) =>{
        console.error('Error al conectar a la base de datos.',err)
    })

sequelize.sync()
    .then(() =>{
        console.log('Tablas sincronizadas con exito')
    })
    .catch((err) =>{
        console.error('Error al sincronizar las tablas:',err)
    })

    module.exports = {sequelize}