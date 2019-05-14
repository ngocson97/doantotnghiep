import React, { Component } from 'react';
import NewsFeatured from '../../component/NewsFeatured';
import NewProduct from '../../component/NewProduct';
import MoreSellProduct from './../../component/MoreSellProduct';
class Homepage extends Component {
 
 render() {
  return (
   <div className="row">
    
    <div className="span9">
     <div className="well np">
     <div id="myCarousel" className="carousel slide homCar">
      <div className="carousel-inner">
       <div className="item">
        <img src="assets/img/bootstrap_free-ecommerce.png" alt="bootstrap ecommerce templates" />
        <div className="carousel-caption">
         <h4>Bạn không đủ tiền để mua sản phẩm mới</h4>
         <p><span>Hãy lựa chọn sản phẩm </span></p>
        </div>
       </div>
       <div className="item">
        <img src="assets/img/carousel1.png" alt="bootstrap ecommerce templates" />
        <div className="carousel-caption">
        
        </div>
       </div>
       <div className="item active">
        <img src="assets/img/carousel3.png" alt="bootstrap ecommerce templates" />
        <div className="carousel-caption">
          <h4>Bạn không đủ tiền để mua sản phẩm mới</h4>
          <p><span>Hãy lựa chọn sản phẩm </span></p>
        </div>
       </div>
       <div className="item">
        <img src="assets/img/bootstrap-templates.png" alt="bootstrap templates" />
        <div className="carousel-caption">
          <h4>Bạn không đủ tiền để mua sản phẩm mới</h4>
          <p><span>Hãy lựa chọn sản phẩm </span></p>
        </div>
       </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
     </div>
    </div>

    <div className="well well-small">


     <NewProduct />
     <MoreSellProduct />
    
    </div>
    
   </div>
      <NewsFeatured />
   </div>

  );
 }
}

export default Homepage;
