const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
//const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha_do_banco',
  database: 'nome_do_banco'
});

// Rota para cadastro
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Verificar se o email já está registrado
  db.query('SELECT email FROM Users WHERE email = ?', [email], async (error, results) => {
    if (results.length > 0) {
      return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    // Criptografar a senha e inserir no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao registrar o usuário.' });
      }
      res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    });
  });
});

// Rota para login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM Users WHERE email = ?', [email], async (error, results) => {
    if (results.length === 0) {
      return res.status(400).json({ error: 'Email não encontrado.' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, 'secret_key', { expiresIn: '1h' });
    res.json({ message: 'Login realizado com sucesso!', token });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

/*
// Rota de registro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);

module.exports = router;
*/