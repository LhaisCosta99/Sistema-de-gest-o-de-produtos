class ProdutosModel {
	constructor(body) {
		this.descricao = body.descricao
		this.valor_do_produto_no_varejo = body.valor_do_produto_no_varejo
		this.valor_do_produto_no_atacado = body.valor_do_produto_no_atacado
		this.categoria = body.categoria
	}
}

export default ProdutosModel
