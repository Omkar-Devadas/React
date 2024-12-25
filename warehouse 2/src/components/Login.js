import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { getFromLocalStorage, saveToLocalStorage } from "../localStorage";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    // Add login logic here
    const user = getFromLocalStorage(username);

    if (user && user.password === password) {
      saveToLocalStorage("loggedInUser", username);
      user.userType === "admin"
        ? navigate("/admin")
        : navigate("/customer");
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleRegisterRedirect = () => {
    // Redirect to the register page when the user clicks on the "Register" link
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-overlay"></div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit">Login</button>
        </form>
        Don't have an account?
        <a href="#!" onClick={handleRegisterRedirect} className="register-link">
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Login;
