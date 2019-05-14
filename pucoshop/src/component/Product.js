import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }
  componentDidMount() {
    this.setState({
      cart: JSON.parse(localStorage.getItem('CART'))
    });
  }
  render() {
    var { product } = this.props;
    var img = "assets/img/" + product.image;
    var href = "/chi-tiet-san-pham?id=" + product.idProduct;
    return (
      <div>
        <li className="span4">
          <div className="thumbnail">
            <a href={href} className="overlay"></a>
            <a className="zoomTool" href={href} title="add to cart"><span className="icon-search"></span>Xem chi tiết</a>
            <a href={href}><img className="imagedd" src={img} alt="" /></a>
            <div className="caption cntr">
              <p style={{ height: 40 + 'px' }}><b>{product.productName}</b></p>
              <p><strong><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} /></strong></p>
              <p><strike><CurrencyFormat value={product.pricenew} displayType={'text'} thousandSeparator={true} /></strike></p>
              <button className="shopBtn" title="add to cart" disabled={product.quantity <= 0 ? true : false} onClick={() => this.onAddToCart(product)}> {product.quantity <= 0 ? "Hết hàng" : "Thêm vào giỏ hàng"}</button>
              {/* <div className="actionList">
                <a className="pull-left" href="#">Add to Wish List </a>
                <a className="pull-left" href="#"> Add to Compare </a>
              </div> */}
              <br className="clr" />
            </div>
          </div>
        </li>
      </div>
    );
  }

  onAddToCart = (product) => {
    const { cart } = this.state;
    console.log(cart);
    if (cart.length>0) {
      for (var i = 0; i < cart.length; i++) {
        if (product.idProduct === cart[i].product.idProduct) {
          if (product.quantity <= cart[i].quantity) {
            alert(" Sản phẩm" + cart[i].product.productName + " chỉ còn " + cart[i].product.quantity + " sản phẩm, không thể mua thêm@@@");
            break;
          }
        }
        else {
          console.log(product);
          this.props.onAddToCart(product);
          window.location.reload();
        }
      }
    }
    else {
      console.log(product);
      this.props.onAddToCart(product);
      window.location.reload();
    }
  }
}

export default Product;