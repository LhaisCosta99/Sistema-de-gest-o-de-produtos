import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import { createRequire } from "module"
import { conexao } from "./infraestrutura/conexao.js"
import Tabelas from "./infraestrutura/Tabelas.js"
import produtosRouter from "./routers/ProdutosRouters.js"
import categoriasRouter from "./routers/CategoriasRouter.js"
import { autenticador } from "./middleware/autenticador.js"

const require = createRequire(import.meta.url)
const swaggerFile = require("./swagger/swagger_output.json")

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(autenticador)
app.use("/produtos", produtosRouter)
app.use("/categorias", categoriasRouter)

conexao.connect((erro) => {
	if (erro) {
		console.log(erro.message)
	} else {
		console.log("conectado com sucesso")
		Tabelas.init(conexao)
		app.listen(port, () => console.log(`http://localhost:${port}`))
	}
})
