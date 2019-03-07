import Validator from '../utils/FormValidator';

const reducer = (state={
  name: '',
  address: '',
  phone: '',
  email: '',
  nameValid: false,
  addressValid: false,
  phoneValid: true,
  emailValid: false,
  nameTouched: false,
  addressTouched: false,
  phoneTouched: false,
  emailTouched: false,
  shippingPrice: ""
}, action) => {

  switch(action.type) {
    case "SET_NAME": return {...state, name: action.payload.name};
    case "VALIDATE_NAME": {
      const validator = new Validator(state.name, ['isRequired', 'length'], 3);
      return {...state, nameValid: validator.validate(), nameTouched: true};
    }
    case "SET_ADDRESS": return {...state, address: action.payload.address};
    case "VALIDATE_ADDRESS": {
      const validator = new Validator(state.address, ['isRequired']);
      return {...state, addressValid: validator.validate(), addressTouched: true};
    }
    case "SET_PHONE": return {...state, phone: action.payload.phone};
    case "VALIDATE_PHONE": {
      const validator = new Validator(state.phone, ['optional', 'phoneNumber']);
      return {...state, phoneValid: validator.validate(), phoneTouched: true};
    }
    case "SET_EMAIL": return {...state, email: action.payload.email};
    case "VALIDATE_EMAIL": {
      const validator = new Validator(state.email, ['isRequired', 'email']);
      return {...state, emailValid: validator.validate(), emailTouched: true};
    }
    case "CHANGE_SHIPPING_PRICE": {
      let shippingPrice = "FREE SHIPPING";

      if (action.payload.carrier === "D7L") {
        shippingPrice = "Additional 15.99 PLN";
      }
      else if (action.payload.carrier === "7post") {
        shippingPrice = "Additional 7.99 PLN";
      }

      return {...state, shippingPrice};
    }
    default: return state;
  }
}

export default reducer;