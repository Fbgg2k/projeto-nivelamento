// src/App.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCarousel from './components/ProductCarousel';
import Navbar from './components/Navbar'; // Importando o Navbar
import ProductList from './components/ProductList'; // Importando o ProductList
import { products } from './data/Products'; // Importando os produtos

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Header />
      <Navbar onSearch={setSearchQuery} /> {/* Adicionando o Navbar com a função de busca */}
      <Container className="my-4">
        <ProductCarousel />
        {searchQuery && (
          <div className="product-section">
            <ProductList products={products} searchQuery={searchQuery} /> {/* Adicionando o ProductList */}
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default App;
