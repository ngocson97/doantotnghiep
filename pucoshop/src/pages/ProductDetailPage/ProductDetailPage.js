import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Productdetail.css'
import callApi from './../../pucoshop-admin/src/untils/apiCaller';
import { actFetchProducts, actAddToCart } from '../../pucoshop-admin/src/actions/index';
import Productdt from './../../component/Productdt';

class ProductDetailPage extends Component {
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
   request = "product/" + this.findGetParameter("id");
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
    <ul className="breadcrumb">
     <li><a href="index.html">Home</a> <span className="divider">/</span></li>
     <li><a href="products.html">Items</a> <span className="divider">/</span></li>
     <li className="active">Preview</li>
    </ul>
    {this.showProducts(products)}
   </div>
  );
 }
 showProducts(products) {
  var txt;
   var results = null;
   var { onAddToCart } = this.props;
  if (products.length > 0) {
   results = products.map((product, index) => {

    return (
      <Productdt
        onAddToCart={onAddToCart}
        product = {product}
      key={index}
      
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

export default connect(mapStateToProps, mapDispatchToProps, null)(ProductDetailPage);