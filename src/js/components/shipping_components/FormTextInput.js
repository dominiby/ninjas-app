import React from 'react';

import '../../../styles/shipping_components_styles/FormTextInput.scss';

export default function FormTextInput(props) {
  return (
    <div className="shipping-form-element">
      <div className="label-input-wrapper">
        <label>{props.labelText}</label><input onChange={props.onInputChange} onBlur={props.onInputBlur} name={props.inputName} type="text" />
      </div>
      <div className="error">{!props.valid ? props.errorText : ""}</div>
    </div>
  );
}