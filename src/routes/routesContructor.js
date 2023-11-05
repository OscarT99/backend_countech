const empleadoRoutes = require('./empleadoRoute/empleadoRoute');

function configureRoutes(app, path) {
    app.use(path, empleadoRoutes);
    
    }

module.exports = configureRoutes;
