class Tabelas {
	init(conexao) {
		this.conexao = conexao

		this.categorias()

		this.produtos()
	}

	produtos() {
		const sql = `CREATE TABLE IF NOT EXISTS produtos (
                    id int NOT NULL AUTO_INCREMENT, 
                    descricao varchar(50) NOT NULL, 
                    valor_do_produto_no_varejo DOUBLE NOT NULL,
                    valor_do_produto_no_atacado DOUBLE NOT NULL, 
                    categoria INT,
                    PRIMARY KEY(id),
                    FOREIGN KEY(categoria) REFERENCES categorias(id)
                    )`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log("Tabela Produtos criada com sucesso")
			}
		})
	}

	categorias() {
		const sql = `CREATE TABLE IF NOT EXISTS categorias (
                    id int NOT NULL AUTO_INCREMENT,
                    nome varchar(50) NOT NULL,  
                    descricao varchar(50) NOT NULL, 
                    PRIMARY KEY(id)
                    )`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log("Tabela Categorias criada com sucesso")
			}
		})
	}
}

export default new Tabelas()
