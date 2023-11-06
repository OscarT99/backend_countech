const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../../database/config');

const Venta = sequelize.define('Venta', {
  pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaVenta: {
    type: DataTypes.DATE,
    //eliteral: establece el valor predeterminado como la fecha y hora actual.
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  valorTotal: {
    //Número decimal con dos decimales
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      //el valor debe ser mayor o igual a 0.
      min: 0,
    },
  },
  formaDePago: {
    type: DataTypes.STRING(7),
    allowNull: false,
    validate: {
      // solo puede contener los dos valores mencionados
      isIn: [['Contado', 'Credito']],
    },
  },
  observaciones: {
    type: DataTypes.STRING(300),
  },
  estadoPago: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      isIn: [['Pago', 'Pendiente']],
    },
  },
});


module.exports = Venta;  