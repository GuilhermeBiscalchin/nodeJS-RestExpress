import express from "express";

import db from "./config/dbConnect.js";
import livros from './model/Livro.js'


db.on('error',console.log.bind(console,'Erro de Conexão!'))
db.once('open', () => {
    console.log('Está conectado com o banco de dados MongoDB!')
})


const app = express()


app.use(express.json())

//  const livros = [ 
//      {
//          id: 1,
//          "Titulo":"Senhor dos Aneis"
//      },
//      {
//          id:2,
//          "Titulo":"Hobbit"
//      }
//  ]

app.get('/',(request,response) => {
    response.status(200).send("Arquivo sendo executado em status OK")
})

app.get('/livros',(req,res) => {

    livros.find((err,livros) => {
        res.status(200).json(livros)
    })    

})

app.get('/livros/:id',(request,response) => {
    let index = buscaLivro(request.params.id);
    response.status(200).json(livros[index])
})

app.post('/livros',(request,response) => {

    livros.push(request.body)
    response.status(201).send('Livro cadastrado com sucesso!')

})

app.put('/livros/:id',(request,response) => {
    let index = buscaLivro(request.params.id);
    livros[index].Titulo = request.body.Titulo
    response.status(200).json(livros)
})

app.delete('/livros/:id',(request,response) => {
    let {id} = request.params
    let index = buscaLivro(id);
    livros.splice(index,1)
    response.send(`Livro ${id} excluido com sucesso!`)
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app