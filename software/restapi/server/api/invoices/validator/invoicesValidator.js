const { body } = require('express-validator');

export const InvoicesValidator = {

  "invoice_validator": (method) =>{

    if (method === 'invoices') {
      {
        return [
          body('invoiceDate').not().isEmpty(),
          body('receivedDate').not().isEmpty(),
          body('totalAmount').not().isEmpty().isNumeric()
        ]
      }
    }
  }
};
