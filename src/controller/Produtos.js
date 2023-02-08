import ProdutosDAO from "../DAO/ProdutosDAO.js"

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
        try {
            const response = await ProdutosDAO.listar(req.params.id)
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
            res.status(400).json(error.message)
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
                try {
                    const response = await ProdutosDAO.deletar(req.params.id)
                    res.status(200).json(response)
                } catch (error) {
                    res.status(400).json(error.message)
                }
            }
        }

    export default new Produtos;
