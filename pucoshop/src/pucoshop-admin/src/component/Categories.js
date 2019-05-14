import React, { Component } from 'react';

class Categories extends Component {
 Delete = (idCate) => {
  if (confirm('Bạn có chắc chắn muốn xóa không?')) {// eslint-disable-line
   this.props.onDelete(idCate);
   window.location.reload();
  }
 }
 render() {
  var { category } = this.props
  var href = "danh-muc-san-pham?edit=" + category.idCate
  return (
   <tr>
    <td>{category.idCate}</td>
    <td>{category.cateName}</td>
    <td>{category.created_at}</td>
    <td>{category.updated_at}</td>
    <td><button><a style={{ textDecoration: null }} href={href}>Chỉnh sửa</a></button>
     </td>
   </tr>
  );
 }

}
export default Categories