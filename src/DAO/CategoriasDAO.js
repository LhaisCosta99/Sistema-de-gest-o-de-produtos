import { conexao } from "../infraestrutura/conexao.js";

class CategoriasDAO {
    listar() {
        const sql = `SELECT * FROM categorias`

        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
    listarPorId(id) {
        const sql = `SELECT * FROM categorias WHERE id= ${id}`
        
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
    criar(categoria) {
        const sql = 'INSERT INTO categorias SET ?'

        return new Promise((resolve, reject) => {            
            conexao.query(sql, categoria, (erro) => {
                if (erro) {
                    reject(erro)
                }
                else {
                    resolve(categoria)
                }
            })
        })
    }
    atualizar(valores, id){
        const sql = "UPDATE categorias SET ? WHERE id = ?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, [valores, id], (erro, resultado)=>{
                if(erro){
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
    deletar(id){
        const sql = 'DELETE FROM categorias WHERE id = ?'

        return new Promise((resolve, reject) => {           
            conexao.query(sql, id, (erro, resultado) => {
                if(erro){
                    reject(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }
}

export default new CategoriasDAO;