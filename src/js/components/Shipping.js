import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../components/general_components/Button';
import FormTextInput from '../components/shipping_components/FormTextInput';
import FormSelectInput from '../components/shipping_components/FormSelectInput';

import { setName, validateName, setAddress, validateAddress, setPhoneNumber, validatePhoneNumber, setEmail, validateEmail, changeShippingPrice } from '../actions/shippingActions';

import '../../styles/Shipping.scss';

class Shipping extends Component {

  constructor () {
    super();

    this.setName = this.setName.bind(this);
    this.setAddress = this.setAddress.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.changeShippingPrice = this.changeShippingPrice.bind(this);
    this.handlePayClick = this.handlePayClick.bind(this);
  }

  setName (e) {
    this.props.dispatch(setName(e.target.value));
  }

  setAddress (e) {
    this.props.dispatch(setAddress(e.target.value));
  }

  setPhoneNumber (e) {
    this.props.dispatch(setPhoneNumber(e.target.value));
  }

  setEmail (e) {
    this.props.dispatch(setEmail(e.target.value));
  }

  changeShippingPrice (e) {
    this.props.dispatch(changeShippingPrice(e.target.value));
  }

  componentDidMount () {
    this.props.dispatch(changeShippingPrice(document.querySelector('select').value));
  }

  // input is validated upon blur
  // we need to validate all fields upon clicking one more time
  // sometimes when user puts in valid data, then blurs out of input and goes in again and changes it to invalid data - input will be enabled and clickable
  handlePayClick (e, disabled) {
    e.preventDefault();
    if (!disabled) {
      this.props.validateName();
      this.props.validateAddress();
      this.props.validatePhoneNumber();
      this.props.validateEmail();
    }
  }

  render() {
    let buttonDisabled = false;
    let freeShippingOption = <option disabled>ninjPost</option>;
    let totalPrice = 0;

    this.props.cartElements.forEach((cartElement) => {
      totalPrice += cartElement.price * cartElement.amount;
    });

    if (totalPrice > 200) {
      freeShippingOption = <option>ninjPost</option>;
    }

    if (!this.props.nameTouched || !this.props.addressTouched || !this.props.emailTouched || 
        !this.props.nameValid || !this.props.addressValid || !this.props.phoneValid || !this.props.emailValid) {
      buttonDisabled = true;
    }

    return (
      <div id="shipping">
        <form id="shipping-form">
          <FormTextInput labelText="Name*" inputName="name" onInputChange={this.setName} onInputBlur={this.props.validateName}
                          valid={!this.props.nameTouched || this.props.nameValid} errorText="Invalid name"/>
          <FormTextInput labelText="Address*" inputName="address" onInputChange={this.setAddress} onInputBlur={this.props.validateAddress}
                          valid={!this.props.addressTouched || this.props.addressValid} errorText="Invalid address"/>
          <FormTextInput labelText="Phone" inputName="phone" onInputChange={this.setPhoneNumber} onInputBlur={this.props.validatePhoneNumber}
                          valid={this.props.phoneValid} errorText="Invalid phone number"/>
          <FormTextInput labelText="E-mail*" inputName="email" onInputChange={this.setEmail} onInputBlur={this.props.validateEmail}
                          valid={!this.props.emailTouched || this.props.emailValid} errorText="Invalid e-mail"/>
          <FormSelectInput labelText="Shipping options" onSelectChange={this.changeShippingPrice} freeShippingOption={freeShippingOption} 
                            shippingPrice={this.props.shippingPrice} />
          <div id="form-button-wrapper">
            <Button onClick={(e) => this.handlePayClick(e, buttonDisabled)} text="pay" disabled={buttonDisabled} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nameValid: state.shipping.nameValid,
  addressValid: state.shipping.addressValid,
  phoneValid: state.shipping.phoneValid,
  emailValid: state.shipping.emailValid,
  nameTouched: state.shipping.nameTouched,
  addressTouched: state.shipping.addressTouched,
  emailTouched: state.shipping.emailTouched,
  shippingPrice: state.shipping.shippingPrice,
  cartElements: state.cart.cartElements
});

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ validateAddress, validateEmail, validateName, validatePhoneNumber }, dispatch);
  return {...actions, dispatch};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);