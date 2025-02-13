import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './nav';
import './shop.css'; // Import the CSS file
import ghee from './assets/yaso_ghee.png';
import butter from './assets/yaso_butter.png';
import paneer from './assets/yaso_paneer.png';
import cake from './assets/yaso_cake.png';
import image5 from './assets/yaso_ghee.png';
import image6 from './assets/yaso_ghee.png';
import Foot from './footer';
import { FaShoppingCart } from 'react-icons/fa';

function Shop_here() {
  const products = [
    {
      id: 1,
      name: "Yaso Ghee",
      image: ghee,
      prices: {
        "250 mL": 220,
        "200 mL": 185,
        "500 mL": 520,
        "1kg L": 799,
      },
      route: "/ghee", // Route for Yaso Ghee
    },
    {
      id: 2,
      name: "Yaso Butter",
      image: butter,
      prices: {
        "250g": 170,
        "200g": 140,
        "500g": 340,
        "1kg": 680,
      },
    },
    {
      id: 3,
      name: "Yaso Paneer",
      image: paneer,
      prices: {
        "250g": 130,
        "500g": 260,
        "1kg": 510,
      },
    },
    {
      id: 4,
      name: "Milkghee Cake",
      image: cake,
      prices: {
        "500g": 210,
        "1kg": 420,
        "250g": 110,
      },
    },
    {
      id: 5,
      name: "Yaso Palkova (Sweet)",
      image: image5,
      prices: {
        "250g": 110,
        "500g": 200,
        "1kg": 400,
      },
    },
    {
      id: 6,
      name: "Yaso Palkova (Sweetless)",
      image: image6,
      prices: {
        "250g": 110,
        "500g": 200,
        "1kg": 400,
      },
    },
  ];

  return (
    <>
      <NavBar />
      <div className="shop-container">
        <h1 className="shop-title">Yaso Products</h1>
        <p className="shop-description">
          We're proud to offer fresh and nutritious products that are ethically sourced and naturally wholesome.
          Shop with us today and experience the delicious difference of Yashodha Dairies.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Foot />
    </>
  );
}

function ProductCard({ product }) {
  const navigate = useNavigate();
  const defaultWeight = Object.keys(product.prices)[0];
  const [selectedWeight, setSelectedWeight] = useState(defaultWeight);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-background"></div>
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <p className="product-price">₹{product.prices[selectedWeight]}</p>
      <p className="product-name">{product.name}</p>
      <select
        className="product-weight"
        value={selectedWeight}
        onChange={(e) => setSelectedWeight(e.target.value)}
      >
        {Object.keys(product.prices).map((weight) => (
          <option key={weight} value={weight}>{weight}</option>
        ))}
      </select>
      <div className="button-group">
        <button
          className="view-button"
          onClick={() => product.route ? navigate(product.route) : null} // Navigate only if route exists
        >
          👁️
        </button>
        <button className="cart-button"><FaShoppingCart /></button>
      </div>
    </div>
  );
}

export default Shop_here;
