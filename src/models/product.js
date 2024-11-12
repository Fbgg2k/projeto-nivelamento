const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Importar dotenv

// Conectar ao banco de dados usando as variáveis do .env
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

// Definindo o modelo Product
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  }
}, {
  timestamps: true, // Adiciona os campos createdAt e updatedAt automaticamente
});

// Exportando sequelize e Product
module.exports = { sequelize, Product };
