import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='main-page'>
      <section className='content'>
        <div className='contact-info'>
          <div className='paragraph'>
            <strong>PRESS AND INQUIRIES</strong>
            <p>1627</p>
            <p>NEW YORK</p>
            <p>
              Email <a href='mailto:info@1627.us'>info@1627.us</a>
            </p>
          </div>
          <div className='paragraph'>
            <strong>SALES</strong>
            <a href='mailto:info@1627.us'>info@1627.us</a>
            <p>
              1627 does not sell direct to consumer at this time, nor is it
              associated with any sites outside of this domain name claiming to
              do so. To purchase 1627 please refer to the stockists page for a
              list of all authorized 1627 retail partners.
            </p>
          </div>
          <div className='paragraph'>
            <strong>MAILING LIST</strong>
            <a href='mailto:info@1627.us'>info@1627.us</a>
          </div>
        </div>
        <div className='links'>
          <a href='https://1627.store/'>shop</a>
          <Link to='/properties'>properties</Link>
          <Link to='/sponsorships'>sponsorships</Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;
