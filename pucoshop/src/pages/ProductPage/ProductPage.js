import React, { Component } from 'react';
import { connect } from 'react-redux';
import './productpage.css';
import callApi from './../../pucoshop-admin/src/untils/apiCaller';
import Product from './../../component/Product';
import { actFetchProducts, actAddToCart } from '../../pucoshop-admin/src/actions/index';
class ProductPage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   products: []
  }
 }
 findGetParameter(parameterName) {
  var result = null,
   tmp = [];
  window.location.search
   .substr(1)
   .split("&")
   .forEach(function (item) {
    tmp = item.split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
   });
  return result;
 }
 componentDidMount() {

  var request = "product/";
  if (this.findGetParameter("id") > 0) {
   request = "productcate/" + this.findGetParameter("id");
  }
  console.log(request);
  callApi(request, "GET", null).then(res => {
   console.log(res)
   this.props.fetchAllProducts(res.data);

  });
 }

 render() {
  var { products } = this.props;
  return (
   <div className="span9" >
    <div className="well well-small">
     <div className="row-fluid">
      <ul className="thumbnails">
       {this.showProducts(products)}
      </ul>
     </div>
    </div>
   </div>
  );
 }
 closeContent(products) {
  var result = "";
  for (var i = 1; i <= products.length; i++) {
   if (i % 3 == 0) {
    result = '</ul ></div><div className="row-fluid"><ul className="thumbnails">';
   }
  }
  return result;
 }

 showProducts(products) {
  var txt;
  
  var results = null;
  var { onAddToCart } = this.props;
  if (products.length > 0) {
   results = products.map((product, index) => {
    return (
     <Product key={index}
      product={product}
      onAddToCart={onAddToCart}
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
  onAddToCart: (product) => {
   dispatch(actAddToCart(product, 1));
  },
  fetchAllProducts: (products) => {
   dispatch(actFetchProducts(products));
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ProductPage);