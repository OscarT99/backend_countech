const clienteRoutes = require('./clienteRoute/clienteRoute');
const pedidoRoutes = require('./pedidoRoutes/pedidoRoute')
const referenciaPedidoRoutes = require('./pedidoRoutes/referenciaPedidoRoute')
const procesoReferenciaPedidoRoutes = require('./pedidoRoutes/procesoReferenciaPedidoController')
const colorProcesoReferenciaPedidoRoutes = require('./pedidoRoutes/colorProcesoReferenciaPedidoRoute')
const tallaColorProcesoReferenciaPedidoRoutes = require('./pedidoRoutes/tallaColorProcesoReferenciaPedidoController')

function configureRoutes(app, path) {
    app.use(path, clienteRoutes);
    app.use(path, pedidoRoutes);
    app.use(path, referenciaPedidoRoutes);
    app.use(path, procesoReferenciaPedidoRoutes);
    app.use(path, colorProcesoReferenciaPedidoRoutes);
    app.use(path, tallaColorProcesoReferenciaPedidoRoutes);
    }

module.exports = configureRoutes;
