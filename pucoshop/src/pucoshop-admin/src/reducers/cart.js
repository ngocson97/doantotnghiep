import *as Types from '../constansts/Actiontypes';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
const cart = (state = initialState, action) => {
 var { product, quantity } = action;
 var index = -1;
 switch (action.type) {
  case Types.FETCH_CART:
   state = action.cart;
   return [...state];
  case Types.ADD_CART:
   index = findProduct(state, product);
   if (index !== -1) {
    state[index].quantity += quantity;
   }
   else {
    state.push({
     product,
     quantity
    });
   }
   localStorage.setItem('CART', JSON.stringify(state));
   return [...state];
  case Types.DELETE_CART:
   index = findProduct(state, product)
   if (index !== -1) {
    state.splice(index, 1);
   }
   localStorage.setItem('CART', JSON.stringify(state));
   return [...state];
  case Types.UPDATE_CART:
   index = findProduct(state, product)
   if (index !== -1) {
    state[index].quantity = quantity;
   }
   localStorage.setItem('CART', JSON.stringify(state));
   return [...state];
  default: return [...state];
 }
}
var findProduct = (cart, product) => {
 var index = -1;
 if (cart.length > 0) {
  for (var i = 0; i < cart.length; i++) {
   if (cart[i].product.idProduct === product.idProduct) {
    index = i;
    break;
   }
  }
 }
 return index;
}
export default cart;