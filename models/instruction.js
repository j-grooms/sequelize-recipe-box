'use strict';
module.exports = (sequelize, DataTypes) => {
  const instruction = sequelize.define('instruction', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  instruction.associate = function(models) {
    instruction.belongsTo(models.recipe, {foreignKey: 'recipeId'});
  };
  return instruction;
};