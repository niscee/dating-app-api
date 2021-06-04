const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const User = require('./User');

class UserProfile extends Model {}

UserProfile.init(
  {
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "UserProfile", // We need to choose the model name
  }
);

UserProfile.belongsTo(User);

module.exports = UserProfile;
