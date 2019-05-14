import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../untils/apiCaller';
import { actAddNewCategories, actUpdateCategory, actFetchCategories } from './../actions/index';
class AddnewCategories extends Component {
 constructor(props) {
  super(props);
  this.state = {
   idCate: "",
   category: [],
   txtCateName: ""
  };
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
  var { txtCateName, idCate } = this.state;
  var date = new Date();
  var useradd = {
   cateName: txtCateName,
   created_at: date,
   updated_at: date
  }
  alert(idCate);
  if (idCate === "") {
   callApi('category', 'POST', useradd).then(res => {
    this.props.onAddCategory(res);
    console.log(res);
   });
  }
  else {
   callApi(`category/${idCate}`, 'PUT', useradd).then(res => {
    this.props.onUpdateCategory(res);
    console.log(res);
   });
  }
  setTimeout(window.location.replace("/danh-muc-san-pham"), 2000);
 }
 findGetParameter(parameterName) {
  var result = null,
   tmp = [];
  window.location.search
   .substr(1)
   .split("&")
   .forEach(function (item) {
    tmp = item.split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
   });
  return result;
 }
 componentDidMount() {

  if (this.findGetParameter("edit") != null) {
   var id = this.findGetParameter("edit");
   callApi(`category/${id}`, 'GET', null).then(res => {
    this.setState({
     txtCateName: res.data[0].cateName
    });
  
   });
   this.setState({
    idCate: this.findGetParameter("edit")
   })
  }
 }
 render() {
  const { txtCateName, idCate } = this.state;
  return (
   <div className="col-md-12 col-sm-12 col-xs-12">
    <div className="panel panel-info">
     <div className="panel-heading">
      {idCate == "" ? "Thêm danh mục sản phẩm" : "Chỉnh sửa danh mục sản phẩm"}
     </div>
     <div className="panel-body">
      <form role="form">
       <div className="form-group">
        <label>Tên danh mục sản phẩm</label>
        <input className="form-control" name="txtCateName" value={txtCateName} onChange={this.onChange} type="text" />
       </div>
       <button type="submit" onClick={this.onSave} className="btn btn-info"> {idCate == "" ? "Thêm mới" : "Cập nhật"}</button>
      </form>
     </div>
    </div>
   </div>
  );
 }
}
const mapDispatchToProps = (dispatch, props) => {
 return {
  fetchAllCategories: (categories) => {
   dispatch(actFetchCategories(categories));
  },
  onUpdateCategory: (category) => {
   dispatch(actUpdateCategory(category));
  },
  onAddCategory: (category) => {
   dispatch(actAddNewCategories(category));
  }
 }
}
export default connect(null, mapDispatchToProps)(AddnewCategories);