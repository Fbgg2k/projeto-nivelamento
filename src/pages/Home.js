// src/pages/Home.jsx

import React from 'react';
import Register from './Register'; // Importe o componente Register

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Página Inicial!</h1>
      <p className="text-lg text-gray-700 mb-6 mt-40">Por favor, cadastre-se para acessar mais recursos.</p>
      
      {/* Renderize o formulário de cadastro na página inicial */}
      <Register />  
    </div>
  );
};

export default Home;
