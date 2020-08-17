import React from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <div className='main-page'>
      <section className='stockists-content'>
        <div className='stockists-info'>
          <div className='locations-info'>
            <div className='shop-item'>
              <a href='https://whatsnextonyourlist.com/'>whatsnextonyourlist</a>
              <p className='no-margin'>NY</p>
            </div>
            <div className='shop-item'>
              <a href='https://hidetheporsches.com/'>hidetheporsches.com</a>
              <p className='no-margin'>NC</p>
            </div>
          </div>
        </div>
        <div className='links'>
          <Link to='/shop'>shop</Link>
          <Link to='/properties'>properties</Link>
          <Link to='/contact'>contact</Link>
          <Link to='/sponsorships'>sponsorships</Link>
        </div>
      </section>
    </div>
  );
}
