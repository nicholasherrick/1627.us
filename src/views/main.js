import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Product1 from '../assets/img/product1.jpg';

function Main() {
  return (
    <div className='main-page'>
      <Header />
      <div className='product'>
        <img className='product1-image' src={Product1} alt='' />
      </div>
      <div className='text'>
        <div className='links'>
          <Link to='/terms'>Terms</Link>
        </div>
        <h2>1627</h2>
      </div>
    </div>
  );
}

export default Main;
