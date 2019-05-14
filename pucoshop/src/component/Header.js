import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         money: 0,

      }
   }
   componentDidMount() {

      var cart = JSON.parse(localStorage.getItem('CART'));
      var total = 0;
      if (cart != null) {
         for (var i = 0; i < cart.length; i++) {
            total = total + cart[i].product.price * cart[i].quantity;
         }
         this.setState({
            count: cart.length,
            money: total
         })
      }
   }
   render() {
      var { count, money } = this.state;
      return (
         <div>
            <header id="header">
               <div className="row">
                  <div className="span4">
                     <h1>
                        <a className="logo" href="/"><span>Twitter Bootstrap ecommerce template</span>
                           <img src="assets/img/logo-bootstrap-shoping-cart.png" alt="bootstrap sexy shop" />
                        </a>
                     </h1>
                  </div>
                  <div className="span4">
                     <div className="">

                     </div>
                  </div>
                  <div className="span4 alignR">
                     <p><br /> <strong> Hỗ trợ (24/7) :  0352124225 </strong><br /><br /></p>
                     <a href="/gio-hang">
                        <span className="btn btn-mini">[{count}]<span className="icon-shopping-cart"></span></span>
                        <span className="btn btn-warning btn-mini">{money}VNĐ</span>
                     </a>

                  </div>
               </div>
            </header>
            <div className="navbar">
               <div className="navbar-inner">
                  <div className="container">
                     <a data-target=".nav-collapse" data-toggle="collapse" className="btn btn-navbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                     </a>
                     <div className="nav-collapse">
                        <ul className="nav">
                           <li className="active"><a href="/">Trang chủ</a></li>
                           <li className=""><a href="/san-pham">Sản Phẩm</a></li>
                           <li className=""><a href="/gioi-thieu">Giới Thiệu</a></li>
                           <li className=""><a href="/Lien-he">Liên hệ</a></li>
                           <li className=""><a href="/Tin-tuc">Tin Tức</a></li>
                        </ul>
                        <form action="#" className="navbar-search pull-left">
                           <input type="text" name="find" placeholder="Tìm kiếm" onChange={this.onChange}
                              className="search-query span2" />
                        </form>
                        <ul className="nav pull-right">
                           <li className="dropdown">
                              <a data-toggle="dropdown" className="dropdown-toggle" href="#"><span className="icon-lock"></span> Đăng nhập <b className="caret"></b></a>
                              <div className="dropdown-menu">
                                 <form className="form-horizontal loginFrm">
                                    <div className="control-group">
                                       <input type="text" className="span2" id="inputEmail" placeholder="Email" />
                                    </div>
                                    <div className="control-group">
                                       <input type="password" className="span2" id="inputPassword" placeholder="Password" />
                                    </div>
                                    <div className="control-group">
                                       <label className="checkbox">
                                          <input type="checkbox" /> Remember me
				                        	</label>
                                       <button type="submit" className="shopBtn btn-block">Sign in</button>
                                    </div>
                                 </form>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Header;
