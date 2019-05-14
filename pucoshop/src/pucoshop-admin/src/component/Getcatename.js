import React, { Component } from 'react';
import callApi from './../untils/apiCaller';
import { connect } from 'react-redux';
import { actFetchCategories } from './../actions/index';


class Getcatename extends Component {
 constructor(props) {
  super(props);
  this.state = {
   categories: []
  }
 }
 componentDidMount() {
  callApi("category", "GET", null).then(res => {
   this.props.fetchAllCategories(res.data);
   console.log(res.data);
  });
 }
 render() {
  var { categories } = this.props
  return (
  <select>
    {this.showcate(categories)}
   </select>
  );
}
showcate =(categories) =>{
 var results = null;
 if (categories.length > 0) {
  results = categories.map((category, index) => {
   return (
    
    <option value={category.idCate}>{category.cateName}</option>
   );
  });
 }
 return results;
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
export default connect(mapStateToProps, mapDispatchToProps, null)(Getcatename);