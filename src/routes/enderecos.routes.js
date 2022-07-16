import { Router } from "express";
import enderecoController from "../controllers/enderecoController.js";

const enderecosRouter = Router()

enderecosRouter.get('/consulta_cep/:cep_desconhecido?',enderecoController.consultarCep)

export default enderecosRouter