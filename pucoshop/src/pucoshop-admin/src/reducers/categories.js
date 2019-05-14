import *as Types from '../constansts/Actiontypes';

var initialState = [];

const categories = (state = initialState, action) => {
 var {category} = action;
 var index = -1;
 switch (action.type) {
  case Types.FETCH_CATEGORIES:
   state = action.categories;
   return [...state];
  case Types.ADD_CATEGORY:
   state.push(action.categories);
   return [...state];
  case Types.DELETE_CATEGORY:
   index = findIndex(state, category)
   if (index !== -1) {
    state.splice(index, 1);
   }
   return [...state];
  default: return [...state];
 }
};
export default categories;
var findIndex = (categories, idCate) => {
 var results = -1;
 categories.forEach((category, index) => {
  if (category=== idCate) {
   results = index;
  }
 });
 return results;
}