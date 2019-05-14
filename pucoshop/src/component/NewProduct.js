import React, { Component } from 'react';
import callApi from './../pucoshop-admin/src/untils/apiCaller';

const ProductList = ({ id, image, name, price }) => {
  return (
    <li className="span3">
      <div className="thumbnail">
        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span></a>
        <a href="#" className="tag"></a>
        <a href={"chi-tiet-san-pham?id=" + id}><img src={"assets/img/" + image} style={{ height: 180 + 'px',width: 145 + 'px'}} alt="bootstrap-ring" /></a>
        <div className="caption cntr">
          <p>{name}</p>
          <p><strong>{price}</strong></p>
          <h4><a className="shopBtn" href={'/chi-tiet-san-pham?id=' + id} title="add to cart">Chi tiết</a></h4>
          <div className="actionList">
          </div>
          <br className="clr" />
        </div>
      </div>
    </li>
  );
}
class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    const month = (new Date()).getMonth();
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
        <h3> Sản phẩm mới </h3>
        <hr className="soften" />
        <div className="row-fluid">
          <div id="newProductCar" className="carousel">
            <div className="carousel-inner">

              <ul className="thumbnails">
                {this.showProduct(products)}
              </ul>
            </div>
            <hr />
          </div>

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
export default NewProduct
