import express from "express";
import cors from 'cors'
import enderecosRouter from "./src/routes/enderecos.routes.js";

const server = express()
const porta = 3001

server.use(cors())

server.use('/enderecos',enderecosRouter)

server.listen(porta, ()=>{
    console.log('Servidor Ligado!')
    console.log('Escutando a porta',porta, '...')
})