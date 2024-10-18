// Importar o Express
const express = require('express');
const app = express();

// Definir a porta do servidor
const PORT = 3000;

// Rota para o endpoint /hello
app.get('/hello', (req, res) => {
  console.log('Endpoint /hello chamado');
  res.send('Hello World');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});