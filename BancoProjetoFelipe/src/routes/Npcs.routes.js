const express = require('express');
const router = express.Router();
const npcsController = require('../controllers/npcsController');

router.get('/npcs/:id', npcsController.NpcPeloId);

module.exports = router;