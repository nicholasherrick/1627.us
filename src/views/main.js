import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../assets/img/logo1.jpg';

function Main() {
  return (
    <div className='main-page'>
      <section className='content'>
        <div className='links-main'>
          <Link to='/shop'>shop</Link>
          <Link to='/properties'>properties</Link>
          <Link to='/contact'>contact</Link>
          <Link to='/sponsorships'>sponsorships</Link>
        </div>
      </section>
    </div>
  );
}

export default Main;
