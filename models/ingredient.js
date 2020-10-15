'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    amount: {
      type: DataTypes.NUMERIC,
      validate: {
        notNull: true,
        min: {
          args: [0]
        }
      }
    },
    measurementUnitId:{
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        min: {
          args: [0]
        }
      }
    },
    foodStuff: {
      type: DataTypes.TEXT,
      validate: {
        notNull: true,
        notEmpty: true
      }

    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        min: {
          args: [0],
        }
      }
    },
  }, {});
  ingredient.associate = function(models) {
    ingredient.belongsTo(models.MeasurementUnit, { foreignKey: "measurementUnitId"});
    ingredient.belongsTo(models.recipe, { foreignKey: 'recipeId'});
  };
  return ingredient;
};
