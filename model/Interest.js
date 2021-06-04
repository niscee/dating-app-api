const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const User = require('./User')

class Interest extends Model {}

Interest.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Interest", // We need to choose the model name
  }
);

module.exports = Interest;
