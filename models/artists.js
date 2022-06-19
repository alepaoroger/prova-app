'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  artists.init({
    ArtistId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, 
  {
    sequelize,
    modelName: 'artists',
    tableName: 'artists',
    underscored: false,
    timestamps: false
  });
  return artists;
};