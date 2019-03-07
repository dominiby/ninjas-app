import axios from "axios";

export function fetchCartElements () {
  return (dispatch) => {
    dispatch({type: "FETCH_CART_ELEMENTS"});
    axios.get('https://demo2375941.mockable.io/cart-elements')
      .then((response) => {
        dispatch({type: "FETCH_CART_ELEMENTS_FULFILLED", payload: response.data.elements})
      })
      .catch((err) => {
        dispatch({type: "FETCH_CART_ELEMENTS_REJECTED", payload: err})
      });
  }
};

export function incrementAmount (id) {
  return {
    type: 'INCREMENT_AMOUNT',
    payload: {
      id
    }
  }
}

export function decrementAmount (id) {
  return {
    type: 'DECREMENT_AMOUNT',
    payload: {
      id
    }
  }
}

export function removeCartElement (id) {
  return {
    type: 'REMOVE_CART_ELEMENT',
    payload: {
      id
    }
  }
}
