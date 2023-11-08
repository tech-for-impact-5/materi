const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Todo = sequelize.define(
  "todo",
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    user_id: {
      type: DataTypes.INTEGER,
    }
  },
  {
    // freezeTableName: true,
    // timestamps: false
    // underscored: true
  }
);

// Todo.belongsTo(User,  { foreignKey: 'user_id'})

module.exports = Todo;
