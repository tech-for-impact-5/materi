const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: "mysql",
  username: "root",
  password: "root",
  database: "sequelize-mudah"
});

module.exports = sequelize