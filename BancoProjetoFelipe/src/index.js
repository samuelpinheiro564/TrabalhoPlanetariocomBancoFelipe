const express = require('express');
const cors = require('cors');
const NpcsRoutes = require('./routes/Npcs.routes');
const avataresRoutes = require('./routes/avatares.routes');
const planetasRoutes = require('./routes/Planeta.routes');
const usuariosRoutes = require('./routes/Usuarios.routes');

const app = express();
const port = process.env.PORT || 5000;

// Configuração do middleware CORS para permitir solicitações do localhost:8081
app.use(cors({ origin: 'http://localhost:8082' }));

// Habilita o uso de JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use('/', NpcsRoutes);
app.use('/', avataresRoutes);
app.use('/', planetasRoutes);
app.use('/', usuariosRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});