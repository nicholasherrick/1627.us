import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../assets/img/logo1.jpg';

function Main() {
  return (
    <div className='main-page'>
      <section className='content'>
        <div className='links-main'>
          <a href='https://1627.store/'>shop</a>
          <Link to='/properties'>properties</Link>
          <Link to='/contact'>contact</Link>
          <Link to='/sponsorships'>sponsorships</Link>
          <a href='https://162716271627.tumblr.com/'>moodboard</a>
        </div>
      </section>
    </div>
  );
}

export default Main;
