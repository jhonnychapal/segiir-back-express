/*
    Proyectos
    Path: /api/proyectos
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    borrarProyecto
} = require('../controllers/proyectos')

const router = Router();

router.get('/', getProyectos);

router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty(),
        check('director', 'El id del director debe ser válido').isMongoId(),
        check('met[]', 'El id del miembro del equipo debe ser válido').isMongoId(),
        validarCampos
    ],
    crearProyecto
);

router.put('/:id', [],
    actualizarProyecto
);

router.delete('/:id',
    borrarProyecto
);

module.exports = router;