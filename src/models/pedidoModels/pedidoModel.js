const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database/config');
const Cliente = require('../clienteModel/clienteModel')

const PedidoModel = sequelize.define('Pedido', {
  cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  contacto: {
    type: DataTypes.STRING,
  },
  ordenTrabajo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fechaOrdenTrabajo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaRegistro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  fechaEntregaOrden: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  formaPago: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Contado', 'Credito']],
    },
  },
  valorTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  estadoPago: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'Pendiente',
    validate: {
      isIn: [['Pago', 'Pendiente']],
    },
  },
  observaciones: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'Registrado',
    validate: {
      isIn: [['Registrado', 'En proceso', 'Terminado']],
    },
  },
});


PedidoModel.belongsTo(Cliente, { foreignKey: 'cliente' });

module.exports = PedidoModel;
