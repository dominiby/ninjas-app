import React from 'react';

import '../../../styles/cart_components_styles/Price.scss';


export default function Price(props) {
  return (
    <div className="cart-element-price">{props.totalPrice}</div>
  );
}
