/*
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'Loja'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Endpoint para obter produtos
app.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM Produto', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
*/
/////////////////
/*
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição como JSON
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'loja'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Endpoint para obter produtos
app.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM Produto', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Endpoint para adicionar um novo produto
app.post('/produtos', (req, res) => {
    const { name, image, description } = req.body;
    const query = 'INSERT INTO Produto (name, image, description) VALUES (?, ?, ?)';
    connection.query(query, [name, image, description], (err, results) => {
        if (err) {
            console.error('Erro ao inserir produto:', err);
            res.status(500).send('Erro ao inserir produto');
            return;
        }
        res.status(201).send('Produto inserido com sucesso');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
*/
// server.js
// server.js
// server.js
/*
const express = require('express');
const { sequelize, Product } = require('./src/models/product'); // Atualizando o caminho para o modelo
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return sequelize.sync();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

app.get('/produtos', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

app.post('/produtos', async (req, res) => {
  const { name, image, description } = req.body;
  if (!name || !image || !description) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const newProduct = await Product.create({ name, image, description });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    res.status(500).json({ error: 'Erro ao adicionar produto' });
  }
});

app.use(cors({
  origin: 'http://localhost:3000', // Substitua com o endereço do seu front-end
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

*/