import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/img/logo2.jpg';

function Header() {
  return (
    <div className='logo'>
      <Link to='/'>
        <img className='logo-image' src={Logo2} alt='' />
      </Link>
    </div>
  );
}

export default Header;
