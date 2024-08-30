// src/components/Header.js
import React from 'react';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-background">
        <Navbar />
        <div className="header-content">
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Descrição breve sobre o site.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
