export function validacoesDeTextos(string){
	const texto = string.trim()
	return texto.length >= 3
}

export function validacoesDeValores(num){
	const valor = parseFloat(num)
	return valor == num
}