const { Schema, model } = require('mongoose');

const ActividadSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tarea: [{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Tarea'
    }]
}, { collection: 'actividades' });

ActividadSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Actividad', ActividadSchema);