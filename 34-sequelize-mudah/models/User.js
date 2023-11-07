const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../config/db")

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: DataTypes.STRING
}, {
  // freezeTableName: true,
  // timestamps: false
})

module.exports = User