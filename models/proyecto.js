const { Schema, model } = require('mongoose')
const ProyectoSchema = Schema({
    id: {
        type: String,
        required: [true, 'Id']
    },
    nombre: {
        type: String,
        required: [true, 'nombre']
    },
    horasDedicadas: {
        type: String,
        required: [true, 'horas trabajadas']
    },
    valorProyecto: {
        type: String,
        require: [true, 'Valor proyecto']
    },
    numeroIntegrantes: {
        type: String,
        require: [true, 'numero integrantes']
    }
})
module.exports = model('Proyecto',ProyectoSchema)