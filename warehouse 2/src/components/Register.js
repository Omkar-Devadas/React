import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { saveToLocalStorage } from "../localStorage";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    const orders = [];
    const user = { username, email, password, userType, orders };
    saveToLocalStorage(username, user);
    // After registration, navigate to the home page or dashboard
    navigate('/login');
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="login-overlay"></div>
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <select onChange={(e) => setUserType(e.target.value)} value={userType}>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
        Already have an account?
        <a href="#!" onClick={handleSignIn} className="register-link">Sign In</a>
      </div>
    </div>
  );
}

export default Register;
