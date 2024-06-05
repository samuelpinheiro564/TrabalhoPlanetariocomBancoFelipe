const express = require('express');
const router = express.Router();
const UsuariosCotroller = require('../controllers/UsuariosCotroller');

router.get('/usuarios/:email/:senha', UsuariosCotroller.Login);
router.post('/usuarios', UsuariosCotroller.createUsuarios);
router.put('/usuarios/:id', UsuariosCotroller.updateUsuarios);
router.delete('/usuarios/:id', UsuariosCotroller.deleteUsuarios);

module.exports = router;