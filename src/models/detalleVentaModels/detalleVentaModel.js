const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../../database/config');
const Pedido = require('../pedidoModels/pedidoModel');
const ReferenciaPedido = require('../pedidoModels/referenciaPedidoModel');
const ProcesoReferenciaPedido = require('../pedidoModels/procesoReferenciaPedidoModel');
const ColorProcesoReferenciaPedido = require('../pedidoModels/colorProcesoReferenciaPedidoModel');
const TallaColorProcesoReferenciaPedido = require('../pedidoModels/tallaColorProcesoReferenciaPedidoModel');

const DetalleVenta = sequelize.define('DetalleVenta', {
  // Atributos específicos de DetalleVenta, si los tienes
  observaciones: {
    type: DataTypes.STRING(300),
  }
});

// Relaciones entre modelos
DetalleVenta.belongsTo(Pedido, { foreignKey: 'pedido', as: 'Pedido' });
Pedido.hasOne(DetalleVenta, { foreignKey: 'pedido' });

DetalleVenta.belongsTo(ReferenciaPedido, { foreignKey: 'referencia', as: 'ReferenciaPedido' });
ReferenciaPedido.hasOne(DetalleVenta, { foreignKey: 'referencia' });

DetalleVenta.belongsTo(ProcesoReferenciaPedido, { foreignKey: 'proceso', as: 'ProcesoReferenciaPedido' });
ProcesoReferenciaPedido.hasOne(DetalleVenta, { foreignKey: 'proceso' });

DetalleVenta.belongsTo(ColorProcesoReferenciaPedido, { foreignKey: 'color', as: 'ColorProcesoReferenciaPedido' });
ColorProcesoReferenciaPedido.hasOne(DetalleVenta, { foreignKey: 'color' });

DetalleVenta.belongsTo(TallaColorProcesoReferenciaPedido, { foreignKey: 'talla', as: 'TallaColorProcesoReferenciaPedido' });
TallaColorProcesoReferenciaPedido.hasOne(DetalleVenta, { foreignKey: 'talla' });

module.exports = DetalleVenta;
