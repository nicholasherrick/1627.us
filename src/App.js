import React from 'react';
import Logo1 from './assets/img/logo1.jpg';
import Logo2 from './assets/img/logo2.jpg';
import Product1 from './assets/img/product1.jpg';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='logo'>
        <img className='logo-image' src={Logo2} alt='' />
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
