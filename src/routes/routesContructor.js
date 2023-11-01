const venta_routes = require('./venta_routes/venta_routes')
const abono_venta_routes = require('./abono_venta_routes/abono_venta_routes')

function configureRoutes(app, path) {
    app.use(path, venta_routes);
    app.use(path, abono_venta_routes);
}

module.exports = configureRoutes;
