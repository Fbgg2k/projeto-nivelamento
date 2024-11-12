// src/components/Navbar.js
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ProductContext } from '../context/ProductContext';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { BiHomeCircle } from "react-icons/bi"; // Importar o ícone de Home
import { PiUserCircleFill } from "react-icons/pi"; // Importar o ícone de Login

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products
        .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 3);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-screen-lg bg-opacity-70 bg-gray-800 border border-gray-300 rounded-lg z-50 shadow-md h-13">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo e Link Home com ícone */}
        <div className="navbar-logo">
          <a href="/" className="text-white text-xl font-bold flex items-center space-x-2">
            <BiHomeCircle className="w-6 h-6" />
            <span>Home</span>
          </a>
        </div>
        
        {/* Links de navegação */}
        <ul className="flex space-x-6">
          <li>
            <a href="/login" className="text-white hover:text-gray-300 flex items-center space-x-2">
              <PiUserCircleFill className="w-6 h-6" />
              <span>login</span>
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Sobre</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
          </li>
        </ul>

        {/* Campo de busca e lista suspensa */}
        <div className="relative flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          {filteredProducts.length > 0 && (
            <ul className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}

          {/* Botão de alternância de tema */}
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
