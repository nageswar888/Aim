'use strict';
module.exports = (sequelize, DataTypes) => {
  const project_resources = sequelize.define('project_resources', {
    project_ID: DataTypes.INTEGER,
    resource_ID: DataTypes.INTEGER
  }, {});
  project_resources.associate = function(models) {
    // associations can be defined here
    project_resources.belongsTo(models.Resources,{foreignKey:{name: 'resource_ID'}, onDelete: 'cascade',onUpdate: 'cascade'} );
    project_resources.belongsTo(models.Projects,{foreignKey: 'resourceID',onUpdate: 'cascade' ,onDelete: 'cascade'});
  };
  return project_resources;
};
