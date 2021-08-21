const { Schema, model } = require('mongoose');

const CarreraSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    coordinador: {
        type: String,
        required: true,
    },
});


CarreraSchema.method( 'toJSON', function() {
    const { __v, ...object } = this.toObject();

    return object;
})

module.exports = model( 'Carrera', CarreraSchema )