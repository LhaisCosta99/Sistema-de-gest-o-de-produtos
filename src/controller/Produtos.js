import ProdutosDAO from "../DAO/ProdutosDAO.js"
import ProdutosModel from "../models/ProdutosModel.js"
import { validacoesDeEntradas, validacoesDeValores } from "../services/validacoesGerais.js"

class Produtos {
	async get(req, res) {
		try {
			const response = await ProdutosDAO.listar()
			res.status(200).json(response)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}

	async getId(req, res) {
		const id = req.params.id

		try {
			if (!validacoesDeValores(id)) {
				throw new Error("Id inválido, favor inserir um valor numérico.")
			}
			const response = await ProdutosDAO.listar(id)

			if (!response.length) {
				throw new Error("Id não encontrado na base de dados.")
			}
			res.status(200).json(...response)

		} catch (error) {
			const statusCode = error.message === "Id inválido, favor inserir um valor numérico." ? 400 : 404
			res.status(statusCode).json({
				erro: true,
				statusCode: statusCode,
				message: error.message
			})
		}
	}

	async post(req, res) {
		const body = req.body

		try {
			validacoesDeEntradas(body)

			const produtos = new ProdutosModel(body)
			const response = await ProdutosDAO.criar(produtos)
			res.status(200).json(response)
		} catch (error) {
			res.status(400).json({
				erro: true,
				statusCode: 400,
				message: error.message
			})
		}
	}

	async patch(req, res) {
		const id = req.params.id
		const body = req.body
		try {
			if (!validacoesDeValores(id)) {
				throw new Error("Id inválido, favor inserir um valor numérico.")
			}

			validacoesDeEntradas(body)

			const response = await ProdutosDAO.atualizar(body, id)

			if(response.affectedRows === 0){
				throw new Error("Id inexistente ou nenhuma alteração encontrada na entrada.")
			}
			res.status(200).json(response)
		} catch (error) {
			const statusCode = error.message === "Id inválido, favor inserir um valor numérico." ? 400 : 404
			res.status(statusCode).json({
				erro: true,
				statusCode: statusCode,
				message: error.message
			})
		}
	}

	async delete(req, res) {
		const id = req.params.id

		try {
			if (!validacoesDeValores(id)) {
				throw new Error("Id inválido, favor inserir um valor numérico.")
			}
			const response = await ProdutosDAO.deletar(id)

			if (!response.length) {
				throw new Error("Id não encontrado na base de dados.")
			}
			res.status(200).json(response)

		} catch (error) {
			const statusCode = error.message === "Id inválido, favor inserir um valor numérico." ? 400 : 404
			res.status(statusCode).json({
				erro: true,
				statusCode: statusCode,
				message: error.message
			})
		}
	}
}

export default new Produtos()
