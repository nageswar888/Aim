import InvoiceLineItemsDao from "../dao/invoicesLineItemsDao";
import { validationResult } from "express-validator";

export default class InvoiceLineItems {
  static createInvoiceLineItems(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    InvoiceLineItemsDao.createInvoiceLineItems(req)
      .then(createdInvoiceLineItems => {
        res.sendStatus(201);
      })
      .catch(error => res.sendStatus(403));
  }

  static readInvoiceLineItems(req, res) {
    InvoiceLineItemsDao.readInvoiceLineItems()
      .then(invoiceLineItemList => {
        if (invoiceLineItemList.count > 0) {
          res.status(201).json(invoiceLineItemList);
        } else {
          res.sendStatus(403);
        }
      })
      .catch(error => res.sendStatus(403));
  }

  static updateInvoiceLineItems(req, res) {}

  static deleteInvoiceLineItems(req, res) {
    InvoiceLineItemsDao.deleteInvoiceLineItems(req)
      .then(deletes => {
        res.sendStatus(200);
      })
      .catch(error => res.sendStatus(403));
  }
}
