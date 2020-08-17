import React from 'react';
import { Link } from 'react-router-dom';

function Sponsorships() {
  return (
    <div className='main-page'>
      <section className='stockists-content'>
        <div className='stockists-info'>
          <div className='locations-info'>
            <div>
              <p className='p-margin'>CP3 Basketball Academy</p>
              <a href='https://cp3basketballacademy.com/sponsors/'>
                click here
              </a>
            </div>
            <div>
              <p className='p-margin'>Winston Salem Christian School</p>
              <a href='https://www.wschristian.com/athletics-1/'>click here</a>
            </div>
            <div>
              <p className='p-margin'>Penn-Griffin School for the Arts</p>
              <a href='https://www.gcsnc.com/domain/3014/'>click here</a>
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

export default Sponsorships;
