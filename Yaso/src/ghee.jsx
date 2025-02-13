import React from 'react';
import NavBar from './nav';
import Foot from './footer';
import gheeImage from './assets/yaso_ghee.png';
import "./ghee.css"

function Ghee() {
  return (
    <>
      <NavBar />
      <div className="product-detail">
        <h1>Yaso Ghee</h1>
        <img src={gheeImage} alt="Yaso Ghee" />
        <p>Pure and fresh Yaso Ghee with natural ingredients.</p>
        <h3>Prices:</h3>
        <ul>
          <li>250 mL - ₹220</li>
          <li>500 mL - ₹520</li>
          <li>1kg - ₹799</li>
        </ul>
      </div>
      <Foot />
    </>
  );
}

export default Ghee;
