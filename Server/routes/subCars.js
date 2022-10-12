const express = require('express');
const router = express.Router();
const { createCar, getCars, updateCar, deleteCar, likeCar } = require('../controllers/subCars')

router.post('/', createCar);
router.get('/', getCars);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);
router.patch('/:id/likepost', likeCar);

module.exports = router;