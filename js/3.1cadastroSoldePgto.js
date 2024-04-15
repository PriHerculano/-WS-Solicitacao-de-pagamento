const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    // Processar os arquivos recebidos
    res.send('Arquivos recebidos com sucesso.');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
