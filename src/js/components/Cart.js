import React, { Component } from 'react';
import '../../styles/Cart.scss';
import { connect } from 'react-redux';
import { fetchCartElements } from '../actions/cartActions';

import CartElement from './cart_components/CartElement';
import CartFinish from './cart_components/CartFinish';
import Loader from './cart_components/Loader';

class Cart extends Component {


  componentDidMount () {
    if (!this.props.cartElements.length) {
      this.props.dispatch(fetchCartElements());
    }
  }

  render () {
    let totalAmount = 0;
    let cartContent;

    if (this.props.fetched && !this.props.fetching) {
      cartContent = this.props.cartElements.map((cartElement, i) => {
        totalAmount += cartElement.price * cartElement.amount;
        return <CartElement id={cartElement.id} key={i} header={cartElement.header} description={cartElement.description} amount={cartElement.amount} 
                            price={cartElement.price} isMinusDisabled={cartElement.isMinusDisabled} isPlusDisabled={cartElement.isPlusDisabled} />
      });
      cartContent.push(<CartFinish key={cartContent.length} totalAmount={`${Number(totalAmount).toFixed(2)} €`} />);
    }
    else if (this.props.fetching) {
      cartContent = <Loader />;
    }
    else if (this.props.error) {
      console.log(this.props.error);
      cartContent = <div id="error">Oops! Something went wrong! <span id="reload-button" onClick={() => { window.location.reload(); }}>Click here</span> to try again.</div>
    }

    return (
      <div id="cart" className="container">

        {cartContent}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartElements: state.cart.cartElements,
  fetched: state.cart.fetched,
  fetching: state.cart.fetching,
  error: state.cart.error
});

export default connect(mapStateToProps)(Cart);