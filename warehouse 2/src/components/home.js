import React from 'react';
import '../App.css';
import warehouseImage from '../assets/images/warehouse.jpg';
import logo from '../assets/images/logo.png';

function HomePage() {
  return (
    <div className="home-container" id="home">
      <header className="navbar">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <ul>
          <li><a href="/#home">Home</a></li>
          <li><a href="/#features">Features</a></li> 
          <li><a href="/#about">About</a></li>
          <li><a href="/login" className="log-in-button">Log In</a></li>
          <li><a href="/Register" className="sign-in-button">Sign Up</a></li> 
        </ul>
      </header>
      
      <div className="hero-section">  
        <img src={warehouseImage} alt="Warehouse" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Welcome to the Warehouse Management System</h1>
          <p>Efficiently manage your products and stores with our easy-to-use platform.</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Why Choose Our System?</h2>
        <p>
          Our Warehouse Management System is designed to streamline your operations, reduce errors, and increase productivity. 
          Whether you're managing a small store or a large warehouse, our system provides the tools you need to stay organized.
        </p>
      </div>

      <div className="features-section" id="features">
        <h2>Features</h2>
        <div className="feature-item">
          <h3>Real-Time Inventory Tracking</h3>
          <p>Track your inventory levels in real-time and make informed decisions based on accurate data.</p>
        </div>
        <div className="feature-item">
          <h3>Easy Product Management</h3>
          <p>Add, edit, and remove products effortlessly with our intuitive interface.</p>
        </div>
        <div className="feature-item">
          <h3>Advanced Reporting</h3>
          <p>Generate detailed reports to analyze your warehouse performance and optimize operations.</p>
        </div>
      </div>

      <div className="about-section" id="about">
  <h2>About Us</h2>
  <div className="about-content">
    <p>
      Our Warehouse Management System is dedicated to providing top-notch solutions 
      for managing your inventory, products, and stores efficiently. 
      With years of experience in the logistics and supply chain industry, 
      we understand the challenges you face and have developed a platform that 
      is both intuitive and powerful.
    </p>
    <p>
      Our mission is to help businesses streamline their operations, reduce errors, 
      and improve productivity. We are committed to continuous innovation 
      and customer satisfaction, ensuring that our system evolves with your needs.
    </p>
    <p>
      Thank you for choosing our Warehouse Management System. We look forward 
      to helping you achieve success.
    </p>
  </div>
</div>


      <footer id="footer" className="footer">
        <p>&copy; 2024 Warehouse Management System. All rights reserved.</p>
        <p>Contact us: <a href="mailto:support@warehouse.com">support@warehouse.com</a></p>
      </footer>
    </div>
  );
}

export default HomePage;
