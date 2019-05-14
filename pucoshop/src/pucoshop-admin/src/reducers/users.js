import *as Types from '../constansts/Actiontypes';

var initialState = [];
const users = (state = initialState, action) => {
 switch (action.type) {
  case Types.FETCH_USER:
   state = action.products;
   return [...state];
  case Types.ADD_USER:
   state.push(action.product);
   return [...state];
  default: return [...state];
 }
};
export default users;