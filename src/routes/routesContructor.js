const clienteRoutes = require('./clienteRoute/clienteRoute');

const pedidoRoutes = require('./pedidoRoute/pedidoRoute');
const referenciaRoute = require('./pedidoRoute/referenciaRoute');
const procedimientoPedidoRoute = require('./pedidoRoute/procedimientoPedidoRoute');
const detallePedidoRoute = require('./pedidoRoute/detallePedidoRoute');
const empleadoRoutes = require('./empleadoRoute/empleadoRoute');

const produccionRoute = require('./produccionRoute/produccionRoute');
const asignarProcedimientoRoute = require('./produccionRoute/asignarProcedimientoRoute');
const reporteProduccionRoute = require('./produccionRoute/reporteProduccionRoute');

function configureRoutes(app, path) {
    app.use(path, clienteRoutes);

    app.use(path, pedidoRoutes);
    app.use(path, referenciaRoute);
    app.use(path, procedimientoPedidoRoute);
    app.use(path, detallePedidoRoute);

    app.use(path, empleadoRoutes);

    app.use(path, produccionRoute);
    app.use(path, asignarProcedimientoRoute);
    app.use(path, reporteProduccionRoute);
    
    
    }

module.exports = configureRoutes;
