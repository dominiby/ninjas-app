import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../styles/cart_components_styles/RemoveBin.scss';

import { removeCartElement } from '../../actions/cartActions';

class RemoveBin extends Component {

  render() {
    return (
      <div onClick={this.props.removeCartElement} className="cart-element-remove"></div>
    );
  }
  
}

const mapDispatchToProps = (dispatch, props) => ({
  removeCartElement: () => dispatch(removeCartElement(props.id))
})

export default connect(null, mapDispatchToProps)(RemoveBin);