const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/config");

const ReferenciaPedido = sequelize.define("ReferenciaPedido", {

  idRefPedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  referencia: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cantidadTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  valorUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  valorTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },


});

module.exports = ReferenciaPedido;
