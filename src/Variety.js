import React from 'react';
import { Link } from 'react-router-dom';

const Variety = () => {
  return (
    <div>
      <h1>Varieties</h1>
      <ul>
        <li><Link to="/veg">Veg</Link></li>
        <li><Link to="/nonveg">Non-Veg</Link></li>
        <li><Link to="/snacks">Snacks</Link></li>
        <li><Link to="/fruits">Fruits</Link></li>
      </ul>
    </div>
  );
};

export default Variety;
