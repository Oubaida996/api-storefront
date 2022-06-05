"use strict"



const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('../classes/Collection');
const Categories = require('./category.model');
const Products = require('./products.model');



const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


const sequelizeOptions = process.env.NODE_ENV === 'development' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

const db = new Sequelize(POSTGRES_URL, sequelizeOptions);

let categoryTable = Categories(db, DataTypes);
let ProductsTable = Products(db, DataTypes);

let categoryCollection = new Collection(categoryTable);
let ProductsCollection = new Collection(ProductsTable);

module.exports = {
    db: db,
    Categories: categoryCollection,
    Products: ProductsCollection

}