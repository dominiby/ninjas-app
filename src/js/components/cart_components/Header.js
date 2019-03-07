import React from 'react';

import '../../../styles/cart_components_styles/Header.scss';


export default function Header(props) {
  return (
    <h2 className="cart-element-header">{props.text}</h2>
  );
}
