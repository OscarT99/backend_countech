const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/config");

const DetallePedido = require('../pedidoModel/detallePedido');


const ProduccionPedido = sequelize.define("ProduccionPedido", {
  idproduccionPedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  fechaProduccion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },

  fkDetallePedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});

ProduccionPedido.belongsTo(DetallePedido, {
  foreignKey: "fkDetallePedido",
});


module.exports = ProduccionPedido;
