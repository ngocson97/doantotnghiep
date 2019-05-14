import React, { Component } from 'react';
import callApi from './../../untils/apiCaller';
const CateName = ({ idcate, cateName }) => {
 return (
  <option value={idcate}>{cateName}</option>
 );
}
const Productname = ({ id, Name }) => {
 return (
  <option value={id}>{Name}</option>
 );
}
class AddQuantityProduct extends Component {
 constructor(props) {
  super(props);
  this.state = {
   categories: [],
   products: [],
   quantity: 0,
   quantityOld:"",
   idproduct: "",
   Namepr: ""
  }
 }
 getProduct = (e) => {
  callApi(`productcate/${e.target.value}`, "GET", null).then(res => {
   this.setState({
    products: res.data
   });
   console.log(res.data);
  });
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
  
  callApi(`product/${this.state.idproduct}`, "GET", null).then(res => {
   this.setState({
    quantityOld: res.data[0].quantity,
    Namepr : res.data[0].productName
   });
   if (this.state.quantity > 0)
   {
    var quantityNew = parseInt(this.state.quantity) + parseInt(this.state.quantityOld);
    var producttt = {
     id: this.state.idproduct,
     quantity: quantityNew
    }
    if (confirm('Bạn chắc chắn có thêm ' + this.state.quantity +" sản phẩm "+ this.state.Namepr +' không ?')) {// eslint-disable-line
     
  
     callApi(`productt/${this.state.idproduct}`, 'PUT', producttt).then(res => {
      console.log(res);
     });
     alert("Đã thêm " + this.state.quantity + " " +this.state.Namepr);
     window.location.reload();
    }
    }
  });
 

 }
 componentDidMount() {
  callApi("category", "GET", null).then(res => {
   this.setState({
    categories: res.data
   });
   console.log(res.data);
  });
 }
 render() {
  const { categories,products} = this.state;
  return (
   <div>
    <form>
    <div class="form-group">
     <label>Danh mục sản phẩm</label>
     <select name="idcate" onChange={this.getProduct} class="form-control">
      <option>---Chọn danh mục----</option>
      {this.showcate(categories)}
     </select>
     </div>
     {products.length == 0 ? "" :
      <div class="form-group">
       <label>Sản phẩm</label>
       <select name="idproduct" onChange={this.onChange} class="form-control">
        <option>---Chọn sản phẩm----</option>
        {this.showProduct(products)}
       </select>
      </div>
     }
    <div className="form-group">
     <label>Số lượng</label>
     <input className="form-control" name="quantity" onChange={this.onChange}  type="number" />
     </div>
     <button type="submit" onClick={this.onSave} className="btn btn-info">Thêm</button>
    </form>
   </div>
  );
 }
 showcate(categories) {

  var results = null;
  if (categories.length > 0) {
   results = categories.map((category, index) => {
    return (
     <CateName
      key={index}
      idcate={category.idCate}
      cateName={category.cateName}
     />
    );
   });
  }
  return results;
 }
 showProduct(products) {

  var results = null;
  if (products.length > 0) {
   results = products.map((product, index) => {
    return (
     <Productname
      key={index}
      id={product.idProduct}
      Name={product.productName}
     />
    );
   });
  }
  return results;
 }
}
export default AddQuantityProduct;