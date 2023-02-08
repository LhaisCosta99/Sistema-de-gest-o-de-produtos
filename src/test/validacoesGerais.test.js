import { validacoesDeEntradas, validacoesDeTextos, validacoesDeValores } from "../services/validacoesGerais"
import { Categoria, Produto } from "../swagger/exemples"

test("Valida se a string possui mais de 3 caracteres, excluindo espaços anteriores e posteriores.", ()=>{
    expect(validacoesDeTextos("      olá     ")).toBe(true)
    expect(validacoesDeTextos("")).toBe(false)
    expect(validacoesDeTextos("      olá")).toBe(true)
    expect(validacoesDeTextos("olá     ")).toBe(true)
    expect(validacoesDeTextos("      ol     ")).toBe(false)
    expect(validacoesDeTextos("ol")).toBe(false)
})

test("valida se o valor inserido é numérico.", ()=>{
    expect(validacoesDeValores("1")).toBe(true)
    expect(validacoesDeValores(1)).toBe(true)
    expect(validacoesDeValores("1.2")).toBe(true)
    expect(validacoesDeValores("1.23455232")).toBe(true)
    expect(validacoesDeValores(1.1235584)).toBe(true)
    expect(validacoesDeValores("1.2000")).toBe(true)
    expect(validacoesDeValores("1,4")).toBe(false)
    expect(validacoesDeValores("1,12345o9")).toBe(false)
    expect(validacoesDeValores("1.124334o0")).toBe(false)
    expect(validacoesDeValores("inválido")).toBe(false)
})

test("Verifica se a entrada do usuário é valida.", ()=> {
    const produtoMock = Produto
    const CategoriaMock = Categoria

    expect(validacoesDeEntradas(Produto)).toBe(true)
    expect(validacoesDeEntradas(Categoria)).toBe(true)

    delete produtoMock.categoria
    delete CategoriaMock.nome

    expect(validacoesDeEntradas(Produto)).toBe(true)
    expect(validacoesDeEntradas(Categoria)).toBe(true)

    produtoMock.testeProduto = 3 
    try {
        validacoesDeEntradas(produtoMock)
    } catch (error) {
        expect(error.message).toBe("Propriedade testeProduto inválida como entrada")
    }

    CategoriaMock.testeCategoria = 2
    try {
        validacoesDeEntradas(CategoriaMock)
    } catch (error) {
        expect(error.message).toBe("Propriedade testeCategoria inválida como entrada")
    }
})