import * as Types from './../constansts/Actiontypes';

export const actFetchProducts = (products) => {
 return {
  type: Types.FETCH_PRODUCTS,
  products
 }
}
export const actAddProduct = (product) => {
 return ({
  type: Types.ADD_PRODUCT,
  product
 })
}
export const actUpdateProduct = (product) => {
 return ({
  type: Types.UPDATE_PRODUCT,
  product
 })
}

export const actFetchCategories = (categories) => {
 return ({
  type: Types.FETCH_CATEGORIES,
  categories
 });
}
export const actAddNewCategories = (category) => {
 return ({
  type: Types.ADD_CATEGORY,
  category
 })
}
export const actAddToCart = (product, quantity) => {
 return {
  type: Types.ADD_CART,
  product,
  quantity
 }
}

export const DeleteproductIncart = (product) => {
 return {
  type: Types.DELETE_CART,
  product

 }
}
export const actUpdateCart = (product, quantity) => {
 return {
  type: Types.UPDATE_CART,
  product,
  quantity
 }
}
export const actDeleteCategory = (category) => {
 return {
  type: Types.DELETE_CATEGORY,
  category
 }
}
export const actUpdateCategory = (category) => {
 return {
  type: Types.UPDATE_CATEGORY,
  category
 }
}


export const actFethAllUser = (users) => {
 return {
  type: Types.FETCH_USER,
  users
 }
}
export const actAddUser = (user) => {
 return {
  type: Types.ADD_USER,
  user
 }
}
export const actUpdateUser = (user) => {
 return {
  type: Types.UPDATE_USER,
  user

 }
}
export const actAddOrder = (order) => {
 return {
  type: Types.ADD_ORDER,
  order

 }
}
export const actFetchOrder = (orders) => {
 return {
  type: Types.FETCH_ORDER,
  orders
 }
}
export const actAddOrderdetail = (orderdetail) => {
 return {
  type: Types.ADD_ORDERDETAIL,
  orderdetail
 }
}
export const actFetchOrderDetail = (orderdetail) => {
 return {
  type: Types.FETCH_ORDERDETAIL,
  orderdetail
 }
}

export const actFetchOrderDetailm = (ordm) => {
 return {
  type: Types.FETCH_ORDERDETAILM,
  ordm
 }
}
export const actFetchOrderDetailw = (orderdetailw) => {
 return {
  type: Types.FETCH_ORDERDETAILW,
  orderdetailw
 }
}



