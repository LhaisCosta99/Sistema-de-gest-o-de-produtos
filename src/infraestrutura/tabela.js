class tabela{
    init(conexao) {
        this.conexao = conexao

        this.produtos()
}

    produtos() {
    const sql = `CREATE TABLE IF NOT EXISTS produtos (
        id int NOT NULL AUTO_INCREMENT, 
        Descrição varchar(50) NOT NULL, 
        Valor do produto no varejo varchar(20) NOT NULL,
        Valor do produto no atacado varchar(20)NOT NULL, 
        Categoria, PRIMARY KEY(id)
        )`

    this.conexao.query(sql, erro => {
        if(erro) {
            console.log(erro)
        } else {
            console.log('Tabela Produtos criada com sucesso')
        }
    })
}
}
module.exports = new tabela;