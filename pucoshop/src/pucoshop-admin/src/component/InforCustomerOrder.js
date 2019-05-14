import React, { Component } from 'react';

class InforCustomerOrder extends Component {
 render() {
  var { order, index } = this.props;
  var classname = index % 2 == 0 ? "succes" : "info";
  var href = "/chi-tiet-hoa-don?ma-hoa-don=" + order.idOrder;
  return (
   <tr className={classname} style={{ textAlign: 'center' }}>
    <td>{index + 1}</td>
    <td>{order.idOrder}</td>
    <td>{order.customerFullName}</td>
    <td>{order.customerPhone}</td>
    <td>{order.totalMoney}</td>
    <td>{order.created_at}</td>
    <td>{order.status}</td>
    <th><a href={href}>Chi tiết</a></th>
   </tr>
  );
 }
}

export default InforCustomerOrder