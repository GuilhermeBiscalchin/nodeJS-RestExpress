import express from "express";


const app = express()

//Metódo do express, para interpretar o recebimento do arquivo.
app.use(express.json())

const livros = [ 
    {
        id: 1,
        "Titulo":"Senhor dos Aneis"
    },
    {
        id:2,
        "Titulo":"Hobbit"
    }
]

//apenas para exibição do status, página inicial
app.get('/',(request,response) => {
    response.status(200).send("Arquivo sendo executado em status OK")
})

//criação de uma rota com livros, enviando em json o objeto.
app.get('/livros',(req,res) => {
    res.status(200).json(livros)
})

//Utilizando o 'get' por 'id'
app.get('/livros/:id',(request,response) => {
    let index = buscaLivro(request.params.id);
    response.status(200).json(livros[index])
})

//criando um novo livro, dentro do array listado.
app.post('/livros',(request,response) => {
    //Utilizando uma função do JS, 'push' e dentro da request o que quero pegar do arquivo.
    //Nesse caso é o corpo 'body', o que está escrito dentro.
    livros.push(request.body)
    //Confirmando se o livro foi criado.
    response.status(201).send('Livro cadastrado com sucesso!')

})

//atualizando algum titulo,atráves o id,como parâmetro
app.put('/livros/:id',(request,response) => {
    let index = buscaLivro(request.params.id);
    livros[index].Titulo = request.body.Titulo
    response.status(200).json(livros)
})

//fazendo a exclusão de arquivos.
app.delete('/livros/:id',(request,response) => {
    //Fazendo a destruturação para pegar o arquivo.
    let {id} = request.params
    let index = buscaLivro(id);
    livros.splice(index,1)
    response.send(`Livro ${id} excluido com sucesso!`)
})


//função para buscar o livro, sem o banco de dados.
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app