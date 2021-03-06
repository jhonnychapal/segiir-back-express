const { Schema, model } = require('mongoose');

const TareaSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    realizada: {
        type: Boolean,
        default: false,
        required: true
    }
});

TareaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Tarea', TareaSchema);