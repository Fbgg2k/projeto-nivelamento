const express = require('express');
const cors = require('cors');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes'); // Importe as rotas de usuários
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/products', productRoutes);
app.use('/users', userRoutes); // Adicione o prefixo '/users' para rotas de usuários

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
