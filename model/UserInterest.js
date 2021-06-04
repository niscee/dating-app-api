const sequelize = require("../database");
const { Sequelize, DataTypes, Model } = require('sequelize');
const Interest = require('./Interest')
const User = require('./User')


const UserInterest = sequelize.define("UserInterest", {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User, 
      key: "id",
    },
  },
  InterestId: {
    type: DataTypes.INTEGER,
    references: {
      model: Interest,
      key: "id",
    },
  },
});

module.exports = UserInterest;