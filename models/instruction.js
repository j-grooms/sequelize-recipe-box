'use strict';
module.exports = (sequelize, DataTypes) => {
  const instruction = sequelize.define('instruction', {
    specification:{
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },
    listOrder: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        min: {
          args: [0]
        }
      }
    },
    recipeId:{
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        min: {
          args: [0]
        }
      }
    }
  }, {});
  instruction.associate = function(models) {
    instruction.belongsTo(models.recipe, {foreignKey: 'recipeId'});
  };
  return instruction;
};
