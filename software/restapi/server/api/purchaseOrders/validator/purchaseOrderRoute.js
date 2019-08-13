const { body } = require('express-validator');

export const PurchaseOrdervalidator = {

  "purchaseOrder_validator": (method) =>{

    if (method === 'purchaseOrder') {

      {
        return [
          body("vendor").not().isEmpty().isLength({min: 3}),
          body('purchasedOn').not().isEmpty(),
          body('status').not().isEmpty(),
          body('receivedDate').not().isEmpty(),
          body('assetRequestId').not().isEmpty(),
          body('description').not().isEmpty().isLength({min: 3}),
          body('createdBy').not().isEmpty()
        ]
      }
    }
  }
};
