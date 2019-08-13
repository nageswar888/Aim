const { body } = require('express-validator');

export const InvoicesLineItemValidator = {

  "invoiceLineItem_validator": (method) =>{

    if (method === 'invoicesLineItem') {
      {
        return [
          body('invoiceID').not().isEmpty().isNumeric(),
          body('amount').not().isEmpty().isNumeric()
        ]
      }
    }
  }
};
