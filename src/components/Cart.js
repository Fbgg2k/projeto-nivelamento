import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error('Erro ao analisar o carrinho:', error);
      }
    }
  }, []);

  const handleIncreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity }
          : product
      )
    );
  };

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <div className="cart-container">
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td><img src={product.image} alt={product.name} className="cart-image" /></td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                  {product.quantity > 1 ? (
                    <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                  ) : (
                    <button onClick={() => handleRemoveProduct(product.id)}>🗑️</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
