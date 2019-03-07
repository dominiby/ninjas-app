import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../styles/cart_components_styles/Plus.scss';

import { incrementAmount } from '../../actions/cartActions';

class Plus extends Component {
  
  render() {
    return (
      <div onClick={this.props.incrementAmount} className={"cart-element-amount-increment" + (this.props.isDisabled ? " disabled" : "")}>+</div>
    );
  }

}

const mapDispatchToProps = (dispatch, props) => (
  { incrementAmount: () => dispatch(incrementAmount(props.id)) }
)

export default connect(null, mapDispatchToProps)(Plus);