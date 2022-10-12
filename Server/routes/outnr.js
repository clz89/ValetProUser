const express = require('express');
const router = express.Router();
const { createOut, getOuts, updateOut, deleteOut, likeOut } = require('../controllers/outnr')

router.post('/', createOut);
router.get('/', getOuts);
router.patch('/:id', updateOut);
router.delete('/:id', deleteOut);
router.patch('/:id/likepost', likeOut);

module.exports = router;