import React, { useState } from 'react';
import axios from 'axios';

const Logado = () => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');
  const [message, setMessage] = useState('');

  const handleSaveDetails = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/details', {
        phone, address, city, state, cep,
      });
      setMessage('Informações salvas com sucesso!');
    } catch (error) {
      setMessage('Erro ao salvar informações.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Complete suas Informações</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          <label className="block text-gray-700">Telefone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Endereço:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-1/3 px-2">
            <label className="block text-gray-700">Cidade:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/3 px-2">
            <label className="block text-gray-700">Estado:</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/3 px-2">
            <label className="block text-gray-700">CEP:</label>
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button
          onClick={handleSaveDetails}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Salvar Informações
        </button>

        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Logado;
