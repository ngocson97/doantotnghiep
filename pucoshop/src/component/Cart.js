import React, { Component } from 'react';
class Cart extends Component {
 render() {
  var { children } = this.props;
  return (
   <table className="table table-bordered table-condensed" >
    <thead>
     <tr>
      <th>Hình ảnh</th>
      <th>Tên sản phẩm</th>
      <th>Đơn giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
     </tr>
    </thead>
    <tbody>
     {children}
    </tbody>
   </table >
  );
 }

}
export default Cart