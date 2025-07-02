const express = require('express');
const UsuariosRotas = require('./rotas/UsuariosRotas');

const host = "localhost";
const port = 3000;

const app = express();

app.get('/', (request, response) => {
  return response.send("Back-end NodeJS + Express");
});

app.use(ProductRoutes);

app.listen(port, host, () => {
  console.log(`Servidor executando em http://${host}:${port}`);
});