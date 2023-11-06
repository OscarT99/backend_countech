const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/config");

const Pedido = require("./pedido");
const ReferenciaPedido = require("./referenciaPedido");

const DetallePedido = sequelize.define("detallePedido", {
  idDetallePedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  fkPedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  fkReferenciaPedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

DetallePedido.belongsTo(Pedido, {
  foreignKey: "fkPedido",
});

DetallePedido.belongsTo(ReferenciaPedido, {
  foreignKey: "fkReferenciaPedido",
});


module.exports = DetallePedido;
