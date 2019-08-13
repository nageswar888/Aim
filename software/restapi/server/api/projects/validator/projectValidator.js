const { body } = require('express-validator');

export const ProjectValidator = {

  "project_validator": (method) =>{

    if (method === 'projects') {

      {
        return [
          body("name").not().isEmpty().isLength({min:3}),
          body('vendor').not().isEmpty().isLength({min:3}),
          body('startDate').not().isEmpty()
        ]
      }
    }
  }
};
