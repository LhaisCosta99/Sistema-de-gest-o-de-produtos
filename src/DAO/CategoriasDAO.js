import { conexao } from "../infraestrutura/conexao.js";

class CategoriasDAO{
    listar(){
        const sql = `SELECT * FROM categorias`

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                throw erro
            }
            else {
                return resultado
            }
        })
    }
    listarPorId(id){
        const sql = `SELECT * FROM categorias WHERE id= ${id}`

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                throw erro
            }
            else {
                return resultado
            }
        })
    }
    criar(categoria){
        const sql = 'INSERT INTO categorias SET ?'
        conexao.query(sql, categoria, (erro) => {
            if(erro){
                throw erro
            }
            else {
                return categoria
            }
        })
    }
}

export default new CategoriasDAO;