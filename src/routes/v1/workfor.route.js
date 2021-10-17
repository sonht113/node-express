const express = require('express');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const workForController = require('../../controllers/workfor.controller');

const router = express.Router();

router.route('/')
  .post(workForController.createWorkFor)
  .get(workForController.getWorkFors);

router
  .route('/:id')
  .get(workForController.getWorkFor)
  .patch(workForController.updateWorkFor)
  .delete(workForController.deleteWorkFor);

// router.route('/')
//   .post(validate(classValidation.createClass), classController.createClass)
//   .get(classController.getClasses);

// router
//   .route('/:classId')
//   .get(validate(classValidation.getClass), classController.getClass)
//   .patch(validate(classValidation.updateClass), classController.updateClass)
//   .delete(validate(classValidation.deleteClass), classController.deleteClass);

module.exports = router;