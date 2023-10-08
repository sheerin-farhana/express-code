const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('node-complete', 'root', process.env.MYSQLPASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;