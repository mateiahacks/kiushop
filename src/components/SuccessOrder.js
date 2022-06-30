import React from 'react';

export default function SuccessOrder() {

  const btnStyle = {
    padding: '10px',
    backgroundColor: '#4bb543',
    color: 'white',
    cursor: 'pointer'
  }

  return (
    <div className='order_success'>
      <h1>ThANK YOU FOR YOUR PURCHASE</h1>
      <p>Your order number is <strong>00029</strong></p>
      <p>We'll email you an order information with details and tracking info</p>
      <a href='/' className='text-link'><div style={btnStyle}>Countinue Shopping</div></a>
    </div>
  );
}
