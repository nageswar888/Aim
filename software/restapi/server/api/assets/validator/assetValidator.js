const { body } = require('express-validator');

export const AssetValidator = {

  "asset_validator": (method) =>{

    if (method === 'assets') {

      {
        return [
          body("name").isLength({min: 3}),
          body('company').isLength({min: 3}),
          body('serialNumber').not().isEmpty(),
          body('assetType').not().isEmpty(),
          body('model').not().isEmpty(),
          body('yearOfManufacture').not().isEmpty(),
          body('warrantyExpiryDate').not().isEmpty().toDate(),
          body('subscriptionType').not().isEmpty(),
          body('tag').not().isEmpty(),
          body('invoiceLineItemId').not().isEmpty().isNumeric(),
          body('description').isLength({min: 3})
        ]
      }
    }
  }
};
