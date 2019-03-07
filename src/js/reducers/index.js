import { combineReducers } from 'redux';

import cart from './cartReducer';
import shipping from './shippingReducer';

export default combineReducers({
  cart,
  shipping
});