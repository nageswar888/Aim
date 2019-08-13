'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define('Projects', {
    name: DataTypes.STRING,
    vendor: DataTypes.STRING,
    startDate: DataTypes.DATE,
    createdDate: DataTypes.DATE
  }, {});
  Projects.associate = function(models) {
    // associations can be defined here

    Projects.belongsToMany(models.Resources,{through: 'project_resources', as: 'projectResources', foreignKey: 'project_ID'});
    Projects.hasMany(models.AssetAssignments,{foreignKey: 'projectID',sourceKey: 'id'});
    Projects.hasMany(models.AssetRequests, {foreignKey: 'projectID',sourceKey: 'id'});

  };
  return Projects;
};
