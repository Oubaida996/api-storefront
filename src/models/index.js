'use strict'

const { Sequelize, DataTypes } = require('sequelize');
const Foods = require('./food');
const Clothes = require('./clothes');


//prepare the connection
const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
let sequelizeOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

// sequelize.sync({force :false}).then(()=>{
//     console.log('created');
// }).catch(err =>{
//     console.log("from sync" , err);
// })

module.exports = {
  db: sequelize,
  Foods: Foods(sequelize, DataTypes),
  Clothes: Clothes(sequelize, DataTypes)
}



