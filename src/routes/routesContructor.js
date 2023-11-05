const clienteRoutes = require('./clienteRoute/clienteRoute');
const proveedorRoutes = require('./proveedorRoute/proveedorRoute')
const pedidoRoutes = require('./pedidoRoutes/pedidoRoute')
const referenciaPedidoRoutes = require('./pedidoRoutes/referenciaPedidoRoute')
const procesoReferenciaPedidoRoutes = require('./pedidoRoutes/procesoReferenciaPedidoController')
const colorProcesoReferenciaPedidoRoutes = require('./pedidoRoutes/colorProcesoReferenciaPedidoRoute')
const tallaColorProcesoReferenciaPedidoRoutes = require('./pedidoRoutes/tallaColorProcesoReferenciaPedidoController')
const empleadoRoutes = require('./empleadoRoute/empleadoRoute');

function configureRoutes(app, path) {
    // app.use(path, clienteRoutes);
    }

module.exports = configureRoutes;
