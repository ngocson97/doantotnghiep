import React, { Component } from 'react';
import Menu from './Menu';
import callApi from './../pucoshop-admin/src/untils/apiCaller';
import CurrencyFormat from 'react-currency-format';
const ProductList = ({ id, image, name, price }) => {
 return (
  <li>
       <div class="thumbnail">
        <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
    <img src={"assets/img/"+image} alt="bootstrap ecommerce templates" />
        <div class="caption">
         <h4><a class="defaultBtn" href={"/chi-tiet-san-pham?id=" + id}>Chi tiết</a> <span class="pull-right"><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} /></span></h4>
        </div>
   </div>
   <br/>      </li>
 );
}
class LeftSection extends Component {
 constructor(props) {
  super(props);
  this.state = {
   products: []
  }
 }
 componentDidMount() {
  callApi("newProduct", "GET", null).then(res => {
   this.setState({
    products: res.data
   });
  });
 }
 render() {
  const { products } = this.state;
  return (
   <div>
    <div id="sidebar" class="span3">
     <Menu />
     <ul class="nav nav-list promowrapper">
      {this.showProduct(products)}
     </ul>
    </div>
   </div>

  );
 }
showProduct(products) {
 var results = null;
 if (products.length > 0) {
  results = products.map((product, index) => {
   return (
    <ProductList
     id={product.idProduct}
     name={product.productName}
     price={product.price}
     image={product.image}
    />
   );
  });
 }
 return results;
}
}

export default LeftSection;
