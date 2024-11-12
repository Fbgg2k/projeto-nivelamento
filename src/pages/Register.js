import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', { name, email, password });
      setMessage(response.data.message);
      setPassword(''); // Limpa o campo de senha após o registro
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Erro ao realizar cadastro.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 mb-48">
      <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-1/2 px-2">
            <label className="block text-gray-700">Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 px-2">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Salvar
        </button>

        <p className="mt-4 text-center text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>
          Já tem uma conta? Faça login.
        </p>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
