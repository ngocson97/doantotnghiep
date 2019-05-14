import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
class ListProductOrder extends Component {
 render() {
  var { orderdetail,index} = this.props;
  console.log(orderdetail);
  return (
  
    <tr >
    <td >{index+1}</td>
    <td >{orderdetail.productName}</td>
    <td ><CurrencyFormat value={orderdetail.price} displayType={'text'} thousandSeparator={true} /></td>
    <td >{orderdetail.quantity}</td>
    <td ><b><CurrencyFormat value={orderdetail.totalMoney} displayType={'text'} thousandSeparator={true} /></b></td>
   </tr>
  );
 }

}

export default ListProductOrder