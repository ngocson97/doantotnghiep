import React, { Component } from 'react';
import callApi from './../pucoshop-admin/src/untils/apiCaller';
import CurrencyFormat from 'react-currency-format';
const ListProduct = ({ idProduct, productName, price, quantity, image, description, status, idCate,pricenew,neww}) => {
  
 var txt = quantity == 0 ? false : true;
 var img = "assets/img/" + image;
 var href = "/chi-tiet-san-pham?id=" + idProduct;

 return (
  <div className="row-fluid">
         <div className="span2">
           <img src={img} alt="" />
			</div>
           <div className="span6">
    <h5>{productName}</h5>
    <table>
     <tr>
      <td>
       Giá cũ : 
      </td>
           <td><CurrencyFormat value={pricenew} displayType={'text'} thousandSeparator={true} /></td>
     </tr>
     <tr>
      <td>
       Mới :
      </td>
      <td>{neww}</td>
     </tr>
     <tr>
      <td>
       Tình trạng :
      </td>
      <td>{quantity =0 ? "hết hàng" : "Còn hàng"}</td>
     </tr>
             </table>
           </div>
           <div className="span4 alignR">
             <form className="form-horizontal qtyFrm">
         <h3><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} /></h3>
               <br />
                   <div className="btn-group">
                    
      <a href={href}className="shopBtn">Xem chi tiết</a>
              </div>
				</form>
			</div>
		</div>
 );
}
class Productdt extends Component{ 
 constructor(props) {
  super(props);
  this.state = {
   products: [],
   cart: []
  }
 }
 componentDidMount() { 
  callApi(`productcate/${this.props.product.idCate}`, "GET", null).then(res => {
   this.setState({
    products: res.data
   });
   console.log(res.data);
   
  });
  this.setState({
   cart: JSON.parse(localStorage.getItem('CART'))
  });
 }

 render() {
  const {product} = this.props;
  const { products } = this.state;
 var txt = product.quantity == 0 ? false : true;
 var img = "assets/img/" + product.image;
 var href = "/productdetail?id=" + product.idProduct;

 return (
  <div className="well well-small">
   <div className="row-fluid">
    <div className="span5">
     <div id="myCarousel" className="carousel slide cntr">
      <div className="carousel-inner">
       <div className="item active">
        <a href="#"> <img src={img} className="iamgedetail" alt="" /></a>
       </div>
       <div className="item">
        <a href="#"> <img src={img} className="iamgedetail" alt="" /></a>
       </div>
       <div className="item">
        <a href="#"> <img src={img} className="iamgedetail" alt="" /></a>
       </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
     </div>
    </div>
    <div className="span7">
     <h3>{product.productName}</h3>
     <hr className="soft" />

     <form className="form-horizontal qtyFrm">
      <div className="control-group">
       <label className="control-label"><span>Giá</span></label>
       <div className="controls">
               <p><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} /> VNĐ</p>
       </div>
      </div>

      <div className="control-group">
       <label className="control-label"><span>Giá mới :</span></label>
       <div className="controls">
               <p><strike><CurrencyFormat value={product.pricenew} displayType={'text'} thousandSeparator={true} /> VNĐ </strike> </p> 
       </div>
      </div>
      <div className="control-group">
       <label className="control-label"><span>Mới:</span></label>
       <div className="controls">
      
         {product.new} %
     
       </div>
      </div>
      <div className="control-group">
       <label className="control-label"><span>Tình trạng :</span></label>
       <div className="controls">
      
         {product.quantity === 0 ? "Hết hàng" : "Còn hàng"}
     
       </div>
      </div>
           
      {product.quantity == 0 ? "" : <button className="shopBtn" type="button" onClick={() => this.onAddToCart(product)} ><span className=" icon-shopping-cart"  ></span>Thêm hàng vào giỏ</button>}
     </form>
    </div>
     </div>
     <ul id="productDetail" className="nav nav-tabs">
       <li className="active"><a href="#home" data-toggle="tab">Thông tin chi tiết sản phẩm</a></li>
       <li className=""><a href="#profile" data-toggle="tab">Sản phẩm liên quan</a></li>
     </ul>
     <div id="myTabContent" className="tab-content tabWrapper">
       <div className="tab-pane fade active in" id="home">
         <h4>Thông tin chi tiết sản phẩm</h4>
         <table className="table table-striped">
           <tbody>
             <tr className="techSpecRow"><td className="techSpecTD1">Tên sản phẩm</td><td className="techSpecTD2">{product.productName}</td></tr>
             <tr className="techSpecRow"><td className="techSpecTD1">Giá</td><td className="techSpecTD2">{product.price}</td></tr>
             <tr className="techSpecRow"><td className="techSpecTD1">Giá sản phẩm mới</td><td className="techSpecTD2">{product.pricenew}</td></tr>
             <tr className="techSpecRow"><td className="techSpecTD1">Tồn kho</td><td className="techSpecTD2">{product.quantity}</td></tr>
             <tr className="techSpecRow"><td className="techSpecTD1">Mới</td><td className="techSpecTD2">{product.neww} %</td></tr>
          
           </tbody>
         </table>
         <p>
           {product.description}
         </p>
       </div>
       <div className="tab-pane fade" id="profile">
     {this.showProducts(products)}
             <hr className="soft"/>
               
        </div>
     </div>
  </div>


 );
 }
 showProducts(products) {
  var txt;
  var results = null;
  if (products.length > 0) {
   results = products.map((product, index) => {

    return (
     <ListProduct
      key={index}
      idProduct={product.idProduct}
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
      index={index}
      neww={product.new}
      pricenew={product.pricenew}
     />
    );
   });
  }
  return results;
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

export default Productdt