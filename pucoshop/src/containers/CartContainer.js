import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import CartItem from '../component/CartItem';
import Cart from '../component/Cart';
import CartResult from '../component/CartResult';
import * as Message from '../constants/Message';
import { DeleteproductIncart , actUpdateCart } from './../pucoshop-admin/src/actions/index';
class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart >
        {this.showCartItem(cart)}
        {this.TotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    var result = Message.CART_EMPTY;
    var { onDeleteCart,onUpdateInCart } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteCart={onDeleteCart}
            onUpdateInCart ={onUpdateInCart}
          />
        );
      });
    }
    return result;
  }
  TotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
}
CartContainer.propTypes = {
  carts: propTypes.arrayOf(propTypes.shape({
    product: propTypes.arrayOf(propTypes.shape({
      idProduct: propTypes.number.isRequired,
      productName: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      image: propTypes.string.isRequired
    })).isRequired,
    quantity: propTypes.number.isRequired
  })).isRequired
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteCart: (product) => {
      dispatch(DeleteproductIncart(product));
    },
    onUpdateInCart :(product,quantity) =>{
      dispatch(actUpdateCart(product,quantity));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);