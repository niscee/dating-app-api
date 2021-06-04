const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const Interest = require('./Interest')
const UserInterest = require('./UserInterest')

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

User.belongsToMany(Interest, { through: 'UserInterest' });
Interest.belongsToMany(User, { through: 'UserInterest' });

module.exports = User;
