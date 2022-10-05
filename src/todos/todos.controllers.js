//se importa para el createTodo//

const uuid = require ('uuid')

//!Creamos la Base de Datos//
const todoDB = [
    {
    id:'7bbea739-4a25-4b23-a9f1-1d750a5c2d8f',
    title:'Este es un titulo volviendo',
    is_completed:false
    },

    {
    id:'e898d851-988d-4fd9-9177-851d3e48e5db',
    title:'Este es otro titulo',
    is_completed:false,
    },
];

//?ACCIONES de los controladores//

//! --router.get('/todos')=== a esta ruta se envia toda la base de datos===
const getAllTodos = () => {
    return todoDB
}
//! --router.get('/todos/:id')===trae los datos que pide usuario por id===
const getTodoById = (id) => {
    const data = todoDB.find(todo => todo.id === id)
    return data
}

//!--router.post('/todos')===crea un nuevo titulo en la base de datos===
const createTodo = ( title ) => {
    const newTodo = {
        id: uuid.v4(),
        title,
        is_completed:false,
    }

    todoDB.push(newTodo)
    return newTodo
}


//?Exportamos todas las acciones de los controlladores//

module.exports = {
    getAllTodos, getTodoById, createTodo 
}