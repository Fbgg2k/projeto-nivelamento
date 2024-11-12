import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCarousel from './components/ProductCarousel';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products } from './data/Products';
import { Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Login from './pages/Login';  // Importe o componente Login
import Register from './pages/Register';
import Home from './pages/Home'; // Página home que será acessada após o login



const App = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [cart, setCart] = useState(() => {
    // Carregar estado inicial do carrinho a partir do localStorage (se disponível)
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Limpar o localStorage quando o componente for montado
  useEffect(() => {
    localStorage.removeItem('cart');
    setCart([]);
  }, []);

  // Atualizar localStorage sempre que o cart for modificado
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    // Verificar se o produto já está no carrinho
    setCart((prevCart) => {
      const productExists = prevCart.some((item) => item.id === product.id);
      if (productExists) {
        // Atualizar quantidade se o produto já estiver no carrinho
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Adicionar novo produto ao carrinho com quantidade inicial 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Header />
          <Navbar onSearch={setSearchQuery} />
          <Container className="my-4">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ProductCarousel
                      visibleProducts={products}
                      handleAddToCart={handleAddToCart}
                      cartCount={cart.length}
                      cart={cart}
                    />
                    <ProductList searchQuery={searchQuery} />
                  </>
                }
              />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/login" element={<Login />} /> {/* Adicione a rota de login */}
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
