import React, { useState } from "react";



const ProductList = ({ products = [] }) => {
    
  const [searchQuery, setSearchQuery] = useState(""); // Certifique-se de inicializar como string

  // Verifica se products é um array antes de tentar filtrar
  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        const query = (searchQuery || "").toLowerCase();
        return product.name.toLowerCase().includes(query);
      })
    : [];

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
