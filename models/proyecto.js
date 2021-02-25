const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    director: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    met: [{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }]
});

ProyectoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Proyecto', ProyectoSchema);