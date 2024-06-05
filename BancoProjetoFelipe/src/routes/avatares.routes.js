const express = require('express');
const router = express.Router();
const avataresController = require('../controllers/avataresController');

router.get('/avatares', avataresController.getAllavatares);
router.delete('/avatares/:id', avataresController.DeleteAvatares);
module.exports = router;