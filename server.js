const http = require('http')

const port = 3000

const rotas = {
    '/':'Acessando a página Inicial',
    '/livros':'Acessando a página de Livros',
    '/autores':'Acessando a página de autores',
    '/sobre':'Informações sobre o projeto' 
}

const server = http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.end(rotas[request.url])
})

server.listen(port,() => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
