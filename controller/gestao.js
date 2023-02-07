const Produtos = require('../models/produtos');
module.exports = (app) =>{
    app.get('/produtos', (req, res) =>{
        return descriçãoa.produtos(res);
    } )
    app.get('/produtos/:id', (req, res) =>{
        const id = parseInt(res.params.id);
        Produtos.buscarPorId(id,res);
    })
    app.get('/buscaPorVarejo/:valor', (req, res) =>{
        const preçoVarejo = res.params.valores;
        Produtos.buscaPorVarejo(preçoVarejo, res)
    })

    app.get('/buscaPorAtacado/:cliente', (req, res) =>{
        const preçoAtacado = res.params.valores;
        Produtos.buscaPorAtacado(preçoAtacado, res)
    })

    app.post('/produto', (req, res) =>{
        const produto = req.body;

        produto.adiciona(produto, res);
        ;
    })
    app.patch('/produto/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })
    app.delete('/produto/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Produto.deleta(id,res)
    })
}