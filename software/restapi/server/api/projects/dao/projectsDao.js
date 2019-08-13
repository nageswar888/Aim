import Promise from "bluebird";
import models from "../../../models";

export default class ProjectDao {

  static createProjects(req){
    return new Promise((resolve,reject) => {

      models.Projects.create({
        name: req.body.name,
        vendor: req.body.vendor,
        startDate: req.body.startDate,
        createdDate: new Date()
      })
        .then(createdProjects => {
          resolve(createdProjects)
        },error => {
          console.log(error);
          reject(error);
        })
    })
  }

  static readProjects(req){
    return new Promise((resolve,reject) => {

      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.Projects.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']]
      })
        .then(projectlist => {
          resolve(projectlist);
        },error => {
          reject(error);
        })
    })
  }

  static deleteProject(req){
    return new  Promise((resolve,reject) => {
      models.Projects.destroy({
        where : {
          id: req.params.id
        }
      })
        .then(deletedProject => {
          resolve(deletedProject);
        },error => {
          reject(error);
        })
    })
  }
}
