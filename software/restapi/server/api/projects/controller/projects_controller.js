import ProjectDao from "../dao/projectsDao";
import {validationResult} from "express-validator";


export default class Projects {

  static createProjects(req,res){
    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(422).json({ errors: errors.array() });

    }
    ProjectDao.createProjects(req).then((createdProjects) => {

      res.sendStatus(201);
    })
      .catch(error => res.sendStatus(403));
  }

  static readProjects(req,res){
    ProjectDao.readProjects(req).then(projectlist => {
      res.status(200).json(projectlist);
    })
      .catch(error => res.status(403));
  }

  static updateProjects(req,res){

  }

  static deleteProject(req,res){
    ProjectDao.deleteProject(req).then(deletedProject => {
      res.send(200).json(deletedProject);
    })
      .catch(error => res.sendStatus(403));
  }
}
