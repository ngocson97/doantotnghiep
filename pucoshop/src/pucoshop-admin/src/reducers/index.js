import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import cart from './cart';
import users from './users';
import orders from './orders';
import orderdetails from './orderdatails';
const appReducers = combineReducers({
  products,
  categories,
  cart,
  users,
  orders,
  orderdetails,

});
export default appReducers;