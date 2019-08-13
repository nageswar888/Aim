const { body } = require('express-validator');

export const AssetAssignmentValidator = {

  "assetAssignment_validator": (method) =>{

    if (method === 'assetAssignment') {
      {
        return [
          body("assetID").not().isEmpty().isNumeric(),
          body('resourceID').not().isEmpty().isNumeric(),
          body('projectID').not().isEmpty().isNumeric(),
          body('billable').not().isEmpty(),
          body('startDate').not().isEmpty(),
          body('endDate').not().isEmpty(),
          body('status').not().isEmpty(),
          body('active').not().isEmpty()
        ]
      }
    }
  }
};
