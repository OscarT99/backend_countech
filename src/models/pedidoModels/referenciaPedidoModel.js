const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../../database/config');
const Pedido = require('./pedidoModel')

const ReferenciaPedidoModel = sequelize.define('ReferenciaEnPedido', {
  pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  referencia: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-zA-Z0-9]+/,
    },
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z0-9]+/,
    },
  },
  valorUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  cantidadTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
});


ReferenciaPedidoModel.belongsTo(Pedido, { foreignKey: 'pedido' });

module.exports = ReferenciaPedidoModel;
