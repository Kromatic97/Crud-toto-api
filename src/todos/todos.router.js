//* /todos [POST, GET]
//* /todos:id [GET]


const router = require('express').Router()

//?importamos todos los services//
const todoServices = require('./todos.services')


router.get('/todos',todoServices.getTodos)

router.post('/todos',todoServices.createNewTodos)

router.get('/todos/:id',todoServices.getOneTodos)

//?Export Default
module.exports = router