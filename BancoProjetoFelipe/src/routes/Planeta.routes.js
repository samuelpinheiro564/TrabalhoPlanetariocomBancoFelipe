const express = require('express');
const router = express.Router();
const planetaController = require('../controllers/planetaController');

router.get('/planeta', planetaController.getAllplanetas);
router.post('/planeta', planetaController.CreatePlanetas);
router.put('/planeta/:id', planetaController.UpdatePlanetas);
router.delete('/planeta/:id', planetaController.DeletePlanetas);

module.exports = router;