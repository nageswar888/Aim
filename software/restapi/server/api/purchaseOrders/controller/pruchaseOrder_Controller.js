import PurchaseOrderDao from "../dao/purchaseOrderDao";
import { validationResult } from "express-validator";

export default class PurchaseOrder {
  static createPurchaseOrder(req, res) {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    PurchaseOrderDao.createPurchaseOrder(req)
      .then(list => {
        res.status(201).jsonp(list);
      })
      .catch(error => {
        res.status(403).json(error);
      });
  }

  static readPurchaseOrder(req, res) {
    PurchaseOrderDao.readPurchaseOrder(req)
      .then(list => {
        res.status(200).json(list);
      })
      .catch(error => {
        res.status(403).json(error);
      });
  }

  static updatePurchaseOrder() {}

  static deletePurchaseOrder(req, res) {
    PurchaseOrderDao.deletePurchaseOrder(req)
      .then(deleted => {
        res.sendStatus(200);
      })
      .catch(error => {
        res.sendStatus(403);
      });
  }
}
