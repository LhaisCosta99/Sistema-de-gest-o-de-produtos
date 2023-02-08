import CategoriasDAO from "../DAO/CategoriasDAO.js"
import CategoriasModel from "../models/CategoriasModel.js"
import { validacoesDeEntradas, validacoesDeValores } from "../services/validacoesGerais.js"

class Categorias {
	async get(req, res) {
		// #swagger.description = 'Rota para categorias'
		try {
			const response = await CategoriasDAO.listar()
			res.status(200).json(response)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}

	async getId(req, res) {
		const id = req.params.id

		try {
			if (!validacoesDeValores(id)){
				throw new Error("Id inválido, favor inserir um valor numérico.")
			}
			const response = await CategoriasDAO.listarPorId(id)

      if(!response.length){
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
			
			const categoria = new CategoriasModel(body)
			const response = await CategoriasDAO.criar(categoria)
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
      if (!validacoesDeValores(id)){
				throw new Error("Id inválido, favor inserir um valor numérico.")
			}

      validacoesDeEntradas(body)

			const response = await CategoriasDAO.atualizar(body, id)
      
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
			if (!validacoesDeValores(id)){
				throw new Error("Id inválido, favor inserir um valor numérico.")
			}
			const response = await CategoriasDAO.deletar(id)

      if(!response.length){
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

export default new Categorias()
