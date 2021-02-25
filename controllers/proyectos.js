const { response } = require('express');

const Proyecto = require('../models/proyecto');

const getProyectos = async(req, res = response) => {

    const proyectos = await Proyecto.find()
        .populate('director', 'nombre apellido')
        .populate('met', 'nombre apellido');

    res.json({
        ok: true,
        proyectos
    })
};

const crearProyecto = async(req, res = response) => {

    const proyecto = new Proyecto({
        ...req.body
    });

    try {

        const proyectoDB = await proyecto.save();

        res.json({
            ok: true,
            proyeto: proyectoDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }

};

const actualizarProyecto = async(req, res = response) => {

    res.json({
        ok: true,
        msg: 'actualizarProyectos'
    })
};

const borrarProyecto = async(req, res = response) => {

    res.json({
        ok: true,
        msg: 'borrarProyectos'
    })
};

module.exports = {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    borrarProyecto
}