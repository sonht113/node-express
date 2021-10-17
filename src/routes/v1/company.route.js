const express = require('express');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const companiesController = require('../../controllers/company.controller');

const router = express.Router();

router.route('/')
    .post(companiesController.createCompany)
    .get(companiesController.getCompanies);

router
    .route('/:id')
    .get(companiesController.getCompany)
    .patch(companiesController.updateCompany)
    .delete(companiesController.deleteCompany);

// router.route('/')
//   .post(validate(classValidation.createClass), classController.createClass)
//   .get(classController.getClasses);

// router
//   .route('/:classId')
//   .get(validate(classValidation.getClass), classController.getClass)
//   .patch(validate(classValidation.updateClass), classController.updateClass)
//   .delete(validate(classValidation.deleteClass), classController.deleteClass);

module.exports = router;