import ProdutosDAO from "../DAO/ProdutosDAO.js"
import { validacoesDeValores } from "../services/validacoesGerais.js"

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
			res.status(200).json(response)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}

	async post(req, res) {
		try {
			const response = await ProdutosDAO.criar(req.body)
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

	async patch(req, res) {
		try {
			const response = await ProdutosDAO.atualizar(req.body, req.params.id)
			res.status(200).json(response)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}

	async delete(req, res) {
		const id = req.params.id

		try {
			if (!validacoesDeValores(id)) {
				throw new Error("Id inválido, favor inserir um valor numérico.")
			}
			const response = await ProdutosDAO.deletar(id)
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
