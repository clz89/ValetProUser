const express = require('express');
const router = express.Router();
const { createComp, getComps, updateComp, deleteComp, likeComp } = require('../controllers/completed')

router.post('/', createComp);
router.get('/', getComps);
router.patch('/:id', updateComp);
router.delete('/:id', deleteComp);
router.patch('/:id/likepost', likeComp);

module.exports = router;