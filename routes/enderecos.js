const express = require('express');
const router = express.Router();
const addressController = require('../controller/addressController');

router.post('/', addressController.create);
router.get('/', addressController.getAll);
router.get('/:id', addressController.getOne);
router.put('/:id', addressController.updateOne);
router.delete('/:id', addressController.delete);

module.exports = router;