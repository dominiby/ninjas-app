export function setName (name) {
  return {
    type: "SET_NAME",
    payload: {
      name
    }
  }
};

export function validateName () {
  return {
    type: "VALIDATE_NAME"
  }
};

export function setAddress (address) {
  return {
    type: "SET_ADDRESS",
    payload: {
      address
    }
  }
};

export function validateAddress () {
  return {
    type: "VALIDATE_ADDRESS"
  }
};

export function setPhoneNumber (phone) {
  return {
    type: "SET_PHONE",
    payload: {
      phone
    }
  }
};

export function validatePhoneNumber () {
  return {
    type: "VALIDATE_PHONE"
  }
};

export function setEmail (email) {
  return {
    type: "SET_EMAIL",
    payload: {
      email
    }
  }
};

export function validateEmail () {
  return {
    type: "VALIDATE_EMAIL"
  }
};

export function changeShippingPrice (carrier) {
  return {
    type: "CHANGE_SHIPPING_PRICE",
    payload: {
      carrier
    }
  }
}


