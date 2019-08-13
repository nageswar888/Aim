import Promise from "bluebird";
import models from "../../../models";
let _ = require("lodash");
import Sequelize from "sequelize";

const Op = Sequelize.Op;
export default class AssetDao {
  static createAssets(req) {
    return new Promise((resolve, reject) => {
      models.Assets.create({
        name: req.body.name,
        assetType: req.body.assetType,
        company: req.body.company,
        serialNumber: req.body.serialNumber,
        model: req.body.model,
        yearOfManufacture: req.body.yearOfManufacture,
        description: req.body.description,
        subscriptionType: req.body.subscriptionType,
        tag: req.body.tag,
        invoiceLineItemID: req.body.invoiceLineItemId,
        warrantyExpireDate: req.body.warrantyExpiryDate,
        createdDate: new Date()
      }).then(
        asset => {
          resolve(asset);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static readAssets(req) {
    return new Promise((resolve, reject) => {
      console.log(req.query.itemsPerPage);
      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.Assets.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [["id", "DESC"]],
        attributes: ["id", "name", "company", "serialNumber"],
        include: [{ model: models.AssetTypes, attributes: ["type", "id"] }]
      }).then(
        allAssets => {
          resolve(allAssets);
        },
        error => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  static particularAsset(req) {
    console.log("assetDao")
    return new Promise((resolve, reject) => {
      models.Assets.findAll({
        attributes: [
          "id",
          "name",
          "company",
          "serialNumber",
          "model",
          "invoiceLineItemID",
          "warrantyExpireDate",
          "subscriptionType",
          "description",
          "yearOfManufacture"
        ],
        where: {
          id: req.params.id
        },
        include: [{ model: models.AssetTypes, attributes: ["type"] }]
      }).then(
        allAssets => {
          resolve(allAssets);
        },
        error => {

          reject(error);
        }
      );
    });
  }

  static deleteAsset(req) {
    return new Promise((resolve, reject) => {
      models.Assets.destroy({
        where: {
          id: req.params.id
        }
      }).then(
        deleteAsset => {
          resolve(deleteAsset);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
