const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(email).toLowerCase())) {
    return false;
  }
  return true;
}

const validateLength = (string, min, max) => {
  if (!(string.length >= min) || !(string.length <= max)) {
    return false;
  }

  return true;
}

const validateNotEmpty = (string) => {
  return string.length > 0;
}

const validatePhoneNumber = (phoneNumber) => {
  const re = /^\d{9}$/;

  if (!re.test(String(phoneNumber))) {
    return false;
  }

  return true;
}

export default class Validator {

  constructor (value, validations, minLength, maxLength) {
    this.value = value;
    this.validated = true;
    this.validations = [...validations];
    this.minLength = minLength || 0;
    this.maxLength = maxLength || 9999;
  }


  validate () {
    // If optional and empty - return true
    if (this.validations.find(validation => validation === 'optional') && this.value === '') {
      return true;
    }

    this.validations.map(validation => {
      if (validation === 'email') {
        this.validated = validateEmail(this.value);
      }
      else if (validation === 'length') {
        this.validated = validateLength(this.value, this.minLength, this.maxLength);
      }
      else if (validation === 'phoneNumber') {
        this.validated = validatePhoneNumber(this.value);
      }
      else if (validation === 'isRequired') {
        this.validated = validateNotEmpty(this.value);
      }
      return validation;
    });

    return this.validated;
  }

}
