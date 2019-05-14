import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
class CartItem extends Component {
 onChange = (e) => {
  var target = e.target;
  var name = target.name;
  var value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
   [name]: value
  });
 }
 render() {
  var { item } = this.props;
   var { quantity } = item;
  var img = "assets/img/" + item.product.image;
  var total = item.quantity * item.product.price;
  return (
   <tr>
    <td><img width="100" src={img} alt="" /></td>
    <td>{item.product.productName}</td>
      <td><CurrencyFormat value={item.product.price} displayType={'text'} thousandSeparator={true}  /></td>
    <td>
     <form action="">
     <input className="span1" style={{ width: 34 + 'px' }} size="16" type="text" name="quantity" value={quantity} />
     <div className="input-append">
       <button className="btn btn-mini" type="button" onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)} >-</button><button className="btn btn-mini" type="button" onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}> + </button><button className="btn btn-mini btn-danger" type="button" onClick={() => this.onDelete(item.product)}><span className="icon-remove"></span></button>
      
      </div>
      </form>
    </td>
      <td><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} /></td>
   </tr>
  );
 }
 onAddToCart = (product) => {
  this.props.onAddToCart(product);
 }
 onUpdateQuantity = (product, quantity) => {
  if (quantity > 0) {
    if (product.quantity < quantity) {
      alert("số lượng hàng không đủ");
    }
    else {
      this.props.onUpdateInCart(product, quantity);
    }
  }
 }
 onDelete = (product) => {
  var { onDeleteCart } = this.props;
  onDeleteCart(product);
  window.location.reload();
 }
}

export default CartItem;