// src/components/SupplierForm.js
import React, { useState, useContext } from 'react';
import { SCMContext } from '../SCMContext';
import { saveToLocalStorage } from "../localStorage";

const SupplierForm = () => {
  const { suppliers, setSuppliers } = useContext(SCMContext);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSupplier = {
      id: suppliers.length + 1,
      name,
      contact,
    };
    const updatedSuppliers = [...suppliers, newSupplier];
    setSuppliers(updatedSuppliers);
    saveToLocalStorage('suppliers', updatedSuppliers);
    setName('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Supplier</h3>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
      <button type="submit">Add Supplier</button>
    </form>
  );
};

export default SupplierForm;
