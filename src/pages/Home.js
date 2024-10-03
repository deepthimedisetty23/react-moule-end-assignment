import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 39.99 },
  { id: 3, name: 'Product 3', price: 49.99 },
];

const Home = () => (
  <div>
    <h1>Products</h1>
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Home;
