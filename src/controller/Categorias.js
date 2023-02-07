import CategoriasDAO from "../DAO/CategoriasDAO.js"

class Categorias{

    get(req, res){
        // #swagger.description = 'Rota para categorias'
        try {
            const response = CategoriasDAO.listar()
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    getId(req, res) {
        try {
            const response = CategoriasDAO.listar(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    post(req, res) {
        try {
            const response = CategoriasDAO.criar(req.body)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    patch(req, res) {

    }
    delete(req, res) {
        
    }
}

export default new Categorias