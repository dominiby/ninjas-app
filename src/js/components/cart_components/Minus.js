import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../styles/cart_components_styles/Minus.scss';

import { decrementAmount } from '../../actions/cartActions';

class Minus extends Component {

  render() {
    return (
      <div onClick={this.props.decrementAmount} className={"cart-element-amount-decrement" + (this.props.isDisabled ? " disabled" : "")}>-</div>
    );
  }

}

const mapDispatchToProps = (dispatch, props) => ({
  decrementAmount: () => dispatch(decrementAmount(props.id))
})

export default connect(null, mapDispatchToProps)(Minus);