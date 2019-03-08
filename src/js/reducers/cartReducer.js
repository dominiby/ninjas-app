const reducer = (state={
  cartElements: [],
  fetching: false,
  fetched: false,
  error: null
}, action) => {

  switch (action.type) {
    case "FETCH_CART_ELEMENTS": return {...state, fetching: true};
    case "FETCH_CART_ELEMENTS_FULFILLED": return {...state, fetching: false, fetched: true, cartElements: action.payload};
    case "FETCH_CART_ELEMENTS_REJECTED": return {...state, fetching: false, error: action.payload};
    case "INCREMENT_AMOUNT": {
      const { id } = action.payload;
      const newCartElements = [...state.cartElements];
      const cartElementToUpdateIndex = newCartElements.findIndex(cartElement => cartElement.id === id);

      if (newCartElements[cartElementToUpdateIndex].amount < 100) {
        newCartElements[cartElementToUpdateIndex].amount++;
      }

      if (newCartElements[cartElementToUpdateIndex].amount === 100) {
        newCartElements[cartElementToUpdateIndex].isPlusDisabled = true;
      }

      if (newCartElements[cartElementToUpdateIndex].isMinusDisabled) {
        newCartElements[cartElementToUpdateIndex].isMinusDisabled = false;
      }

      return {...state, cartElements: newCartElements};
    }
    case "DECREMENT_AMOUNT": {
      const { id } = action.payload;
      const newCartElements = [...state.cartElements];
      const cartElementToUpdateIndex = newCartElements.findIndex(cartElement => cartElement.id === id);

      if (newCartElements[cartElementToUpdateIndex].amount > 0) {
        newCartElements[cartElementToUpdateIndex].amount--;
      }
      else if (newCartElements[cartElementToUpdateIndex].amount === 0) {
        newCartElements[cartElementToUpdateIndex].isMinusDisabled = true;
      }

      if (newCartElements[cartElementToUpdateIndex].isPlusDisabled) {
        newCartElements[cartElementToUpdateIndex].isPlusDisabled = false;
      }

      return {...state, cartElements: newCartElements};
    }
    case "REMOVE_CART_ELEMENT": return {...state, cartElements: state.cartElements.filter(element => element.id !== action.payload.id)};
    default: return state;
  }
};

export default reducer;