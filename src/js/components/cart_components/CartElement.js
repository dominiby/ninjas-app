import React from 'react';

import '../../../styles/cart_components_styles/CartElement.scss';

import Image from './Image';
import Header from './Header';
import Description from './Description';
import Separator from './Separator';
import Plus from './Plus';
import Minus from './Minus';
import Amount from './Amount';
import RemoveBin from './RemoveBin';
import Price from './Price';


export default function CartElement(props) {
  return (
    <div className="cart-element">
    <Image />

    <div className="cart-element-header-description-wrapper">
      <Header text={props.header} />
      <Description text={props.description} />
    </div>

    <Separator />

    <div className="cart-element-amount">
      <Minus id={props.id} isDisabled={props.isMinusDisabled}/>
      <Amount id={props.id} number={props.amount}/>
      <Plus id={props.id} isDisabled={props.isPlusDisabled}/>
    </div>

    <div className="cart-element-total">
      <RemoveBin id={props.id}/>
      <Price totalPrice={`${Number(props.amount * props.price).toFixed(2)} €`}/>
    </div>
  </div>
  );
}
