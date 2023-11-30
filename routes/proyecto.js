const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { proyectoGet, proyectoPost, proyectoPut, proyectoDelete } = require('../controllers/proyecto')

route.get('/', proyectoGet)

route.post('/', proyectoPost)

route.put('/', proyectoPut)

route.delete('/', proyectoDelete)

module.exports = route