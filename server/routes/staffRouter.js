const express = require('express');
const staffController = require('./../controllers/staffController');
const { getAllStaffs, createStaff, getStaff } = staffController;
const router = express.Router();

router.route('/').get(getAllStaffs).post(createStaff);
router.route('/:id').get(getStaff);

module.exports = router;
