const sequelize = require('../config/database');
const Product = require('./Product');
const Category = require('./Category');

Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = { sequelize, Product, Category };