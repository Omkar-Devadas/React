// src/components/ProductForm.js
import React, { useState, useContext } from 'react';
import { SCMContext } from '../SCMContext';
import { saveToLocalStorage } from "../localStorage";

const ProductForm = () => {
  const { products, setProducts } = useContext(SCMContext);
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name,
      stock: parseInt(stock),
      price: parseFloat(price),
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveToLocalStorage('products', updatedProducts);
    setName('');
    setStock('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
