import React, { Component } from 'react';
import callApi from './../pucoshop-admin/src/untils/apiCaller';
const ProductItem = ({name,id,price,image}) => {
  return (
    <li className="span4">
      <div className="thumbnail">
        <a className="zoomTool" href={'/chi-tiet-san-pham?id='+id} title="add to cart"><span className="icon-search"></span> Chi tiết</a>
        <a href={'/chi-tiet-san-pham?id=' + id}><img src={"assets/img/"+image} style={{ height: 180 + 'px' }} alt="" /></a>
        <div className="caption">
          <h5>{name}</h5>
          <h4>
            <a className="defaultBtn" href={'/chi-tiet-san-pham?id=' + id} title="Click to view"><span className="icon-zoom-in"></span></a>
            <a className="shopBtn" href={'/chi-tiet-san-pham?id='+id} title="add to cart"><span className="icon-plus"></span></a>
            <span className="pull-right">{price}</span>
          </h4>
        </div>
      </div>
    </li>
  );
}
class NewsFeatured extends Component {
  constructor(props) {
    super(props);
    
      this.state = {
        products : []
      }
    
  }
  componentDidMount() {
    callApi('productrandom', "GET", null).then(res => { 
      this.setState({
        products: res.data
      })
    });
  }
  render() {
  
  return (

     <div class="span9" >
       <div className="well well-small">
         <h3><a className="btn btn-mini pull-right" href="products.html" title="View more">VIew More<span className="icon-plus"></span></a> Sản phẩm nổi bật </h3>
         <hr className="soften" />
         <div className="row-fluid">
           <ul className="thumbnails">
             {this.showProduct(this.state.products)}
           </ul>
         </div>
       </div>
    </div >

  );
  }
  showProduct(products) {
    var results = null;
    if (products.length > 0) {
      results = products.map((product,index) => {
        return (
          <ProductItem
            name={product.productName}
            price={product.price}
            id={product.idProduct}
            image = {product.image}
          />
        );
      });
    }
    return results;
  }
}
export default NewsFeatured