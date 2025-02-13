import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './nav';
import Shop_here from './shop_here';
import Home from './home';
import Ghee from './ghee';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
     
      <Routes>
        <Route path="/home.jsx" element={<Home />} />
        <Route path="/shop_here.jsx" element={<Shop_here />} />
        <Route path="/ghee" element={<Ghee />} />
        
      </Routes>
    </Router>
  </StrictMode>
);
