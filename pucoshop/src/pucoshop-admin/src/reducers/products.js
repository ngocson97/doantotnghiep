import *as Types from '../constansts/Actiontypes';

var initialState = [];
const products = (state = initialState, action) => {
 switch (action.type) {
  case Types.FETCH_PRODUCTS:
   state = action.products;
   return [...state];
  case Types.ADD_PRODUCT:
   state.push(action.product);
   return [...state];
  default: return [...state];
 }
};
export default products;