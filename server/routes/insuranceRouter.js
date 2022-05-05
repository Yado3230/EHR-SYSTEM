const express = require('express');
const insuranceController = require('./../controllers/insuranceController');
const { getAllInsurances, createInsurance, getInsurance } = insuranceController;

const router = express.Router();

router.route('/').get(getAllInsurances).post(createInsurance);
router.route('/:id').get(getInsurance);
module.exports = router;
