import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
class CartResult extends Component {
 render() {
  var {cart} = this.props;
  return (
     <tr>
      <td colspan="4" className="alignR">Tổng tiền:	</td>
        <td colspan="2"><b><CurrencyFormat value={this.TotalAmount(cart)} displayType={'text'} thousandSeparator={true} /></b></td>
     </tr>
  );
 }
 TotalAmount = (cart) => {
   var total = null;
    if (cart.length > 0) {
       for (var i = 0; i < cart.length; i++) {
          total += cart[i].product.price * cart[i].quantity;
       }  
    }
    
   return total;
 }
}
export default CartResult