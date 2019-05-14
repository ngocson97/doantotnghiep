import React, { Component } from 'react';
class Header extends Component {
 logout = (e) => {
  localStorage.setItem("Userlogin", "");
  window.location.reload();
 }
 render() {
  return (
   <div>
    <nav className="navbar navbar-default navbar-cls-top " role="navigation" >
     <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
       <span className="sr-only">Toggle navigation</span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="index.html">ThuanPhat</a>
     </div>
     <div className="header-right">
      <a className="btn btn-danger" onClick={this.logout} title="Logout"><i className="fa fa-exclamation-circle fa-2x"></i></a>
     </div>
    </nav>
   </div>
  );
 }
}

export default Header;
