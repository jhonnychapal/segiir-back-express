const { response } = require('express');

const Proyecto = require('../models/proyecto');
const Actividad = require('../models/actividad');
const Tarea = require('../models/tarea');

const getProyectos = async(req, res = response) => {

    const proyectos = await Proyecto.find()
        .populate('director', 'nombre apellido')
        .populate('met', 'nombre apellido')
        .populate({
            path: 'actividades',
            populate: {
                path: 'tarea'
            }
        });


    res.json({
        ok: true,
        proyectos
    })
};

const getProyectoById = async(req, res = response) => {

    const id = req.params.id;

    try {

        const proyecto = await Proyecto.findById(id)
            .populate('director', 'nombre apellido')
            .populate('met', 'nombre apellido')
            .populate({
                path: 'actividades',
                populate: {
                    path: 'tarea'
                }
            });


        res.json({
            ok: true,
            proyecto
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            msg: 'Proyecto no encontrado'
        })
    }

};

const crearProyecto = async(req, res = response) => {



    try {

        // ACTIVIDAD 1

        const tarea1 = new Tarea({
            "nombre": "Identificar requisitos básicos del proyecto",
            "realizada": false
        });
        await tarea1.save()

        const tarea2 = new Tarea({
            "nombre": "Establecer características claves y limitaciones principales",
            "realizada": false
        });
        await tarea2.save()

        const actividad1 = new Actividad({
            "nombre": "Crear visión",
            "descripcion": "Permite definir los requisitos básicos y establecer características y limitaciones del proyecto",
            "tarea": [tarea1._id, tarea2._id]
        });
        const actividad1DB = await actividad1.save();
        const idActividad1 = actividad1DB._id;

        // ACTIVIDAD 2

        const tarea3 = new Tarea({
            "nombre": "Identificar y evaluar los riesgos",
            "realizada": false
        });
        await tarea3.save()

        const tarea4 = new Tarea({
            "nombre": "Modelar caso de negocio",
            "realizada": false
        });
        await tarea4.save()

        const actividad2 = new Actividad({
            "nombre": "Identificar y proyectar el negocio",
            "descripcion": "Permite identificar y evaluar riesgos, y modelar caso de negocio",
            "tarea": [tarea3._id, tarea4._id]
        });
        const actividad2DB = await actividad2.save();
        const idActividad2 = actividad2DB._id;

        // ACTIVIDAD 3

        const tarea5 = new Tarea({
            "nombre": "Redactar vocabulario común",
            "realizada": false
        });
        await tarea5.save()

        const tarea6 = new Tarea({
            "nombre": "Establecer o mantener reglas de negocio",
            "realizada": false
        });
        await tarea6.save()

        const tarea7 = new Tarea({
            "nombre": "Establecer y ajustar objetivos",
            "realizada": false
        });
        await tarea7.save()

        const actividad3 = new Actividad({
            "nombre": "Formalizar el negocio",
            "descripcion": "Permite redactar vocabulario común, definir reglas, y establecer y ajustar objetivos",
            "tarea": [tarea5._id, tarea6._id, tarea7._id]
        });
        const actividad3DB = await actividad3.save();
        const idActividad3 = actividad3DB._id;

        // ACTIVIDAD 4

        const tarea8 = new Tarea({
            "nombre": "Crear el modelo de objetos del negocio",
            "realizada": false
        });
        await tarea8.save()

        const tarea9 = new Tarea({
            "nombre": "Identificar trabajadores del negocio",
            "realizada": false
        });
        await tarea9.save()

        const actividad4 = new Actividad({
            "nombre": "Determinar entidades y los trabajadores del negocio",
            "descripcion": "Permite crear el modelo de objetos e identificar los trabajadores del negocio",
            "tarea": [tarea8._id, tarea9._id]
        });
        const actividad4DB = await actividad4.save();
        const idActividad4 = actividad4DB._id;

        // ACTIVIDAD 5

        const tarea10 = new Tarea({
            "nombre": "Identificar los actores del negocio",
            "realizada": false
        });
        await tarea10.save()

        const tarea11 = new Tarea({
            "nombre": "Estructurar el modelo de caso de uso",
            "realizada": false
        });
        await tarea11.save()

        const tarea12 = new Tarea({
            "nombre": "Definir la arquitectura del negocio",
            "realizada": false
        });
        await tarea12.save()

        const actividad5 = new Actividad({
            "nombre": "Identificar actores y establecer la arquitectura del negocio",
            "descripcion": "Permite identificar actores y establecer la arquitectura del negocio",
            "tarea": [tarea10._id, tarea11._id, tarea12._id]
        });
        const actividad5DB = await actividad5.save();
        const idActividad5 = actividad5DB._id;

        // ACTIVIDAD 6

        const tarea13 = new Tarea({
            "nombre": "Evaluar viabilidad con base en riesgos, modelo de caso de uso y visión del negocio",
            "realizada": false
        });
        await tarea13.save()

        const actividad6 = new Actividad({
            "nombre": "Evaluar viabilidad del negocio",
            "descripcion": "Permite evaluar viabilidad con base en los riesgos",
            "tarea": [tarea13._id]
        });
        const actividad6DB = await actividad6.save();
        const idActividad6 = actividad6DB._id;

        // ACTIVIDAD 7

        const tarea14 = new Tarea({
            "nombre": "Crear modelo de análisis y especificaciones",
            "realizada": false
        });
        await tarea14.save()

        const actividad7 = new Actividad({
            "nombre": "Representar inicialmente los requisitos del negocio",
            "descripcion": "Permite la creación de un modelo de análisis y especificaciones",
            "tarea": [tarea14._id]
        });
        const actividad7DB = await actividad7.save();
        const idActividad7 = actividad7DB._id;

        // ACTIVIDAD 8

        const tarea15 = new Tarea({
            "nombre": "Definir los actores del negocio",
            "realizada": false
        });
        await tarea15.save()

        const tarea16 = new Tarea({
            "nombre": "Detallar casos de uso",
            "realizada": false
        });
        await tarea16.save()

        const actividad8 = new Actividad({
            "nombre": "Definir actores y detallar casos de uso",
            "descripcion": "Permite definir los actores y detallar los casos de uso del negocio",
            "tarea": [tarea15._id, tarea16._id]
        });
        const actividad8DB = await actividad8.save();
        const idActividad8 = actividad8DB._id;

        // ACTIVIDAD 9

        const tarea17 = new Tarea({
            "nombre": "Especificar los requisitos",
            "realizada": false
        });
        await tarea17.save()

        const actividad9 = new Actividad({
            "nombre": "Especificar los requisitos del software",
            "descripcion": "Permite la especificación de los requisitos",
            "tarea": [tarea17._id]
        });
        const actividad9DB = await actividad9.save();
        const idActividad9 = actividad9DB._id;

        // ACTIVIDAD 10

        const tarea18 = new Tarea({
            "nombre": "Estructurar los casos de uso utilizando la especificación de los requisitos y el modelo de caso de uso del negocio",
            "realizada": false
        });
        await tarea18.save()

        const actividad10 = new Actividad({
            "nombre": "Estructurar casos de uso",
            "descripcion": "Permite estructurar el modelo de caso de uso del negocio",
            "tarea": [tarea18._id]
        });
        const actividad10DB = await actividad10.save();
        const idActividad10 = actividad10DB._id;

        // ACTIVIDAD 11

        const tarea19 = new Tarea({
            "nombre": "Priorizar casos de uso estructurados",
            "realizada": false
        });
        await tarea19.save()

        const actividad11 = new Actividad({
            "nombre": "Priorizar casos de uso",
            "descripcion": "Permite priorizar los casos de uso estructurados",
            "tarea": [tarea19._id]
        });
        const actividad11DB = await actividad11.save();
        const idActividad11 = actividad11DB._id;

        // ACTIVIDAD 12

        const tarea20 = new Tarea({
            "nombre": "Modelar prototipo utilizando lista priorizada de casos de uso",
            "realizada": false
        });
        await tarea20.save()

        const actividad12 = new Actividad({
            "nombre": "Modelar prototipo de interfaz de usuario",
            "descripcion": "Permite modelar el prototipo de interfaz de usuario",
            "tarea": [tarea20._id]
        });
        const actividad12DB = await actividad12.save();
        const idActividad12 = actividad12DB._id;

        // ACTIVIDAD 13

        const tarea21 = new Tarea({
            "nombre": "Identificar unidad de desarrollo",
            "realizada": false
        });
        await tarea21.save()

        const tarea22 = new Tarea({
            "nombre": "Establecer unidad de desarrollo",
            "realizada": false
        });
        await tarea22.save()

        const actividad13 = new Actividad({
            "nombre": "Crear unidad de desarrollo",
            "descripcion": "Permite identificar y establecer la unidad de desarrollo",
            "tarea": [tarea21._id, tarea22._id]
        });
        const actividad13DB = await actividad13.save();
        const idActividad13 = actividad13DB._id;

        // ACTIVIDAD 14

        const tarea23 = new Tarea({
            "nombre": "Diseñar prototipo utilizando el modelo del prototipo",
            "realizada": false
        });
        await tarea23.save()

        const actividad14 = new Actividad({
            "nombre": "Diseñar prototipo de interfaz de usuario",
            "descripcion": "Permite diseñar el prototipo de interfaz de usuario",
            "tarea": [tarea23._id]
        });
        const actividad14DB = await actividad14.save();
        const idActividad14 = actividad14DB._id;

        // ACTIVIDAD 15

        const tarea24 = new Tarea({
            "nombre": "Modelar clases que intervienen en el software",
            "realizada": false
        });
        await tarea24.save()

        const actividad15 = new Actividad({
            "nombre": "Modelar clases",
            "descripcion": "Permite realizar el modelo de clases que intervienen en el software",
            "tarea": [tarea24._id]
        });
        const actividad15DB = await actividad15.save();
        const idActividad15 = actividad15DB._id;

        // ACTIVIDAD 16

        const tarea25 = new Tarea({
            "nombre": "Modelar bases de datos que intervienen en el software",
            "realizada": false
        });
        await tarea25.save()

        const actividad16 = new Actividad({
            "nombre": "Modelar bases de datos",
            "descripcion": "Permite realizar el modelo de bases de datos que intervienen en el software",
            "tarea": [tarea25._id]
        });
        const actividad16DB = await actividad16.save();
        const idActividad16 = actividad16DB._id;

        // ACTIVIDAD 17

        const tarea26 = new Tarea({
            "nombre": "Diseñar clases que intervienen en el software",
            "realizada": false
        });
        await tarea26.save()

        const actividad17 = new Actividad({
            "nombre": "Diseñar clases",
            "descripcion": "Permite realizar el diseño de clases que intervienen en el software",
            "tarea": [tarea26._id]
        });
        const actividad17DB = await actividad17.save();
        const idActividad17 = actividad17DB._id;

        // ACTIVIDAD 18

        const tarea27 = new Tarea({
            "nombre": "Diseñar bases de datos que intervienen en el software",
            "realizada": false
        });
        await tarea27.save()

        const actividad18 = new Actividad({
            "nombre": "Diseñar bases de datos",
            "descripcion": "Permite realizar el diseño de bases de datos que intervienen en el software",
            "tarea": [tarea27._id]
        });
        const actividad18DB = await actividad18.save();
        const idActividad18 = actividad18DB._id;


        // CREACIÓN DEL PROYECTO

        const proyecto = new Proyecto({
            ...req.body,
            "actividades": [
                idActividad1,
                idActividad2,
                idActividad3,
                idActividad4,
                idActividad5,
                idActividad6,
                idActividad7,
                idActividad8,
                idActividad9,
                idActividad10,
                idActividad11,
                idActividad12,
                idActividad13,
                idActividad14,
                idActividad15,
                idActividad16,
                idActividad17,
                idActividad18
            ]
        });

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
    borrarProyecto,
    getProyectoById
}