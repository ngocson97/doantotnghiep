import React, { Component } from 'react';

class Menu extends Component {
 render() {
  return (
   <div classNameName="App" >
    <div>

     <nav className="navbar-default navbar-side" role="navigation">
      <div className="sidebar-collapse">
       <ul className="nav" id="main-menu">

        <li>
         <a href="#"><i className="fa fa-desktop "></i>Sản phẩm<span className="fa arrow"></span></a>
         <ul className="nav nav-second-level">
          <li>
           <a href="/danh-sach-san-pham"><i className="fa fa-toggle-on"></i>Danh sách sản phẩm</a>
          </li>
          <li>
           <a href="/cap-nhat-san-pham"><i className="fa fa-bell "></i>Cập nhật sản phẩm</a>
          </li>
          <li>
           <a href="/them-so-luong-san-pham"><i className="fa fa-bell "></i>Thêm số lượng sản phẩm</a>
          </li>

         </ul>
        </li>
        <li>
         <a href="/danh-sach-hoa-don"><i className="fa fa-flash "></i>Danh sách hóa đơn<span className="fa arrow"></span></a>

        </li>
        <li>
         <a href="/danh-muc-san-pham"><i className="fa fa-flash "></i>Danh mục sản phẩm</a>

        </li>
        {/* <li>
         <a href="#"><i className="fa fa-bicycle "></i>Bài viết<span className="fa arrow"></span></a>
         <ul className="nav nav-second-level">

          <li>
           <a href="form.html"><i className="fa fa-desktop "></i>Danh sách các bài viết</a>
          </li>
          <li>
           <a href="form-advance.html"><i className="fa fa-code "></i>Thêm bài viết mới</a>
          </li>
         </ul>
        </li> */}

        <li>
         <a href="/thong-ke"><i className="fa fa-square-o "></i>Thống kê</a>
        </li>
       </ul>
      </div>
     </nav>
    </div>
   </div>
  );
 }
}

export default Menu;
