import React from 'react';
import { useNavigate } from 'react-router-dom';

import SupplierList from './SupplierList';
import SupplierForm from './SupplierForm';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import OrderList from './OrderList';
import { removeFromLocalStorage } from "../localStorage";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeFromLocalStorage("loggedInUser");
    navigate('/login');
  };

  return (
    <div className="page-container">
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <h1>Admin Dashboard</h1>
      <p>Access administrative tools and manage the entire system.</p>
      
      <div className="dashboard-section">
        <div className="form-name">
          <h1>Products</h1>
        </div>
        <div className="form-container">
          <ProductForm />
        </div>
        <div className="list-container">
          <ProductList />
        </div>
      </div>

      <div className="dashboard-section">
        <div className="form-name">
          <h1>Suppliers</h1>
        </div>
        <div className="form-container">
          <SupplierForm />
        </div>
        <div className="list-container">
          <SupplierList />
        </div>
      </div>

      <div className="dashboard-section">
        <div className="form-name">
          <h1>Orders</h1>
        </div>
        <div className="list-container-order">
          <OrderList />
        </div>
      </div>

    </div>
  );
}

export default AdminDashboard;
