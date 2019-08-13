import Promise from "bluebird";
import models from "../../../models";

export default class InvoiceLineItemsDao {

  static createInvoiceLineItems(req){
    return new Promise((resolve,reject) => {
      models.InvoiceLineItems.create({
        invoiceID: req.body.invoiceID,
        amount: req.body.amount,
        createdDate: new Date()
      })
        .then(createdInvoiceLineItem => {
          resolve(createdInvoiceLineItem);
        },error => {
          reject(error);
        })
    })
  }

  static readInvoiceLineItems(){
    return new Promise((resolve,reject) => {
      models.InvoiceLineItems.findAndCountAll({
        order: [['id', 'DESC']]
      })
        .then(createdInvoiceLineItem => {
          resolve(createdInvoiceLineItem);
        },error => {
          reject(error);
        })
    })
  }

  static deleteInvoiceLineItems(req){
    return new Promise((resolve,reject) => {
      models.InvoiceLineItems.destroy({
        where : {
          id:req.params.id
        }
      })
    })
  }
}
