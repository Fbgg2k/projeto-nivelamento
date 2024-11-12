// src/data/products.js
/*
export const products = [
  { id: 1, name: 'Quadro Dragon Ball', image: '/img/card_quadro01.jpg', description: 'Quadro Kame P/M/G retratil' },
  { id: 2, name: 'Action Figure', image: '/img/card_quadro02.jpg', description: 'Jiraya 50cm' },
  { id: 3, name: 'Funko PoP', image: '/img/card_quadro03.jpg', description: 'CDZ Cavaleiros de Ouro' },
  { id: 4, name: 'Playstation', image: '/img/card_quadro04.jpg', description: 'PS5 Bundle GOW Ultimate' },
  { id: 5, name: 'Camisa', image: '/img/card_quadro05.jpg', description: 'RE RPD Personalizada' },
];

export const searchProducts = (query) => {
  if (!query) return [];
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Loja', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
});

module.exports = Product;
*/