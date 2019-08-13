const { body } = require('express-validator');

export const ResourceValidator = {

  "resource_validator": (method) =>{

    if (method === 'resource') {
      {
        return [
          body("firstName").not().isEmpty().isLength({min: 3}),
          body('lastName').not().isEmpty().isLength({min: 3}),
          body('email').not().isEmpty().isEmail(),
          body('empId').not().isEmpty(),
          body('joiningDate').not().isEmpty(),
          body('supervisor').not().isEmpty(),
          body('address').not().isEmpty(),
          body('phoneNumber').not().isEmpty().isLength({min:10,max:10}),
          body('laborCategory').not().isEmpty().isLength({min: 3})
        ]
      }
    }
  }
};
