import *as Types from '../constansts/Actiontypes';

var initialState = [];
const orders = (state = initialState, action) => {
 switch (action.type) {
  case Types.FETCH_ORDER:
   state = action.orders;
   return [...state];
  case Types.ADD_ORDER:
   state.push(action.orders);
   return [...state];
  default: return [...state];
 }
};
export default orders;