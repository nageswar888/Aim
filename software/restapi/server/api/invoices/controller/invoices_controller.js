import InvoicesDAO from "../dao/invoicesDao";
import {validationResult} from "express-validator";

export default class Invoices {

  static createInvoices(req,res){

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(422).json({ errors: errors.array() });

    }

    InvoicesDAO.createInvoices(req).then(() => {
        res.sendStatus(201)
      })
        .catch(error => res.sendStatus(403));
  }

  static readInvoices(req,res){
    InvoicesDAO.readInvoices().then(invoicesList => {
      if(invoicesList.count > 0){
        res.status(200).json(invoicesList);
      }else{
        res.sendStatus(403);
      }
    })
      .catch(error => res.sendStatus(403));
  }

  static updateInvoices(req,res){

  }

  static deleteInvoices(req,res){
      InvoicesDAO.deleteInvoices(req).then(deletedinvoices => {
        res.sendStatus(200);
      })
        .catch(error => res.sendStatus(403));
  }
}
