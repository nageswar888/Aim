import ResourcesDao from "../dao/resourcesDao";
const { validationResult } = require("express-validator");

export default class Resources {
  static createResource(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    ResourcesDao.createResource(req)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(error => res.sendStatus(403));
  }

  static readResource(req, res) {
    ResourcesDao.readResource(req)
      .then(resourcesData => {
        res.status(200).json(resourcesData);
      })
      .catch(error => res.sendStatus(403));
  }
  static particularResource(req, res) {
    ResourcesDao.particularResource(req)
      .then(particularRecord => {
        res.status(200).json(particularRecord);
      })
      .catch(error => res.sendStatus(403));
  }

  static updateResource(req, res) {}

  static deleteResource(req, res) {
    ResourcesDao.deleteResource(req)
      .then(deletedResource => {
        res.sendStatus(200);
      })
      .catch(error => res.sendStatus(403));
  }
}
