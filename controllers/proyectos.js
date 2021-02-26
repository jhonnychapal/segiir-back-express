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

    const id = req.params.id;
    try {

        const proyecto = await Proyecto.findById(id);

        if (!proyecto) {
            return res.status(404).json({
                ok: true,
                msg: 'Proyeto no encontrado por id'
            });
        }

        const cambiosProyecto = {
            ...req.body
        }

        const proyectoActualizado = await Proyecto.findByIdAndUpdate(id, cambiosProyecto, { new: true });

        res.json({
            ok: true,
            proyectoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
};

const borrarProyecto = async(req, res = response) => {

    const id = req.params.id;
    try {

        const proyecto = await Proyecto.findById(id);

        if (!proyecto) {
            return res.status(404).json({
                ok: true,
                msg: 'Proyeto no encontrado por id'
            });
        }

        await Proyecto.findByIdAndDelete(id);

        res.json({
            ok: true,
            msg: 'Proyecto eliminado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
};

module.exports = {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    borrarProyecto
}