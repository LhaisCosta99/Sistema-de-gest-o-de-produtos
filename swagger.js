import swaggerAutogen from "swagger-autogen"
import { Produto, Categoria } from "./src/swagger/exemples.js"
//swaggerAutogen()

const outputFile = "./src/swagger/swagger_output.json"
const endpointsFiles = ["./src/app.js"]

const doc = {
	info: {
		version: "1.0.0",
		title: "Sistema de Gestão de Produtos",
		description: "Documentação da API de gerenciamento de produtos.",
	},
	host: "localhost:3000",
	schemes: ["http", "https"],
	consumes: ["application/json"],
	produces: ["application/json"],
	securityDefinitions: {
	},
	definitions: {
		Produto,
		Categoria,
	},
}

swaggerAutogen(outputFile, endpointsFiles, doc)
