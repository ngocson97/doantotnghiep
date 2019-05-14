import React, { Component } from 'react';
import callApi from './../pucoshop-admin/src/untils/apiCaller';
import CurrencyFormat from 'react-currency-format';

const ProductList=({id,image,name,price}) => {
 return (
  <li className="span4">
   <div className="thumbnail">
    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span>Chi tiết</a>
    <a href="product_details.html"><img src={"assets/img/"+image} style={{height : 200 +'px'}} alt="" /></a>
    <div className="caption cntr">
     <p>{name}</p>
             <p><strong><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} /> VNĐ</strong></p>
     <h4><a className="shopBtn" href={'/chi-tiet-san-pham?id='+id} title="add to cart">Chi tiết</a></h4>
     <div className="actionList">
  
     </div>
     <br className="clr" />
    </div>
   </div>
  </li>
 );
}
class MoreSellProduct extends Component {
 constructor(props) {
  super(props);
  this.state = {
   products :[]
  }
 }
 componentDidMount() {
  const month = (new Date()).getMonth();
  callApi("sanphambanchay", "GET", null).then(res => { 
   this.setState({
    products: res.data
   });
  });
 }
 render() {
 const { products } = this.state;
  return (
   
   <div className="row-fluid">
    <h3><a className="btn btn-mini pull-right" href="/san-pham" title="View more">Xem thêm<span className="icon-plus"></span></a> Sản phẩm bán chạy </h3>
    <ul className="thumbnails">
       {this.showProduct(products)}
    </ul>
   </div>
  );
 }
 showProduct(products) {
  var results = null;
  if (products.length > 0)
  {
   results = products.map((product, index) => {
    return (
     <ProductList
      id={product.idProduct}
      name={product.productName}
      price={product.price}
      image = {product.image}
     />
    );
   });
  }
  return results;
 }
}
export default MoreSellProduct