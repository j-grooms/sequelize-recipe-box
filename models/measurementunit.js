'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        notEmpty: true
      }

    }
  }, {});
  MeasurementUnit.associate = function(models) {
    MeasurementUnit.belongsTo(models.Ingredient, { foreignKey: "measurementUnitId"});
  };
  return MeasurementUnit;
};
