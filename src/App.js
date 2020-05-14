import React from 'react';
import Logo from './assets/img/logo.jpg';
import Product1 from './assets/img/product1.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='logo'>
        <img className='logo-image' src={Logo} alt='' />
      </div>
      <div className='product'>
        <img className='product1-image' src={Product1} alt='' />
      </div>
      <div className='text'>
        <h2>1627</h2>
      </div>
    </div>
  );
}

export default App;
