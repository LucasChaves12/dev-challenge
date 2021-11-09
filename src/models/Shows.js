const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('shows', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      genre:{
        type: DataTypes.STRING,
        allowNull:false
      },
      poster: {
        type: DataTypes.TEXT,
      },
      
    },{ timestamps:false,});
  };