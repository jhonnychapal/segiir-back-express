/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getUsuarios);

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('admin', 'El admin es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    crearUsuario
);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('admin', 'El admin es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    actualizarUsuario
);

router.delete('/:id',
    validarJWT,
    borrarUsuario
);

module.exports = router;