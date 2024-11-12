// src/models/product.js
const { Sequelize, DataTypes } = require('sequelize');
/*
// Configure a conexão com o banco de dados
const sequelize = new Sequelize('Loja', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

// Defina o modelo Product
const Product = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'Produto',
  timestamps: false // Se você não tem colunas createdAt e updatedAt
});

// Exportar a instância sequelize e o modelo Product
module.exports = { sequelize, Product };
*/