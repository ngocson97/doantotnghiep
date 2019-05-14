import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../untils/apiCaller';
import { actFetchProducts } from '../../actions/index';
import CurrencyFormat from 'react-currency-format';
const ListProduct = ({ tt, productName, price, quantity, image, keywords, description, status, idCate, user_id, created_at, updated_at,ondelete }) => {
 var href = "cap-nhat-san-pham?edit=" + tt;
 var img = "assets/img/img/" + image;
function Delete() {
alert("xxx");
}
 return (
  <tr>
   <td>{tt}</td>
   <td><img src={img} alt="" style={{ width: 30 + 'px' }} /></td>
   <td>{productName}</td>
   <td><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} /></td>
   <td>{quantity}</td>
   <td>{keywords}</td>
   <td>{status}</td>
   <td>{idCate}</td>
   <td><a href={href}>Chỉnh sửa</a>
   <button onClick={
function (){
 if(confirm("bạn có chắc chắn muốn xóa sản phẩm ")){// eslint-disable-line         
 callApi(`product/${tt}`, "DELETE", null).then(res => {
    console.log(res);
    window.location.reload();
  })
 }
}
   }>Xóa</button>
   </td>
  </tr>
 );
}

class ProductPage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   products: []
  }
 }
  onDelete = (idProduct) => {
  var { products } = this.props;
  callApi(`product/${idProduct}`, "DELETE", idProduct).then(res => {
    var index = this.findIndex(products, idProduct);
    if (index !== -1) {
     products.splice(index, 1);
     this.setState({
      products: products
     });
    }
   
  });
 }
 findIndex = (products, idProduct) => {
  var results = -1;
  products.forEach((product, index) => {
   if (product.id === idProduct) {
    results = index;
   }
  });
  return results;
 }
 componentDidMount() {
  callApi("product", "GET", null).then(res => {
   console.log(res)
   this.props.fetchAllProducts(res.data);
  });
 }
 render() {
  var { products } = this.props;
  return (
   <div>
    <div className="col-md-12">

     <div className="panel panel-default">

      <div className="panel-heading">
       Danh sách sản phẩm
       </div>

      <div className="panel-body">
       <div className="table-responsive">
        <table className="table">
         <thead>
          <tr>
           <th>Mã sản phẩm</th>
           <th>Hình ảnh</th>
           <th>Tên sản phẩm</th>
           <th>Giá</th>
           <th>Số lượng</th>
           <th>từ khóa</th>
           <th>Mô tả</th>
           <th>Trạng thái</th>
           <th>Danh mục</th>
           <th></th>
          </tr>
         </thead>
         <tbody>
          {this.showProducts(products)}
         </tbody>
        </table>
       </div>
      </div>
     </div>

    </div>
   </div>
  );
 }
 showProducts(products) {
  var results = null;
  var ondelete= this.onDelete;
  if (products.length > 0) {
   results = products.map((product, index) => {
    return (
     <ListProduct
      key={index}
      tt={product.idProduct}
      productName={product.productName}
      price={product.price}
      quantity={product.quantity}
      image={product.image}
      keywords={product.keywords}
      description={product.description}
      status={product.status}
      idCate={product.idCate}
      user_id={product.user_id}
      created_at={product.created_at}
      updated_at={product.updated_at}
      onDelete = {ondelete}
     />
    );
   });
  }
  return results;
 }
}
const mapStateToProps = state => {
 return {
  products: state.products
 }
}
const mapDispatchToProps = (dispatch, props) => {
 return {
  fetchAllProducts: (products) => {
   dispatch(actFetchProducts(products));
  }
 }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(ProductPage);
