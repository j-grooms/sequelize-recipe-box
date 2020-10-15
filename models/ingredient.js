'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    amount: DataTypes.NUMERIC,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: DataTypes.TEXT,
    recipeId: DataTypes.INTEGER
  }, {});
  ingredient.associate = function(models) {
    // associations can be defined here
  };
  return ingredient;
};