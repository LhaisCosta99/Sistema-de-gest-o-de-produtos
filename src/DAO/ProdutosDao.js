import { conexao } from "../infraestrutura/conexao.js";

class ProdutosDAO {
    listar() {
        const sql = `SELECT * FROM produtos`

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
        const sql = `SELECT * FROM produtos WHERE id= ${id}`

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
    criar(categoria) {
        const sql = 'INSERT INTO produtos SET ?'

        return new Promise((resolve, reject) => {
            conexao.query(sql, categoria, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
    atualizar(valores, id) {
        const sql = "UPDATE produtos SET ? WHERE id = ?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, [valores, id], (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
    deletar(id) {
        const sql = 'DELETE FROM produtos where id = ?'

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
}


    export default new ProdutosDAO;
