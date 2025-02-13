import React from 'react';
import './foot.css'; // Importing the CSS file
import placeholderImg from './assets/yaso_logo.png'; // Company logo
import whatsappIcon from './assets/whatsapp.png'; // WhatsApp icon
import youtubeIcon from './assets/youtube.png'; // YouTube icon
import instagramIcon from './assets/insta.png'; // Instagram icon

function Foot() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Image */}
        <div className="footer-logo-container">
          <img src={placeholderImg} alt="Company Logo" className="footer-logo" />
        </div>

        {/* COMPANY Section */}
        <div className="footer-section company">
          <h3>COMPANY</h3>
          <ul className="footer-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-products">Our Products</a></li>
            <li><a href="/shop-here">Shop Here</a></li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="footer-section message">
          <h3>LEAVE A MESSAGE</h3>
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <textarea placeholder="Your message" className="footer-textarea"></textarea>
          <button className="footer-button">Send</button>
        </div>

        {/* Right Section */}
        <div className="footer-section contact">
          <h3>CONTACT US</h3>
          <p>123, Yashodha Street, City, Country</p>
          <p><strong>PHONE:</strong> +91 9876543210</p>
          <p><strong>EMAIL:</strong> contact@yashodha.com</p>
          <div className="footer-icons">
            <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
