import Promise from "bluebird";
import models from "../../../models";

export default class InvoicesDAO {

  static createInvoices(req){
      return new Promise((resolve,reject) => {
        models.Invoices.create({
          invoiceDate: req.body.invoiceDate,
          receivedDate:req.body.receivedDate,
          createdDate:new Date(),
          totalAmount: req.body.totalAmount
        })
          .then(createdInvoices  => {
            resolve(createdInvoices)
          },error => {
            reject(error);
          })
      })
  }

  static readInvoices(){
    return new Promise((resolve,reject) => {
      models.Invoices.findAndCountAll({
        order: [['id', 'DESC']]
      })
        .then(invoicesList => {
          resolve(invoicesList);
        },
          error => {
          reject(error);
          })
    })
  }

  static deleteInvoices(req){
    return new Promise((resolve,reject) => {
      models.Invoices.destroy({
        where: {
          id: req.params.id
        }
      }).then(deletedInvoce => {
        resolve(deletedInvoce);
      },error => {
        reject(error);
      })
    })
  }
}

