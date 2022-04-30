const http = require('http')

const port = 3000

//criação de um objeto com as rotas.
const rotas = {
    '/':'Acessando a página Inicial',
    '/livros':'Acessando a página de Livros',
    '/autores':'Acessando a página de autores',
    '/sobre':'Informações sobre o projeto' 
}

//Passando para a response, junto com a requisição da porta que está sendo acessada.
const server = http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.end(rotas[request.url])
})

server.listen(port,() => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

/*MODELO SIMPLES PARA REQUISIÇÃO DO SERVIDOR
//Método Nativo para requisição http.
const http = require('http')

//Criação da porta que vai escutar
const port = 3000

//Criação do Servidor, onde vai ter uma cabeçalho com o status da requisição e uma escrita para ser exibida navegador.
const server = http.createServer((request,response) =>{
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.end('Aparecendo que estou estudando Node na Alura!')
})

//Conectando o servidor com a porta criada e passando o que deve ser feito
server.listen(port,() => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
*/