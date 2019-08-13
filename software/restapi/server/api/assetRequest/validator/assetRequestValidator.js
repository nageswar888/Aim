const { body } = require('express-validator');

export const AssetRequestValidator = {

  "assetRequest_validator": (method) =>{

    if (method === 'assetRequest') {

      {
        return [
          body('assetType').not().isEmpty().isNumeric(),
          body('resourceId').not().isEmpty().isNumeric(),
          body('projectId').not().isEmpty().isNumeric(),
          body('dueDate').not().isEmpty(),
          body('status').not().isEmpty(),
          body('createdBy').not().isEmpty().isNumeric(),
          body('reason').not().isEmpty(),
          body('description').not().isEmpty()
        ]
      }
    }
  }
};
