// src/context/ProductContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Cria o contexto dos produtos
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Requisição para obter produtos do banco de dados (ou API)
  useEffect(() => {
    axios.get('http://localhost:3001/produtos') // Ajuste a URL conforme sua API de produtos
      .then(response => setProducts(response.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
