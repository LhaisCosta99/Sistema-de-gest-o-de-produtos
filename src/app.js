import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { conexao } from "./infraestrutura/conexao.js";
import Tabelas from "./infraestrutura/Tabelas.js";
import swaggerUi from 'swagger-ui-express';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerFile = require('./swagger/swagger_output.json');


dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

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