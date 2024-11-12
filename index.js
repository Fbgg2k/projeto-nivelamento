require('dotenv').config(); // Importar e configurar dotenv no início do arquivo
const express = require('express');
const { sequelize, Product } = require('./src/models/product'); // Produto e Sequelize
const cors = require('cors');
const app = express();
const port = 3001; // Porta do back-end, altere se necessário
const User = require('./src/models/user'); // Importar o modelo de Usuário
const bcrypt = require('bcrypt');

// Middleware para permitir o CORS
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados e sincronizar
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return sequelize.sync();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Rotas CRUD para produtos

// 1. Rota para buscar todos os produtos
app.get('/produtos', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// 2. Rota para criar um novo produto
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

// 3. Rota para atualizar um produto
app.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // Atualiza os campos do produto
    product.name = name || product.name;
    product.image = image || product.image;
    product.description = description || product.description;

    await product.save();
    res.json(product);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// 4. Rota para deletar um produto
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.destroy(); // Exclui o produto
    res.status(204).send(); // Resposta sem conteúdo para indicar sucesso
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// User

// Adicionando rota GET para obter todos os usuários
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});

// Rota para registrar um novo usuário
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Dados recebidos no registro:', { name, email, password });
  
    try {
      const existingUser = await User.findOne({ where: { email } });
      console.log('Verificando se já existe um usuário com o email:', email);
      
      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Senha criptografada com sucesso.');
  
      const newUser = await User.create({ name, email, password: hashedPassword });
      console.log('Novo usuário criado:', newUser);
  
      res.status(201).json({ message: 'Usuário registrado com sucesso!', user: newUser });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
  });
  
  
  // Rota para login
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      console.log('Tentando login com email:', email);
  
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log('Usuário não encontrado:', email);
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.log('Senha incorreta para usuário:', email);
        return res.status(401).json({ error: 'Senha incorreta.' });
      }
  
      const jwt = require('jsonwebtoken');
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.json({ message: 'Login realizado com sucesso!', token });
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      res.status(500).json({ error: 'Erro ao realizar login.' });
    }
  });
  
  app.post('/register', async (req, res) => {
    const { name, email, password, phone, address, city, state, cep } = req.body;
  
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        address,
        city,
        state,
        cep
      });
  
      res.status(201).json({ message: 'Usuário registrado com sucesso!', user: newUser });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
  });
  

  // Iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });

  sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
