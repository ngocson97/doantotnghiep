import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import callApi from '../pucoshop-admin/src/untils/apiCaller';
import { actFetchCategories } from '../pucoshop-admin/src/actions/index';
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
 return (
  <Route
   path={to}
   exact={activeOnlyWhenExact}
   children={({ match }) => {
    var href = "san-pham?id=" + to;
    return (
     <li>
      <a onClick={refresPage}>
       <span className="icon-chevron-right" style={{ textTransform: 'capitalize' }}>
        <Link to={href}>
         {label}
        </Link>
       </span>
      </a>
     </li>
    );
    function refresPage() {
     window.location.reload();
    }
   }}
  />
 );
}
class Menu extends Component {
 constructor(props) {
  super(props);
  this.state = {
   categories: []
  }
 }
 componentDidMount() {
  callApi("category", "GET", null).then(res => {
   this.props.fetchAllCategories(res.data);
  });

 }
 render() {
  var { categories } = this.props;
  console.log(categories);
  return (
   <div classNameName="App">
    <div>
     <div className="well well-small">
      <ul className="nav nav-list" >
       {this.showMenus(categories)}
       <li > &nbsp;</li>
      </ul>
     </div>
    </div>
   </div>
  );
 }
 showMenus = (categories) => {
  var result = null;
  if (categories.length > 0) {
   result = categories.map((category, index) => {
    return (
     <MenuLink
      label={category.cateName}
      to={category.idCate}
      activeOnlyWhenExact={category.exact}
     />
    );
   });
  }
  return result;
 }

}
const mapStateToProps = state => {
 return {
  categories: state.categories
 }
}
const mapDispatchToProps = (dispatch, props) => {
 return {
  fetchAllCategories: (categories) => {
   dispatch(actFetchCategories(categories));
  }
 }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(Menu);
