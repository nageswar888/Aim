import Promise from "bluebird";
import models from "../../../models";

export default class ResourcesDao {
  static createResource(req) {
    return new Promise((resolve, reject) => {
      models.Resources.create({
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        empID: req.body.empId,
        joiningDate: req.body.joiningDate,
        supervisor: req.body.supervisor,
        address: req.body.address,
        phonenumber: req.body.phoneNumber,
        laborCategory: req.body.laborCategory
      }).then(
        resource => {
          resolve(resource);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static readResource(req) {
    return new Promise((resolve, reject) => {

      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.Resources.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']],
        attributes: [
          "id",
          "firstname",
          "lastname",
          "email",
          "phonenumber"
        ]
      }).then(
        resourcesData => {
          resolve(resourcesData);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static particularResource(req) {
    return new Promise((resolve, reject) => {
      models.Resources.findAll({
        attributes: [
          "id",
          "empID",
          "firstname",
          "lastname",
          "email",
          "phonenumber",
          "supervisor",
          "laborCategory",
          "joiningDate",
          "address"
        ],
        where: {
          id: req.params.id
        }
      }).then(
        resourcesData => {
          resolve(resourcesData);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static deleteResource(req) {
    return;
  }
}
