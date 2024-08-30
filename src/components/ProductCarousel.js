/*
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './ProductCarousel.css';
import addButtonIcon from '../img/add-button.png';
import cartIcon from '../img/add-button1.png';


const products = [
  { id: 1, name: 'Quadro Dragon Ball', image: '/img/card_quadro01.jpg', description: 'Quadro Kame P/M/G retratil' },
  { id: 2, name: 'Action Figure', image: '/img/card_quadro02.jpg', description: 'Jiraya 50cm' },
  { id: 3, name: 'Funko PoP', image: '/img/card_quadro03.jpg', description: 'CDZ Cavaleiros de Ouro' },
  { id: 4, name: 'Playstation', image: '/img/card_quadro04.jpg', description: 'PS5 Bundle GOW Ultimate' },
  { id: 5, name: 'Camisa', image: '/img/card_quadro05.jpg', description: 'RE RPD Personalizada' },
];

const ProductCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 3000);
  };

  const handleNext = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % products.length);
    resetInterval();
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + products.length) % products.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const handleMouseEnter = (id) => {
    setVisibleDescription(id);
  };

  const handleMouseLeave = () => {
    setVisibleDescription(null);
  };

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const visibleProducts = products.slice(startIndex, startIndex + 3).concat(
    products.slice(0, Math.max(0, startIndex + 3 - products.length))
  );

  return (
    <div className="carousel-container with-margin">
      <button className="carousel-control prev" onClick={handlePrev}>&lt;</button>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="product-container">
            {visibleProducts.map(product => (
              <div
                className="product-item"
                key={product.id}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="product-card">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className={`product-description ${visibleDescription === product.id ? 'visible' : ''}`}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                      <img src={addButtonIcon} alt="Adicionar ao Carrinho" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <button className="carousel-control next" onClick={handleNext}>&gt;</button>
      <div className="floating-cart">
        <img src={cartIcon} alt="Carrinho" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </div>
  );
};

export default ProductCarousel;
*/
///////////////////////////////
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'; // Importando ícones do Heroicons
import './ProductCarousel.css';
import addButtonIcon from '../img/add-button.png';
import cartIcon from '../img/add-button1.png';

const products = [
  { id: 1, name: 'Quadro Dragon Ball', image: '/img/card_quadro01.jpg', description: 'Quadro Kame P/M/G retratil' },
  { id: 2, name: 'Action Figure', image: '/img/card_quadro02.jpg', description: 'Jiraya 50cm' },
  { id: 3, name: 'Funko PoP', image: '/img/card_quadro03.jpg', description: 'CDZ Cavaleiros de Ouro' },
  { id: 4, name: 'Playstation', image: '/img/card_quadro04.jpg', description: 'PS5 Bundle GOW Ultimate' },
  { id: 5, name: 'Camisa', image: '/img/card_quadro05.jpg', description: 'RE RPD Personalizada' },
];

const ProductCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 5000); // Intervalo de 5 segundos para trocar os produtos
  };

  const handleNext = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % products.length);
    resetInterval();
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + products.length) % products.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const handleMouseEnter = (id) => {
    setVisibleDescription(id);
  };

  const handleMouseLeave = () => {
    setVisibleDescription(null);
  };

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const visibleProducts = products.slice(startIndex, startIndex + 3).concat(
    products.slice(0, Math.max(0, startIndex + 3 - products.length))
  );

  return (
    <div className="carousel-container">
      <button className="carousel-control prev" onClick={handlePrev}>
        <ChevronLeftIcon className="h-8 w-8 text-gray-200" />
      </button>
      <Carousel indicators={false} controls={false} interval={null}>
        <Carousel.Item>
          <div className="product-container">
            {visibleProducts.map(product => (
              <div
                className="product-item"
                key={product.id}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="product-card">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className={`product-description ${visibleDescription === product.id ? 'visible' : ''}`}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <button className="add-to-cart-btn " onClick={handleAddToCart}>
                      <img src={addButtonIcon} alt="Adicionar ao Carrinho" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <button className="carousel-control next" onClick={handleNext}>
        <ChevronRightIcon className="h-8 w-8 text-gray-200" />
      </button>
      <div className="floating-cart z-50">
        <img src={cartIcon} alt="Carrinho" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </div>
  );
};

export default ProductCarousel;
