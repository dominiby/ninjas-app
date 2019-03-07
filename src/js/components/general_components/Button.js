import React from 'react';

import '../../../styles/general_components_styles/Button.scss';

export default function Button(props) {
  return (
    <button onClick={props.onClick ? props.onClick : () => {}} className={props.disabled ? 'disabled' : ''}>
      {props.text}
    </button>
  );
}

