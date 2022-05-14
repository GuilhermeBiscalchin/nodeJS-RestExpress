const express = require('express')
const app = express()

//Criado com o barra, a página exibido o hello World
app.get('/',(request,response) => {
    response.send('Hello World!')
    
})

app.listen(5000)