import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../untils/apiCaller';
import { actFetchCategories } from '../../actions/index';
import AddnewCategories from '../../component/AddnewCategories';
import Categories from './../../component/Categories';



class CategoriesPage extends Component {
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
 onDelete = (idCate) => {
  var { categories } = this.props;
  callApi(`category/${idCate}`, "DELETE", idCate).then(res => {
    var index = this.findIndex(categories, idCate);
    if (index !== -1) {
     categories.splice(index, 1);
     this.setState({
      categories: categories
     });
    }
   
  });
 }
 findIndex = (categories, idCate) => {
  var results = -1;
  categories.forEach((category, index) => {
   if (category.id === idCate) {
    results = index;
   }
  });
  return results;
 }
 render() {
  var { categories } = this.props;
  return (

   <div>
    <AddnewCategories  />
    <div className="col-md-12">

     <div className="panel panel-default">

      <div className="panel-heading">
       Danh sách sản phẩm
       </div>
      <div className="panel-body">
       <div className="table-responsive">
        <table className="table">
         <thead>
          <tr>
           <th>STT</th>
           <th>Tên danh mục</th>
           <th>Cập nhật lúc</th>
           <th>Thời gian thêm</th>
           <th></th>
          </tr>
         </thead>
         <tbody>
          {this.ShowCategies(categories)}
         </tbody>
        </table>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
 }
 ShowCategies(categories) {
  var results = null;
  console.log(categories);
  if (categories.length > 0) {
   results = categories.map((category, index) => {
    return (
     <Categories
      category={category}
      onDelete={this.onDelete}
     />
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
export default connect(mapStateToProps, mapDispatchToProps, null)(CategoriesPage);
