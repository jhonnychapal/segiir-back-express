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

        const tarea1 = new Tarea({
            "nombre": "Identificar requisitos básicos del proyecto",
            "realizada": false
        });

        const tarea2 = new Tarea({
            "nombre": "Establecer características claves y limitaciones principales",
            "realizada": false
        });

        const tarea3 = new Tarea({
            "nombre": "Identificar y evaluar los riesgos",
            "realizada": false
        });

        const tarea4 = new Tarea({
            "nombre": "Modelar caso de negocio",
            "realizada": false
        });

        const tarea5 = new Tarea({
            "nombre": "Redactar vocabulario común",
            "realizada": false
        });

        const tarea6 = new Tarea({
            "nombre": "Establecer o mantener reglas de negocio",
            "realizada": false
        });

        const tarea7 = new Tarea({
            "nombre": "Establecer y ajustar objetivos",
            "realizada": false
        });

        const tarea8 = new Tarea({
            "nombre": "Crear el modelo de objetos del negocio",
            "realizada": false
        });

        const tarea9 = new Tarea({
            "nombre": "Identificar trabajadores del negocio",
            "realizada": false
        });

        const tarea10 = new Tarea({
            "nombre": "Identificar los actores del negocio",
            "realizada": false
        });

        const tarea11 = new Tarea({
            "nombre": "Estructurar el modelo de caso de uso",
            "realizada": false
        });

        const tarea12 = new Tarea({
            "nombre": "Definir la arquitectura del negocio",
            "realizada": false
        });

        const tarea13 = new Tarea({
            "nombre": "Evaluar viabilidad con base en riesgos, modelo de caso de uso y visión del negocio",
            "realizada": false
        });

        const tarea14 = new Tarea({
            "nombre": "Crear modelo de análisis y especificaciones",
            "realizada": false
        });

        const tarea15 = new Tarea({
            "nombre": "Definir los actores del negocio",
            "realizada": false
        });

        const tarea16 = new Tarea({
            "nombre": "Detallar casos de uso",
            "realizada": false
        });

        const tarea17 = new Tarea({
            "nombre": "Especificar los requisitos",
            "realizada": false
        });

        const tarea18 = new Tarea({
            "nombre": "Estructurar los casos de uso utilizando la especificación de los requisitos y el modelo de caso de uso del negocio",
            "realizada": false
        });

        const tarea19 = new Tarea({
            "nombre": "Priorizar casos de uso estructurados",
            "realizada": false
        });

        const tarea20 = new Tarea({
            "nombre": "Modelar prototipo utilizando lista priorizada de casos de uso",
            "realizada": false
        });

        const tarea21 = new Tarea({
            "nombre": "Identificar unidad de desarrollo",
            "realizada": false
        });

        const tarea22 = new Tarea({
            "nombre": "Establecer unidad de desarrollo",
            "realizada": false
        });

        const tarea23 = new Tarea({
            "nombre": "Diseñar prototipo utilizando el modelo del prototipo",
            "realizada": false
        });

        const tarea24 = new Tarea({
            "nombre": "Modelar clases que intervienen en el software",
            "realizada": false
        });

        const tarea25 = new Tarea({
            "nombre": "Modelar bases de datos que intervienen en el software",
            "realizada": false
        });

        const tarea26 = new Tarea({
            "nombre": "Diseñar clases que intervienen en el software",
            "realizada": false
        });

        const tarea27 = new Tarea({
            "nombre": "Diseñar bases de datos que intervienen en el software",
            "realizada": false
        });

        const tareas = await Promise.all([
            tarea1.save(),
            tarea2.save(),
            tarea3.save(),
            tarea4.save(),
            tarea5.save(),
            tarea6.save(),
            tarea7.save(),
            tarea8.save(),
            tarea9.save(),
            tarea10.save(),
            tarea11.save(),
            tarea12.save(),
            tarea13.save(),
            tarea14.save(),
            tarea15.save(),
            tarea16.save(),
            tarea17.save(),
            tarea18.save(),
            tarea19.save(),
            tarea20.save(),
            tarea21.save(),
            tarea22.save(),
            tarea23.save(),
            tarea24.save(),
            tarea25.save(),
            tarea26.save(),
            tarea27.save(),
        ]);

        console.log(tareas);

        const actividad1 = new Actividad({
            "nombre": "Crear visión",
            "descripcion": "Permite definir los requisitos básicos y establecer características y limitaciones del proyecto",
            "tarea": [tarea1._id, tarea2._id]
        });

        const actividad2 = new Actividad({
            "nombre": "Identificar y proyectar el negocio",
            "descripcion": "Permite identificar y evaluar riesgos, y modelar caso de negocio",
            "tarea": [tarea3._id, tarea4._id]
        });

        const actividad3 = new Actividad({
            "nombre": "Formalizar el negocio",
            "descripcion": "Permite redactar vocabulario común, definir reglas, y establecer y ajustar objetivos",
            "tarea": [tarea5._id, tarea6._id, tarea7._id]
        });

        const actividad4 = new Actividad({
            "nombre": "Determinar entidades y los trabajadores del negocio",
            "descripcion": "Permite crear el modelo de objetos e identificar los trabajadores del negocio",
            "tarea": [tarea8._id, tarea9._id]
        });

        const actividad5 = new Actividad({
            "nombre": "Identificar actores y establecer la arquitectura del negocio",
            "descripcion": "Permite identificar actores y establecer la arquitectura del negocio",
            "tarea": [tarea10._id, tarea11._id, tarea12._id]
        });

        const actividad6 = new Actividad({
            "nombre": "Evaluar viabilidad del negocio",
            "descripcion": "Permite evaluar viabilidad con base en los riesgos",
            "tarea": [tarea13._id]
        });

        const actividad7 = new Actividad({
            "nombre": "Representar inicialmente los requisitos del negocio",
            "descripcion": "Permite la creación de un modelo de análisis y especificaciones",
            "tarea": [tarea14._id]
        });

        const actividad8 = new Actividad({
            "nombre": "Definir actores y detallar casos de uso",
            "descripcion": "Permite definir los actores y detallar los casos de uso del negocio",
            "tarea": [tarea15._id, tarea16._id]
        });

        const actividad9 = new Actividad({
            "nombre": "Especificar los requisitos del software",
            "descripcion": "Permite la especificación de los requisitos",
            "tarea": [tarea17._id]
        });

        const actividad10 = new Actividad({
            "nombre": "Estructurar casos de uso",
            "descripcion": "Permite estructurar el modelo de caso de uso del negocio",
            "tarea": [tarea18._id]
        });

        const actividad11 = new Actividad({
            "nombre": "Priorizar casos de uso",
            "descripcion": "Permite priorizar los casos de uso estructurados",
            "tarea": [tarea19._id]
        });

        const actividad12 = new Actividad({
            "nombre": "Modelar prototipo de interfaz de usuario",
            "descripcion": "Permite modelar el prototipo de interfaz de usuario",
            "tarea": [tarea20._id]
        });

        const actividad13 = new Actividad({
            "nombre": "Crear unidad de desarrollo",
            "descripcion": "Permite identificar y establecer la unidad de desarrollo",
            "tarea": [tarea21._id, tarea22._id]
        });

        const actividad14 = new Actividad({
            "nombre": "Diseñar prototipo de interfaz de usuario",
            "descripcion": "Permite diseñar el prototipo de interfaz de usuario",
            "tarea": [tarea23._id]
        });

        const actividad15 = new Actividad({
            "nombre": "Modelar clases",
            "descripcion": "Permite realizar el modelo de clases que intervienen en el software",
            "tarea": [tarea24._id]
        });

        const actividad16 = new Actividad({
            "nombre": "Modelar bases de datos",
            "descripcion": "Permite realizar el modelo de bases de datos que intervienen en el software",
            "tarea": [tarea25._id]
        });
        
        const actividad17 = new Actividad({
            "nombre": "Diseñar clases",
            "descripcion": "Permite realizar el diseño de clases que intervienen en el software",
            "tarea": [tarea26._id]
        });

        const actividad18 = new Actividad({
            "nombre": "Diseñar bases de datos",
            "descripcion": "Permite realizar el diseño de bases de datos que intervienen en el software",
            "tarea": [tarea27._id]
        });

        const actividades = await Promise.all([
            actividad1.save(),
            actividad2.save(),
            actividad3.save(),
            actividad4.save(),
            actividad5.save(),
            actividad6.save(),
            actividad7.save(),
            actividad8.save(),
            actividad9.save(),
            actividad10.save(),
            actividad11.save(),
            actividad12.save(),
            actividad13.save(),
            actividad14.save(),
            actividad15.save(),
            actividad16.save(),
            actividad17.save(),
            actividad18.save(),
        ]);

        // CREACIÓN DEL PROYECTO

        const proyecto = new Proyecto({
            ...req.body,
            "actividades": [
                actividades[0]._id,
                actividades[1]._id,
                actividades[2]._id,
                actividades[3]._id,
                actividades[4]._id,
                actividades[5]._id,
                actividades[6]._id,
                actividades[7]._id,
                actividades[8]._id,
                actividades[9]._id,
                actividades[10]._id,
                actividades[11]._id,
                actividades[12]._id,
                actividades[13]._id,
                actividades[14]._id,
                actividades[15]._id,
                actividades[16]._id,
                actividades[17]._id
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