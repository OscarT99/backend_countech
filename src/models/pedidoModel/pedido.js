const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/config");

const Cliente = require("../clienteModel/clienteModel");

const Pedido = sequelize.define("Pedido", {
  idPedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  fechaRegistro: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },

  fechaEntrega: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  metodoPago: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["Contado", "Credito"]],
    },
  },

  valorTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },

  estado: {
    type: DataTypes.STRING,
    defaultValue: "Pendiente",
    validate: {
      isIn: [["Pendiente", "En proceso", "Terminado"]],
    },
  },

  fkCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Pedido.belongsTo(Cliente, { foreignKey: "fkCliente" });

module.exports = Pedido;
