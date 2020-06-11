import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/img/logo2.jpg';

function Main() {
  return (
    <div className='main-page'>
      <section className='content'>
        <img src={Logo2} />
        <div className='bottom-text'>
          <Link to='/'>
            <h1>1627</h1>
          </Link>
          <div className='links'>
            <Link to='/stockists'>stockists</Link>
            <Link to='/contact'>contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
