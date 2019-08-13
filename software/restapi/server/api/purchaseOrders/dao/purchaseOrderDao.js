import Promise from "bluebird";
import models from "../../../models";

export default class PurchaseOrderDao {
  static createPurchaseOrder(req) {
    return new Promise((resolve, reject) => {
      models.PurchaseOrders.create({
        vendor: req.body.vendor,
        purchasedOn: req.body.purchasedOn,
        status: req.body.status,
        receivedDate: req.body.receivedDate,
        assetRequestID: req.body.assetRequestId,
        description: req.body.description,
        createdBy: req.body.createdBy,
        CreatedDate: new Date()
      }).then(
        created => {
          resolve(created);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static readPurchaseOrder(req) {
    return new Promise((resolve, reject) => {
      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.PurchaseOrders.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']]
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

  static deletePurchaseOrder(req) {
    return new Promise((resolve, reject) => {
      models.PurchaseOrders.destroy({
        where: {
          id: req.params.id
        }
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
}
