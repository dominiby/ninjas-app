import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../general_components/Button';

import '../../../styles/cart_components_styles/CartFinish.scss';

export default function CartFinish(props) {
  return (
    <div id="cart-finish">
      <div id="cart-total">{`${props.totalAmount}`}</div>
      <Link to='/shipping'>
        <Button text="buy" />
      </Link>
    </div>
  );
}
