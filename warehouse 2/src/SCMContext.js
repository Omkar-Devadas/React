// src/SCMContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getFromLocalStorage } from './localStorage';

export const SCMContext = createContext();

export const SCMProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const storedProducts = getFromLocalStorage('products');
    if (storedProducts) {
      setProducts(storedProducts);
    }
    const storedSuppliers = getFromLocalStorage('suppliers');
    if (storedSuppliers) {
      setSuppliers(storedSuppliers);
    }
    const storedOrders = getFromLocalStorage('orders');
    if (storedOrders) {
      setOrders(storedOrders);
    }
    }, []);

  return (
    <SCMContext.Provider value={{ products, setProducts, orders, setOrders, suppliers, setSuppliers }}>
      {children}
    </SCMContext.Provider>
  );
};
