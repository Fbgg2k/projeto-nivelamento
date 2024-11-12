import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"; // Ícones para navegação
import { PiBagLight } from "react-icons/pi"; // Ícone para adicionar produtos
import { MdOutlineShoppingBag } from "react-icons/md"; // Ícone para carrinho com produtos adicionados
import axios from "axios";
import "./ProductCarousel.css";

const ProductCarousel = ({ handleAddToCart, cartCount, cart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetchProducts(); // Busca os produtos da API ao montar o componente
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Alteração para utilizar axios e tratar erros de forma mais clara
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/produtos"); // Ajustar a URL conforme necessário
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        console.error(
          "Erro ao buscar produtos:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Erro ao buscar produtos:",
          error.response.status,
          error.response.data
        );
      } else {
        console.error("Erro ao buscar produtos:", error.message);
      }
    }
  };

  // Inicia o intervalo para a rotação automática dos produtos
  const startInterval = () => {
    if (products.length > 0) {
      intervalRef.current = setInterval(() => {
        setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 5000); // Intervalo de 5 segundos para trocar os produtos
    }
  };

  // Controla o próximo item no carrossel
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
    resetInterval();
  };

  // Controla o item anterior no carrossel
  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
    resetInterval();
  };

  // Reseta o intervalo para garantir que a navegação manual não interfira no automático
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  // Mostra a descrição do produto ao passar o mouse
  const handleMouseEnter = (id) => {
    setVisibleDescription(id);
  };

  // Oculta a descrição do produto ao sair do mouse
  const handleMouseLeave = () => {
    setVisibleDescription(null);
  };

  // Adiciona o produto ao carrinho
  const handleAddToCartClick = (product) => {
    handleAddToCart(product);
  };

  // Navega para a página do carrinho e armazena o carrinho no localStorage
  const handleCartClick = () => {
    navigate("/cart");
    localStorage.setItem("cart", JSON.stringify(cart));

    // Abre uma nova aba para o carrinho
    const cartUrl = `${window.location.origin}/cart`;
    const newWindow = window.open(cartUrl, "_blank");

    if (newWindow) newWindow.focus();
  };

  // Ajuste para garantir que os produtos visíveis são atualizados corretamente conforme o índice
  const visibleProducts = products
    .slice(startIndex, startIndex + 3)
    .concat(products.slice(0, Math.max(0, startIndex + 3 - products.length)));

  return (
    <div className="carousel-container max-w-7xl mx-auto px-4 py-6">
      <button
        className="fixed top-16 right-8 w-16 h-16 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-all duration-300"
        onClick={handleCartClick}
      >
        <MdOutlineShoppingBag size={24} className="" />{" "}
        {/* Ícone do carrinho */}
        <span className="cart-count absolute -top-1 -right-1 bg-red-600 text-white rounded-full px-2 py-1 text-xs font-bold">
          {cartCount}
        </span>
      </button>
      {/* Header do Carrinho */}
      <div className="carousel-header flex justify-end mb-4"></div>

      {/* Controles do Carousel */}
      <div className="carousel-wrapper relative">
        {/* Botão de navegação esquerda */}
        <FaAngleLeft
          className="nav-button left-button text-gray-600 absolute left-10 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-black z-50"
          onClick={handlePrev}
          size={32}
        />

        {/* Carousel de Produtos */}
        <Carousel
          indicators={false}
          controls={false}
          interval={null}
          className="product-carousel"
        >
          <div className="relative flex justify-center items-center space-x-20 left-7">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <Carousel.Item key={product.id} className="flex-none w-64">
                  <div
                    className="relative product-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onMouseEnter={() => handleMouseEnter(product.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Container da Imagem */}
                    <div className="w-full h-64 rounded-lg mb-4">
                      <img
                        className="product-image w-full h-full object-contain"
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </div>

                    {/* Descrição do Produto */}
                    {visibleDescription === product.id && (
                      <div className="product-description text-center absolute top-1/2 transform hover:translate-x-1/1 justify -translate-y-1/2 mt-2 bg-black bg-opacity-75 text-white p-3 rounded shadow-lg w-54">
                        <h3 className="text-sm font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-gray-300">{product.description}</p>
                      </div>
                    )}

                    {/* Botão de adicionar ao carrinho */}
                    <button
                      className="add-to-cart-button flex items-center justify-center mt-4 bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600"
                      onClick={() => handleAddToCartClick(product)}
                    >
                      <PiBagLight size={20} className=" item-center" />{" "}
                      {/* Ícone de adicionar produto */}
                    </button>
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <p>Carregando produtos...</p>
            )}
          </div>
        </Carousel>

        {/* Botão de navegação direita */}
        <FaAngleRight
          className="nav-button right-button text-gray-600 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-black z-50"
          onClick={handleNext}
          size={32}
        />
      </div>
    </div>
  );
};

// Exporte o componente no final do arquivo
export default ProductCarousel;
