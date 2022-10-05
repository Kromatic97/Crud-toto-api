//importamos de los controladores//
const { getAllTodos, getTodoById, createTodo}= require('./todos.controllers')

//funciones request y response//


//? --getAllTodos=== del controlador===//
const getTodos = (req, res) => {
    const data = getAllTodos()//==este es el controlador//
    res.status(200).json(data)
}


//? --getTodoById=== del controlador===//
const getOneTodos = (req, res) => {
    const id = req.params.id
    const data = getTodoById(id) //==este es el controlador//

    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({id:id, message:'the user dont exist'})
    }
}

//? --createTodo=== del controlador===//
const createNewTodos = (req, res) => {
    const { title } = req.body

    if(title){
        const data = createTodo(title) //==este es el controlador//
        res.status(201).json(data)
    }else{
        res.status(400).json ({message:'Missing Data'})
    }
}

//?Refular Export
module.exports = {
    getTodos, 
    getOneTodos, 
    createNewTodos
}