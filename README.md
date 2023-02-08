# Sistema de Gestão de Produtos
## :bar_chart: Gerenciamentento API :bar_chart:
Criada para gestão de produtos de um site e commerce .<br>
Feita especialmete para administrador.<br> 
Dividida em duas entiades, são elas categorias e produtos,em suas respectiva entidade o método CRUD foi realizado.

## :lock_with_ink_pen: Instalação da aplicação :lock_with_ink_pen:

:small_blue_diamond: Abra o terminal e rode os comandos abaixo: <br>

:small_blue_diamond: Clonando o repositório:
```
git clone https://github.com/LhaisCosta99/Sistema-de-gestao-de-produtos
```
:small_blue_diamond: Entrando na pasta:
```
cd Sistema-de-gestao-de-produtos
```
:small_blue_diamond: Para instalar pacotes:
```
npm install
```
:small_blue_diamond: Para rodar a aplicação:
```
npm start
```

## :dart: Dependências de desenvolvimento API :dart:
```
axios: "^1.3.2",
```
```
cors: "^2.8.5",
```
```
dotenv: "^16.0.3",
```
```
express: "^4.18.2",
```
```
mysql2: "^3.1.0",
```
```
swagger-autogen: "^2.23.0",
```
```
swagger-ui-express: "^4.6.0"
```
## :heavy_check_mark:  Requisitos  :heavy_check_mark:

:small_blue_diamond: Node <br>
:small_blue_diamond: NPM <br>
:small_blue_diamond: Git <br>
:small_blue_diamond: VsCode ou qualquer editor de texto de preferência. <br>
:small_blue_diamond: Insomnia Rest ou Postman. <br>
:small_blue_diamond: MySQL    

## :traffic_light: Rotas da aplicação :traffic_light:
:small_blue_diamond: Os testes da API foram feitos via Postman. <br>

:small_blue_diamond: categotias <br>

# :dart: Post-categorias <br>
```js
//Cria nova categoria.
/categorias/
   {
    "nome": "blusas femininas",
    "descricao": "tamanho M"
    }
```
:speech_balloon: Resposta <br>
```js
{
	"Erro": "!"
}
```
# :dart: Get-categorias <br>
```js
//Busca o ":id". O get que busca todos os registros na sua entidade.
/categorias/:id
    {
        "id": 3,
        "nome": "blusas femininas",
        "descricao": "tamanho M"
    }
```
:speech_balloon: Resposta <br>
```js
{
	"Erro": ""
}
```

