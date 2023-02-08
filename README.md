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

Banco de dados:

Tenha instalado para uso <a href="https://dev.mysql.com/downloads/installer/">o banco de dados mysql-Server e o gerenciador Mysql-workbench </a>para execução correta da aplicação.
No caminho "./src/infraestrutura" existe um arquivo database.sql com o script de criação do banco, execute o mesmo no workbench,
após isso renomeie o arquivo ".env.exemple" para apenas ".env" e substitua os valores exemplo das variáveis pelas suas credenciais.

OBS.: ESSE PASSO DEVE SER FEITO ANTES DE SUBIR A APLICAÇÃO!

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
```
jest: "^29.4.2",
```
## :heavy_check_mark:  Requisitos  :heavy_check_mark:

:small_blue_diamond: Node <br>
:small_blue_diamond: NPM <br>
:small_blue_diamond: Git <br>
:small_blue_diamond: VsCode ou qualquer editor de texto de preferência. <br>
:small_blue_diamond: Insomnia Rest ou Postman. <br>
:small_blue_diamond: MySQL    

## :traffic_light: Rotas da aplicação :traffic_light:
:small_blue_diamond: Os testes da API foram feitos via Postman. Para qualquer requisição é necessário privilégios de administrador, para tal o cabeçalho deve está configurado como abaixo: 
<br>
```json
{
    "autenticador": "admin"
}
```

### :small_blue_diamond: documentção interativa <br>

Para acessar ao Swegger utlizar a segunte rota: <br>
```
/doc
```

### :small_blue_diamond: Categorias <br>

:dart: Get-categorias <br>
Busca todos os registros na categoria.
```
/categorias
```


:dart: Get-categorias/id <br>
Rota de busca para registro de produtos especificos por meio de Id.<br>
```
/categorias/:id
```

:dart: Post-categorias <br>
Rota para inclusão de uma nova categoria.<br>
```
/categorias
```

:dart: Pacth-categorias <br>
Rota para atualização de registro em categorias por Id.<br>
```
/categorias/id
```

:dart: Delete-categorias/id <br>
Rota para exclusão de registro das categorias por Id.<br>
```
/categorias/:id
```

### :small_blue_diamond: Produtos <br>

:dart: Get-produtos <br>
Rota de busca para todos os registros de produtos.
```
/produtos
```

:dart: Get-produtos/id <br>
Rota de busca para registro de produtos especificos por meio de Id.<br>
```
/produtos/:id
```

:dart: Post-produtos <br>
Rota para inclusão de um novo produto..<br>
```
/produtos
```

:dart: Pacth-produtos/id <br>
Rota para atualização de um Produto.<br>
```
/produtos/id
```

:dart: Delete-categorias/id <br>
Rota para exclusão de registro dos produtos por Id.<br>
```
/categorias/:id
```


MODELOS:
Categorias:
```json
{
    "nome": "string",
    "descricao": "string"
}
```
Produtos:
```json
{
    "descricao":"string",
    "valor_do_produto_no_varejo":"number",
    "valor_do_produto_no_atacado":"number",
    "categoria":"number"
}
````











