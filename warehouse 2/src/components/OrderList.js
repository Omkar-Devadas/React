// src/components/OrderList.js
import React, { useContext, useState } from 'react';
import { SCMContext } from '../SCMContext';
import { saveToLocalStorage, getFromLocalStorage } from "../localStorage";


const OrderList = () => {
  const { orders, setOrders } = useContext(SCMContext);
  const [editOrderId, setEditOrderId] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const loggedInUser = getFromLocalStorage("loggedInUser");
  const user = getFromLocalStorage(loggedInUser);
  const isAdmin = user.userType === 'admin';

  const handleEditClick = (orderId) => {
    setEditOrderId(orderId);
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSaveClick = (orderId) => {
    debugger;
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
    saveToLocalStorage('orders', updatedOrders);
    setEditOrderId(null);
    setNewStatus('');
  };

  const handleCancelClick = () => {
    setEditOrderId(null);
    setNewStatus('');
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Approved':
        return 'status-approved';
      case 'Pending':
        return 'status-pending';
      case 'Rejected':
        return 'status-rejected';
      default:
        return '';
    }
  };

  return (
    <div>
      <ul className="order-list">
        {orders.map(order => (
          <li key={order.id} className="order-item">
            {order.id === editOrderId && isAdmin ? (
              <div className="order-edit">
                <span className="order-info">Order {order.id}, Product: {order.product_name}, Quantity: {order.quantity}, Status: {order.status}</span>
                <select value={newStatus} onChange={handleStatusChange}>
                  <option value="">Select Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <button onClick={() => handleSaveClick(order.id)}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div className="order-view">
                <span className="order-info">Order {order.id}, Product: {order.product_name}, Quantity: {order.quantity}, Status: <span className={getStatusClass(order.status)}> {order.status} </span></span>
                {isAdmin && order.status !== 'Approved' && <button onClick={() => handleEditClick(order.id)}>Edit</button>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
