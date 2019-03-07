import React from 'react';
import '../../../styles/cart_components_styles/Amount.scss';


export default function Amount(props) {
  return (
    <div className="cart-element-amount-number">{props.number}</div>
  );
}