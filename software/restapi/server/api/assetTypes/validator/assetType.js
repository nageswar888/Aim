const { body } = require('express-validator');

export const AssetTypeValidator = {

  "assetType_validator": (method) =>{

    if (method === 'AssetType') {
      {
        return [
          body("name").not().isEmpty().isLength({min:3}),
          body('type').not().isEmpty(),
          body('description').not().isEmpty().isLength({min:3})
        ]
      }
    }
  }
};
