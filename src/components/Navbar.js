// src/components/Navbar.js
/*
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Meu Site</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">Sobre</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contato</a>
          </li>
        </ul>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/
///////////////////////////////////////
/*
// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { searchProducts } from '../data/Products';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    if (value) {
      setFilteredProducts(searchProducts(value));
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Meu Site</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">Sobre</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contato</a>
          </li>
        </ul>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredProducts.length > 0 && (
            <ul className="search-results">
              {filteredProducts.slice(0, 3).map((product) => (
                <li key={product.id}>
                  <strong>{product.name}</strong>: {product.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

*/
///////////////////////////
/*

// src/components/Navbar.js
import React, { useContext } from 'react';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Meu Site</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">Sobre</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contato</a>
          </li>
        </ul>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
*/
/////////////////////////////
/*
// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Meu Site</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">Sobre</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contato</a>
          </li>
        </ul>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
*/
////////////////////////////////
/*
// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-70 bg-gray-800 border border-gray-300 rounded-lg">
      <div className="contair mx-auto flex justify-between items-center py-4 px-6">
        <div className="navbar-logo">
          <a href="/" className="text-white text-xl font-bold">Meu Site</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Sobre</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button onClick={toggleTheme} className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">
            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/

////////////////////////
/*
// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-screen-lg bg-opacity-70 bg-gray-800 border border-gray-300 rounded-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="navbar-logo">
          <a href="/" className="text-white text-xl font-bold">Meu Site</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Sobre</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button onClick={toggleTheme} className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">
            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/
///////////////////////////////
/*
// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-screen-lg bg-opacity-70 bg-gray-800 border border-gray-300 rounded-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="navbar-logo">
          <a href="/" className="text-white text-xl font-bold">Meu Site</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Sobre</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            onClick={toggleTheme}
            className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6 text-white" />
            ) : (
              <SunIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/
///////////////////////////
// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-screen-lg bg-opacity-70 bg-gray-800 border border-gray-300 rounded-lg z-50 shadow-md h-13">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="navbar-logo">
          <a href="/" className="text-white text-xl font-bold">Meu Site</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Sobre</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            onClick={toggleTheme}
            className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6 text-white" />
            ) : (
              <SunIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
