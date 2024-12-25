// src/components/OrderForm.js
import React, { useState, useContext } from 'react';
import { SCMContext } from '../SCMContext';
import { saveToLocalStorage, getFromLocalStorage } from "../localStorage";

const OrderForm = () => {
  const { orders, setOrders, products, suppliers } = useContext(SCMContext);
  const [product_id, setProductId] = useState('');
  const [supplier_id, setSupplierId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = getFromLocalStorage("loggedInUser");
    const user = getFromLocalStorage(loggedInUser);
    const product = products.find((product) => product.id === parseInt(product_id));
    const supplier = suppliers.find((supplier) => supplier.id === parseInt(supplier_id));

    const newOrder = {
      id: orders.length + 1,
      product_id: parseInt(product_id),
      product_name: product.name,
      supplier_id: parseInt(supplier_id),
      supplier_name: supplier.name,
      quantity: parseInt(quantity),
      status,
      user: loggedInUser,
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    saveToLocalStorage("orders", updatedOrders);
    user.orders = [...user.orders, newOrder]
    saveToLocalStorage(loggedInUser, user);

    setProductId('');
    setSupplierId('');
    setQuantity('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Order</h3>
      <select value={product_id} onChange={(e) => setProductId(e.target.value)} required>
        <option value="" disabled>Select Product</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>
            {product.name} | Stocks: {product.stock} | Price: {product.price}
          </option>
        ))}
      </select>
      <select value={supplier_id} onChange={(e) => setSupplierId(e.target.value)} required>
        <option value="" disabled>Select Supplier</option>
        {suppliers.map(supplier => (
          <option key={supplier.id} value={supplier.id}>
            {supplier.name} | Contact: {supplier.contact}
          </option>
        ))}
      </select>
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
