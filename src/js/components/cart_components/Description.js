import React from 'react';

import '../../../styles/cart_components_styles/Description.scss';


export default function Description(props) {
  return (
    <div className="cart-element-description">{props.text}</div>
  );
}
