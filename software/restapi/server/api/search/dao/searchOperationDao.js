import Promise from "bluebird";
import models from "../../../models";
let _ = require("lodash");
import Sequelize from "sequelize";

const Op = Sequelize.Op;

export default class SearchOperationDao {
  static searchAsset(req) {
    return new Promise((resolve, reject) => {
      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.Assets.findAndCountAll({
        limit: limit,
        offset: offset,
        attributes: ["id", "name", "company", "serialNumber", "assetType"],
        where: {
          [Op.or]: [
            {
              name: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              company: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              serialNumber: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              modal: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              yearOfManufacture: {
                [Op.iLike]: "%" + req.query.search + "%"
              }
            },
            {
              description: { [Op.iLike]: "%" + req.query.search + "%" }
            }
          ]
        },
        include: [{ model: models.AssetTypes, attributes: ["type"] }]
      }).then(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static searchResources(req) {
    return new Promise((resolve, reject) => {
      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.Resources.findAndCountAll({
        limit: limit,
        offset: offset,
        attributes: ["id", "empID", "firstname", "lastname", "email"],
        where: {
          [Op.or]: [
            {
              firstname: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              lastname: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              email: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              empID: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              address: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              phonenumber: { [Op.iLike]: "%" + req.query.search + "%" }
            },
            {
              laborCategory: { [Op.iLike]: "%" + req.query.search + "%" }
            }
          ]
        }
      }).then(
        search => {
          resolve(search);
        },
        error => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  static employeeAdvance(req) {
    return new Promise((resolve, reject) => {
      models.Resources.findAndCountAll({
        where: {
          [Op.and]: [
            {
              firstname: { [Op.iLike]: "%" + req.query.firstname + "%" }
            },
            {
              lastname: { [Op.iLike]: "%" + req.query.lastname + "%" }
            }
          ]
        }
      }).then(
        records => {
          resolve(records);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static assetAdvance(req) {
    return new Promise((resolve, reject) => {
      models.Assets.findAndCountAll({
        where: {
          [Op.or]: [
            {
              assetType: { [Op.eq]: req.query.assetType }
            },
            {
              invoiceLineItemID: { [Op.eq]: req.query.assetType }
            }
          ]
        },
        include: [{ model: models.AssetTypes, attributes: ["type"] }]
      }).then(
        search => {
          resolve(search);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static searchJoiningDate(req) {
    return new Promise((resolve, reject) => {
      models.Resources.findAndCountAll({
        where: {
          joiningDate: {
            [Op.lt]: new Date(),
            [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
          }
        }
      });
    });
  }
}
