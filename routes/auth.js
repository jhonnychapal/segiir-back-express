/*
    Path: '/api/login'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { login, renewToken, resetPassword,newPassword,validPasswordToken  } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT, varlidarAdmin_Usuario } = require('../middlewares/validar-jwt');

const router = Router();

router.post('/', [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validarCampos,
        // varlidarAdmin_Usuario
    ],
    login
);

router.get('/renew',
    validarJWT,
    renewToken
);

router.post('/req-reset-password', resetPassword);
router.post('/new-password', newPassword);
router.post('/valid-password-token', validPasswordToken);

module.exports = router;