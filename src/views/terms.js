import React from 'react';
import Header from '../components/header';

function Terms() {
  return (
    <div className='terms-page'>
      <Header />
      <h1>Terms</h1>
      <h5>ORDERS & PRODUCTS</h5>
      <p>
        All orders subject to email confirmation. Please note products on the
        site may be out-of-stock or discontinued.
      </p>
      <h5>PRICES</h5>
      <p>
        All prices listed are in US Dollars. Prices are subject to change
        without notice.
      </p>
      <h5>SHIPPING COST</h5>
      <p>
        You the customer are responsible for shipping cost associated with
        delivery of any products you purchase on our site.
      </p>
      <h5>SHIPMENT & DELIVERY</h5>
      <p>
        Please allow 3 to 5 business days for order processing and up to 7
        additional days for delivery to arrive. Please allow up to 14 additional
        business days for international orders to arrive.
      </p>
      <h5>RETURNS & REFUNDS</h5>
      <p>
        No refunds, credits, or exchanges. All sales are final. Please carefully
        review all information in your order prior to finalizing you purchase.
      </p>
      <h5>CONTACT</h5>
      <p>
        Please contact us at{' '}
        <a href='mailto:mdavis92191@yahoo.com'>mdavis92191@yahoo.com</a> with
        any additional questions, we will do our best to reply within 24-48
        hours.
      </p>
    </div>
  );
}

export default Terms;
