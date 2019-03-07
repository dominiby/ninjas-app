import React from 'react';

import '../../../styles/shipping_components_styles/FormSelectInput.scss';

export default function FormSelectInput(props) {
  return (
    <div className="shipping-form-element">
      <div id="select-wrapper" className="label-select-wrapper">
        <label>{props.labelText}</label>
        <select onChange={props.onSelectChange} name="shipping">
          {props.freeShippingOption}
          <option>D7L</option>
          <option>7post</option>
        </select>
        <span>{props.shippingPrice}</span>
      </div>
    </div>
  );
}
