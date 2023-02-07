import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { conexao } from "./infraestrutura/conexao.js";
import Tabelas from "./infraestrutura/Tabelas.js";


dotenv.config()

const app = express()
const port = process.env.PORT

conexao.connect((erro) => {
    if (erro) {
        console.log(erro.message)
    } 
    else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        app.listen(port, () => {
            return console.log(`http://localhost:${port}`);
        })
    }
})