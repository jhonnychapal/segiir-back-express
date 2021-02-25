const { response } = require('express');
const Usuario = require('../models/usuario');
const Proyecto = require('../models/proyecto');


const getTodo = async(req, res = response) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');

    const [usuariosNombre, usuariosApellido, proyectos] = await Promise.all([
        Usuario.find({ nombre: regex }),
        Usuario.find({ apellido: regex }),
        Proyecto.find({ nombre: regex })
    ]);

    res.json({
        ok: true,
        usuariosNombre,
        usuariosApellido,
        proyectos
    });
}

const getDocumentosColeccion = async(req, res = response) => {

    const busqueda = req.params.busqueda;
    const tabla = req.params.tabla;
    const regex = new RegExp(busqueda, 'i');

    switch (tabla) {
        case 'usuarios':
            const [dataNombre, dataApellido] = await Promise.all([
                Usuario.find({ nombre: regex }),
                Usuario.find({ apellido: regex })
            ]);

            res.json({
                ok: true,
                resultados: { dataNombre, dataApellido }
            });

            break;
        case 'proyectos':

            const data = await Proyecto.find({ nombre: regex })
                .populate('director', 'nombre apellido')
                .populate('met', 'nombre apellido');

            res.json({
                ok: true,
                resultados: data
            });

            break;

        default:
            res.status(400).json({
                ok: false,
                msg: 'La tabla tiene que ser usuarios/proyectos'
            });
    }
}

module.exports = {
    getTodo,
    getDocumentosColeccion
};