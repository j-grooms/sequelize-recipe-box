'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }

    }
  }, {});
  MeasurementUnit.associate = function(models) {
    MeasurementUnit.belongsTo(models.ingredient, { foreignKey: "measurementUnitId"});
  };
  return MeasurementUnit;
};
