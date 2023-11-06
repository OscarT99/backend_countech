const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/config");

const ReferenciaPedido = require("./referenciaPedido");

const Procedimiento = sequelize.define("Procedimiento", {
  idProcedimiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  proceso: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  talla: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },

  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },

  fkReferencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Procedimiento.belongsTo(ReferenciaPedido, { foreignKey: "fkReferencia" });

module.exports = Procedimiento;
