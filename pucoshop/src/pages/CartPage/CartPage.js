import React, { Component } from 'react';
import Cartcontainer from './../../containers/CartContainer';
import callApi from '../../pucoshop-admin/src/untils/apiCaller';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { actAddOrder, actAddOrderdetail, actUpdateProduct } from '../../pucoshop-admin/src/actions/index';
import CurrencyFormat from 'react-currency-format';
const cookies = new Cookies();
class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txterrr: "",
      users: [],
      cart: [],
      id: "",
      fullname: "",
      address: "",
      email: "",
      phoneNumber: "",
    }
  }
  onChange = (e) => {

    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  onSave = (e) => {

    e.preventDefault();
    var { fullname, address, email, phoneNumber, cart } = this.state;
    var date = new Date();
    var id = date.getTime().toString();

    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.quantity < cart[i].quantity) {
          alert(" Sản phẩm  " + cart[i].product.productName + " chỉ còn " + cart[i].product.quantity + " sản phẩm không đủ số lượng đặt");
          break;
        }
        else if (fullname === "" || address === "" || email === "" || phoneNumber === "") {
          this.setState({
            txterrr: "Nhập đầy đủ thông tin để chúng tôi xác nhận được yêu cầu của bạn"
          });
        }
        else {
          var totalmoney = 0;
          for (var i = 0; i < cart.length; i++) {
            totalmoney =totalmoney+ cart[i].product.price * cart[i].quantity;
            var orderdetail = {
              idProduct: cart[i].product.idProduct,
              quantity: cart[i].quantity,
              totalmoney: cart[i].product.price * cart[i].quantity,
              idOrder: id
            }
            var producttt = {
              id: cart[i].product.idProduct,
              quantity: cart[i].product.quantity - cart[i].quantity
            }
            callApi('orderdetail', 'POST', orderdetail).then(res => {
              this.props.AddOrderdetail(res);
              console.log(res);
            });
            callApi(`productt/${cart[i].product.idProduct}`, 'PUT', producttt).then(res => {
              this.props.onUpdateCategory(res);
              console.log(res);
            });
          }
          console.log(totalmoney);
          var order = {
            idOrder: id,
            fullname: fullname,
            address: address,
            email: email,
            phoneNumber: phoneNumber,
            totalMoney: totalmoney,
            created_at: date,
            updated_at: date
          }
          var nd = {
            cart: cart,
            email: email,
            idOrder: id
          }

          console.log(order);
          callApi('order', 'POST', order).then(res => {
            this.props.AddOrder(res);
            console.log(res);
          });
          callApi('mail', 'POST', nd).then(res => {
            console.log(res);
          });
          alert("Đặt hàng thành công");
          localStorage.setItem('CART', JSON.stringify([]));
          window.location="/"
        }
      }
    }
    else {
      this.setState({
        txterrr: "Chưa có sản phẩm nào trong giỏ hàng"
      });
    }
  }
  componentDidMount() {

    this.setState({
      cart: JSON.parse(localStorage.getItem('CART'))
    });
    console.log(JSON.parse(localStorage.getItem('CART')));
  }
  render() {
    var { txterrr, fullname, address, email, phoneNumber, password, rPassword, cart } = this.state;
    console.log(cart)
    return (
      <div className="row">
        <div className="span9">
          {cart.length == 0 ? <h4>Chưa có sản phẩm nào trong giỏ hàng</h4> :
            <div className="well well-small">
              <hr className="soften" />
              <Cartcontainer />
              <br />
            
              <div class="span9" style={{ backgroundColor: 'none', marginLeft: -10 + 'px' }}>
                <div className="well">
                  <form className="form-horizontal">
                    <h3>Thông tin cá nhân</h3>
                    <div className="control-group">

                      <label className="control-label" for="inputFname">Họ Tên<sup>*</sup></label>
                      <div className="controls">

                        <input type="text" id="inputLname" onChange={this.onChange} name="fullname" value={fullname} placeholder="Họ và tên" />
                      </div>
                    </div>
                    <div className="control-group">
                      <label className="control-label" for="inputLname">Địa chỉ<sup>*</sup></label>
                      <div className="controls">
                        <input type="text" id="inputLname" name="address" onChange={this.onChange} value={address} placeholder="Địa chỉ" />
                      </div>
                    </div>
                    <div className="control-group">
                      <label className="control-label" for="inputEmail">Email <sup>*</sup></label>
                      <div className="controls">
                        <input type="email" name="email" value={email} onChange={this.onChange} placeholder="Email" />
                      </div>
                    </div>
                    <div className="control-group">

                      <label className="control-label" for="inputEmail">Số điện thoại<sup>*</sup></label>
                      <div className="controls">
                        <input type="number" name="phoneNumber" value={phoneNumber} onChange={this.onChange} placeholder="Số điện thoại" />
                      </div>
                    </div>

                    <div className="control-group">
                      <div className="controls">

                      </div>
                    </div>
                  </form>
                  <p>{txterrr}</p>
                </div>
              </div>
            
              <a href="products.html" className="shopBtn btn-large"><span className="icon-arrow-left"></span>Tiếp tục mua hàng</a>

              <a href="login.html" onClick={this.onSave} className="shopBtn btn-large pull-right">Đặt hàng<span className="icon-arrow-right"></span></a>

            </div>
          }
          
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    AddOrder: (order) => {
      dispatch(actAddOrder(order));
    },
    onUpdateCategory: (category) => {
      dispatch(actUpdateProduct(category));
    },
    AddOrderdetail: (orderdetail) => {
      dispatch(actAddOrderdetail(orderdetail));
    }
  }
}
export default connect(null, mapDispatchToProps)(CartPage);