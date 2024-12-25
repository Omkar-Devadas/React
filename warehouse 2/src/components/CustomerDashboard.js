import React from 'react';
import { useNavigate } from 'react-router-dom';

import OrderList from './OrderList';
import OrderForm from './OrderForm';
import { removeFromLocalStorage } from "../localStorage";

function CustomerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeFromLocalStorage("loggedInUser");
    navigate('/login');
  };

  return (
    <div className="page-container">
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <h1>Customer Dashboard</h1>
      <p>Manage your orders seamlessly.</p>
      
      {/* Orders Section */}
      <div className="dashboard-section">
        <div className="form-container">
          <OrderForm />
        </div>
        <div className="list-container">
          <OrderList />
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
