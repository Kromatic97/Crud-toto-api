const express = require('express')
const app = express()

//importamos los routers
const todoRouter = require('./todos/todos.router')

//rutas path y verbos y http
//controladores logicas y acciones referentes a la DB
//servicios todo lo relacionado al req y res

//!Habilita recibir datos en formato JSON//
app.use(express.json())

//aqui se le pasa la ruta de ruquest y response//
//para peticiones req y respuestas resp//
app.get ('/', (req, res) => {
    res.status(200).json({message:'Server Ok'})
})

//?libreria para peticiones PUT PACTH DELETE etc lo aderimos a nuestro app//
app.use("/", todoRouter)


//aqui escrucha el puerto//
app.listen(8000, () => {
    console.log('Server started at port 8000')
})