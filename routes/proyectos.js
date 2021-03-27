/*
    Proyectos
    Path: /api/proyectos
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT,varlidarAdmin } = require('../middlewares/validar-jwt');

const {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    borrarProyecto,
    getProyectoById
} = require('../controllers/proyectos')

const router = Router();

router.get('/', validarJWT, getProyectos);

router.post('/', [
        validarJWT,
        varlidarAdmin,
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty(),
        check('director', 'El id del director debe ser válido').isMongoId(),
        check('met.*', 'El id del miembro del equipo debe ser válido').isMongoId(),
        validarCampos
    ],
    crearProyecto
);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarProyecto
);

router.delete('/:id', [
        validarJWT,
    ],
    varlidarAdmin,
    borrarProyecto
);

router.get('/:id', [
        validarJWT,
    ],
    getProyectoById
);

module.exports = router;