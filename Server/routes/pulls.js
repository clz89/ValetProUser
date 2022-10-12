const express = require('express');
const router = express.Router();
const { createPull, getPulls, updatePull, deletePull, likePull } = require('../controllers/pulls')

router.post('/', createPull);
router.get('/', getPulls);
router.patch('/:id', updatePull);
router.delete('/:id', deletePull);
router.patch('/:id/likepost', likePull);

module.exports = router;