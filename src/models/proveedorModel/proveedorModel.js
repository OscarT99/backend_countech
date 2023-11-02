const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database/config');

const ProveedorModel = sequelize.define('Proveedor', {
  tipoProveedor: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Persona', 'Empresa']],
    },
  },
  tipoIdentificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [[
        'Registro civil',
        'Tarjeta de identidad',
        'Cedula de ciudadania',
        'Tarjeta de extranjero',
        'Cedula de extranjero',
        'NIT',
        'Pasaporte',
      ]],
    },
  },
  numeroIdentificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^\d+$/,
    },
  },
  razonSocial: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[A-Za-z ]+/,
    },
  },
  nombreComercial: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[A-Za-z ]+/,
    },
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[A-Za-z]+/,
    },
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contacto: {
    type: DataTypes.STRING,
    validate: {
      is: /^[A-Za-z ]+/,
    },
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^\(\+57\)\d{3}-\d{3}-\d{2}-\d{2}$/,
    },
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
    },
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});


module.exports = ProveedorModel;
