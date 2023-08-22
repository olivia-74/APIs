const express = require('express'); // pacote express faz as requisições ao banco de dados e retorna as informacoes

const app = express() // cria a instancia na variavel app, express: variavel no servidor app
app.listen(3000, () => console.log('running at port 3000'))// funcao listen: ver se o servir esta funcionando, "ouve as entradas e saidas"


