const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/alunos', (request, response) => {
    // response.send('happy happy happy');
    response.status(200).json({
        status: 'success',
        data: { //dados do banco de dados
            alunos: [  // array de objetos
                {
                    id_use: 1,
                    nome: 'olivia',
                    idade: 19,
                },
                {
                    id_use: 2,
                    nome: 'leonardo',
                    idade: 19,
                },
            ]
        }
    })
})
const PORT = 3006;
app.listen(PORT, () => console.log(`running at port ${PORT}`))