const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/alunos', (request, response) => {
    response.send('happy happy happy')
})
const PORT = 3006;
app.listen(PORT, () => console.log(`running at port ${PORT}`))