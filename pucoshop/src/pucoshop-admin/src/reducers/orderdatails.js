import *as Types from '../constansts/Actiontypes';

var initialState = [];
const orderdetails = (state = initialState, action) => {
 switch (action.type) {
  case Types.FETCH_ORDERDETAIL:
   state = action.orderdetail;
   return [...state];
  case Types.ADD_ORDERDETAIL:
   state.push(action.orderdetails);
   return [...state];
  default: return [...state];
 }
};
export default orderdetails;