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

        const actividadesAux = req.body.actividades;
        
        // Id Tareas
        const tarea1Id = actividadesAux[0].tarea[0]._id;
        const tarea2Id = actividadesAux[0].tarea[1]._id;
        const tarea3Id = actividadesAux[1].tarea[0]._id;
        const tarea4Id = actividadesAux[1].tarea[1]._id;
        const tarea5Id = actividadesAux[2].tarea[0]._id;
        const tarea6Id = actividadesAux[2].tarea[1]._id;
        const tarea7Id = actividadesAux[2].tarea[2]._id;
        const tarea8Id = actividadesAux[3].tarea[0]._id;
        const tarea9Id = actividadesAux[3].tarea[1]._id;
        const tarea10Id = actividadesAux[4].tarea[0]._id;
        const tarea11Id = actividadesAux[4].tarea[1]._id;
        const tarea12Id = actividadesAux[4].tarea[2]._id;
        const tarea13Id = actividadesAux[5].tarea[0]._id;
        const tarea14Id = actividadesAux[6].tarea[0]._id;
        const tarea15Id = actividadesAux[7].tarea[0]._id;
        const tarea16Id = actividadesAux[7].tarea[1]._id;
        const tarea17Id = actividadesAux[8].tarea[0]._id;
        const tarea18Id = actividadesAux[9].tarea[0]._id;
        const tarea19Id = actividadesAux[10].tarea[0]._id;
        const tarea20Id = actividadesAux[11].tarea[0]._id;
        const tarea21Id = actividadesAux[12].tarea[0]._id;
        const tarea22Id = actividadesAux[12].tarea[1]._id;
        const tarea23Id = actividadesAux[13].tarea[0]._id;
        const tarea24Id = actividadesAux[14].tarea[0]._id;
        const tarea25Id = actividadesAux[15].tarea[0]._id;
        const tarea26Id = actividadesAux[16].tarea[0]._id;
        const tarea27Id = actividadesAux[17].tarea[0]._id;

        //Estado tareas

        const tarea1Realizada = actividadesAux[0].tarea[0].realizada;
        const tarea2Realizada = actividadesAux[0].tarea[1].realizada;
        const tarea3Realizada = actividadesAux[1].tarea[0].realizada;
        const tarea4Realizada = actividadesAux[1].tarea[1].realizada;
        const tarea5Realizada = actividadesAux[2].tarea[0].realizada;
        const tarea6Realizada = actividadesAux[2].tarea[1].realizada;
        const tarea7Realizada = actividadesAux[2].tarea[2].realizada;
        const tarea8Realizada = actividadesAux[3].tarea[0].realizada;
        const tarea9Realizada = actividadesAux[3].tarea[1].realizada;
        const tarea10Realizada = actividadesAux[4].tarea[0].realizada;
        const tarea11Realizada = actividadesAux[4].tarea[1].realizada;
        const tarea12Realizada = actividadesAux[4].tarea[2].realizada;
        const tarea13Realizada = actividadesAux[5].tarea[0].realizada;
        const tarea14Realizada = actividadesAux[6].tarea[0].realizada;
        const tarea15Realizada = actividadesAux[7].tarea[0].realizada;
        const tarea16Realizada = actividadesAux[7].tarea[1].realizada;
        const tarea17Realizada = actividadesAux[8].tarea[0].realizada;
        const tarea18Realizada = actividadesAux[9].tarea[0].realizada;
        const tarea19Realizada = actividadesAux[10].tarea[0].realizada;
        const tarea20Realizada = actividadesAux[11].tarea[0].realizada;
        const tarea21Realizada = actividadesAux[12].tarea[0].realizada;
        const tarea22Realizada = actividadesAux[12].tarea[1].realizada;
        const tarea23Realizada = actividadesAux[13].tarea[0].realizada;
        const tarea24Realizada = actividadesAux[14].tarea[0].realizada;
        const tarea25Realizada = actividadesAux[15].tarea[0].realizada;
        const tarea26Realizada = actividadesAux[16].tarea[0].realizada;
        const tarea27Realizada = actividadesAux[17].tarea[0].realizada;

        //Actualizaciónd de tareas

        const tarea1Actualizada = await Tarea.findByIdAndUpdate(tarea1Id, {realizada:tarea1Realizada}, { new: true });
        const tarea2Actualizada = await Tarea.findByIdAndUpdate(tarea2Id, {realizada:tarea2Realizada}, { new: true });
        const tarea3Actualizada = await Tarea.findByIdAndUpdate(tarea3Id, {realizada:tarea3Realizada}, { new: true });
        const tarea4Actualizada = await Tarea.findByIdAndUpdate(tarea4Id, {realizada:tarea4Realizada}, { new: true });
        const tarea5Actualizada = await Tarea.findByIdAndUpdate(tarea5Id, {realizada:tarea5Realizada}, { new: true });
        const tarea6Actualizada = await Tarea.findByIdAndUpdate(tarea6Id, {realizada:tarea6Realizada}, { new: true });
        const tarea7Actualizada = await Tarea.findByIdAndUpdate(tarea7Id, {realizada:tarea7Realizada}, { new: true });
        const tarea8Actualizada = await Tarea.findByIdAndUpdate(tarea8Id, {realizada:tarea8Realizada}, { new: true });
        const tarea9Actualizada = await Tarea.findByIdAndUpdate(tarea9Id, {realizada:tarea9Realizada}, { new: true });
        const tarea10Actualizada = await Tarea.findByIdAndUpdate(tarea10Id, {realizada:tarea10Realizada}, { new: true });
        const tarea11Actualizada = await Tarea.findByIdAndUpdate(tarea11Id, {realizada:tarea11Realizada}, { new: true });
        const tarea12Actualizada = await Tarea.findByIdAndUpdate(tarea12Id, {realizada:tarea12Realizada}, { new: true });
        const tarea13Actualizada = await Tarea.findByIdAndUpdate(tarea13Id, {realizada:tarea13Realizada}, { new: true });
        const tarea14Actualizada = await Tarea.findByIdAndUpdate(tarea14Id, {realizada:tarea14Realizada}, { new: true });
        const tarea15Actualizada = await Tarea.findByIdAndUpdate(tarea15Id, {realizada:tarea15Realizada}, { new: true });
        const tarea16Actualizada = await Tarea.findByIdAndUpdate(tarea16Id, {realizada:tarea16Realizada}, { new: true });
        const tarea17Actualizada = await Tarea.findByIdAndUpdate(tarea17Id, {realizada:tarea17Realizada}, { new: true });
        const tarea18Actualizada = await Tarea.findByIdAndUpdate(tarea18Id, {realizada:tarea18Realizada}, { new: true });
        const tarea19Actualizada = await Tarea.findByIdAndUpdate(tarea19Id, {realizada:tarea19Realizada}, { new: true });
        const tarea20Actualizada = await Tarea.findByIdAndUpdate(tarea20Id, {realizada:tarea20Realizada}, { new: true });
        const tarea21Actualizada = await Tarea.findByIdAndUpdate(tarea21Id, {realizada:tarea21Realizada}, { new: true });
        const tarea22Actualizada = await Tarea.findByIdAndUpdate(tarea22Id, {realizada:tarea22Realizada}, { new: true });
        const tarea23Actualizada = await Tarea.findByIdAndUpdate(tarea23Id, {realizada:tarea23Realizada}, { new: true });
        const tarea24Actualizada = await Tarea.findByIdAndUpdate(tarea24Id, {realizada:tarea24Realizada}, { new: true });
        const tarea25Actualizada = await Tarea.findByIdAndUpdate(tarea25Id, {realizada:tarea25Realizada}, { new: true });
        const tarea26Actualizada = await Tarea.findByIdAndUpdate(tarea26Id, {realizada:tarea26Realizada}, { new: true });
        const tarea27Actualizada = await Tarea.findByIdAndUpdate(tarea27Id, {realizada:tarea27Realizada}, { new: true });

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