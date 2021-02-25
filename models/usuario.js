const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
});

UsuarioSchema.method('toJSON', function() {
    const { __v, password, ...object } = this.toObject();
    return object;
})

module.exports = model('Usuario', UsuarioSchema);