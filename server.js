//Usado apenas para iniciar o servidor.
import app from './src/app.js'

             //dessa maneira,se estiver em produção executa na porta que estiver, caso contrário na porta 3000;
const port = process.env.PORT || 3000;



app.listen(port,() => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
