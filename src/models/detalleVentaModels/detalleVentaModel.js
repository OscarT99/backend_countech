const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../../database/config');
const Pedido = require('../pedidoModels/pedidoModel');
const ReferenciaPedido = require('../pedidoModels/referenciaPedidoModel');
const ProcesoReferenciaPedido = require('../pedidoModels/procesoReferenciaPedidoModel');
const ColorProcesoReferenciaPedido = require('../pedidoModels/colorProcesoReferenciaPedidoModel');
const TallaColorProcesoReferenciaPedido = require('../pedidoModels/tallaColorProcesoReferenciaPedidoModel');


const DetalleVenta = sequelize.define('DetalleVenta', {
});

DetalleVenta.belongsTo(Pedido, { foreignKey: 'pedido' });
DetalleVenta.belongsTo(ReferenciaPedido, { foreignKey: 'referencia' });
DetalleVenta.belongsTo(ProcesoReferenciaPedido, { foreignKey: 'proceso' });
DetalleVenta.belongsTo(ColorProcesoReferenciaPedido, { foreignKey: 'color' });
DetalleVenta.belongsTo(TallaColorProcesoReferenciaPedido, { foreignKey: 'talla' });

module.exports = DetalleVenta;