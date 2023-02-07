import CategoriasDAO from "../DAO/CategoriasDAO.js"

class Categorias{

    async get(req, res){
        // #swagger.description = 'Rota para categorias'
        try {
            const response = await CategoriasDAO.listar()
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    async getId(req, res) {
        try {
            const response = await CategoriasDAO.listar(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    async post(req, res) {
        try {
            const response = await CategoriasDAO.criar(req.body)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    async patch(req, res) {
        try {
            const response = await CategoriasDAO.atualizar(req.body, req.params.id)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    async delete(req, res) {
        try {
            const response = await CategoriasDAO.deletar(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

export default new Categorias