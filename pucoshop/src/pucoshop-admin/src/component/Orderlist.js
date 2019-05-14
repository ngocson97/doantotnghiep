import React, { Component } from 'react';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';

class Orderlist extends Component {
 render() {
  var { order, index } = this.props;
  var classname = index % 2 == 0 ? "succes" : "info";
  var href = "/chi-tiet-hoa-don?ma-hoa-don=" + order.idOrder;

  return (
   <tr className={classname}>
    <td>{index + 1}</td>
    <td>{order.idOrder}</td>
    <td>{order.customerFullName}</td>
    <td>{order.customerPhone}</td>
    <td><CurrencyFormat value={order.totalMoney} displayType={'text'} thousandSeparator={true} /></td>
    <td>
     <Moment format="hh:mm:ssA DD/MM/YY">
     {order.created_at}
    </Moment></td>
    <td style={order.status == 0 ? { color: 'red' } : order.status == 1 ? { color: 'orange' } : order.status ==2 ? { color: 'green' } : { color: 'red' }}>{order.status == 0 ? "Chưa Xác nhận" : order.status == 1 ? "Đã xác nhận" : order.status==2? "Hoàn thành" : "Đã hủy"} </td>
    <th><a href={href}>Chi tiết</a></th>
   </tr>
  );
 }
}

export default Orderlist