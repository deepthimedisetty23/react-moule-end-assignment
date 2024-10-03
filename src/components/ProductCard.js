import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`}>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </Link>
  </div>
);

export default ProductCard;
