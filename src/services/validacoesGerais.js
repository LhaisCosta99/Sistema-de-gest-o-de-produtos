function validacoesDeTextos(str){
	const texto = str.trim()
	return texto.length >= 3
}

export function validacoesDeValores(num){
	const valor = parseFloat(num)
	return valor == num
}

export function validacoesDeEntradas(objeto){
	const chavesEntrada = Object.keys(objeto)
	const textos = ["nome", "descricao"]
	const valores = ["valor_do_produto_no_varejo", "valor_do_produto_no_atacado", "categoria"]
	const chavesValidas = [...textos, ...valores]

	chavesEntrada.map(chave => {
		if(!chavesValidas.includes(chave)){
			throw new Error(`Propriedade ${chave} inválida como entrada`)
		}

		if(textos.includes(chave)){
			if(!validacoesDeTextos(objeto[chave])){
				throw new Error(`Valor inserido na propriedade ${chave} inválido`)
			}
		}

		if(valores.includes(chave)){
			if(!validacoesDeValores(objeto[chave])){
				throw new Error(`Valor inserido na propriedade ${chave} inválido`)
			}
		}
	})
}