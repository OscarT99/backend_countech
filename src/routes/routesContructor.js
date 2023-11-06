const usuarioRoutes = require('./usuarioRoute/usuarioRoute')
const clienteRoutes = require('./clienteRoute/clienteRoute');
const proveedorRoutes = require('./proveedorRoute/proveedorRoute')
const pedidoRoutes = require('./pedidoRoutes/pedidoRoute')
const referenciaPedidoRoutes = require('./pedidoRoutes/referenciaPedidoRoute')
const procesoReferenciaPedidoRoutes = require('./pedidoRoutes/procesoReferenciaPedidoController')
const colorProcesoReferenciaPedidoRoutes = require('./pedidoRoutes/colorProcesoReferenciaPedidoRoute')
const tallaColorProcesoReferenciaPedidoRoutes = require('./pedidoRoutes/tallaColorProcesoReferenciaPedidoController')
const ventaRoutes = require('./venta_routes/venta_routes')
const abonoVentaRutes = require('./abono_venta_routes/abono_venta_routes')
const detalleVentaRoutes = require('./detalleVentaRoute/detalleVentaRoute')

function configureRoutes(app, path) {
    app.use(path, usuarioRoutes);
    app.use(path, clienteRoutes);
    app.use(path,proveedorRoutes);
    app.use(path, pedidoRoutes);
    app.use(path, referenciaPedidoRoutes);
    app.use(path, procesoReferenciaPedidoRoutes);
    app.use(path, colorProcesoReferenciaPedidoRoutes);
    app.use(path, tallaColorProcesoReferenciaPedidoRoutes);   
    app.use(path, ventaRoutes);
    app.use(path, abonoVentaRutes); 
    app.use(path, detalleVentaRoutes);
    }

module.exports = configureRoutes;
