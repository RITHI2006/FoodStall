import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js'
import Login from './Login.js'
import Variety from './Variety.js'
import Contact from './Contact.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Veg } from './Veg.js';
import { Nonveg } from './Nonveg.js';
import { Fruits } from './Fruits.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Snacks } from './Snacks.js';
import { CartPage } from './CartPage.js';
import { Order } from './Order.js';

function App(){
  return (
    <Router>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/variety" element={<Variety />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Veg" element={<Veg />} />
      <Route path="/Nonveg" element={<Nonveg />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/snacks" element={<Snacks />} />
      <Route path="/Cartpage" element={<CartPage />}/>
      <Route path="/Order" element={<Order/>}/>
    </Routes>
    
    <Footer />
  </Router>

  );
  
}
export default App;