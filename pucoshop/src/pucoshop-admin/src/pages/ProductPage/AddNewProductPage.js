import React, { Component } from 'react';
import './Adnewproduct.css';
import { actFetchProducts, actAddProduct, actUpdateProduct, actFetchCategories } from '../../actions/index';
import callApi from './../../untils/apiCaller';
import { connect } from 'react-redux';
const CateName = ({ idcate, cateName }) => {
  return (
    <option value={idcate}>{cateName}</option>
  );
}
class AddNewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idProduct: "",
      image: "",
      productName: "",
      quantity: 0,
      price: 0,
      idCate: "",
      keyword: "",
      desscription: "",
      idcate: "",
      neww: "",
      pricenew: ""

    }
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
    var { idProduct, image, productName, quantity, price, keyword, idcate, desscription, neww, pricenew } = this.state;
    console.log(image);
    var img = image.split('\\');
    console.log(img[2]);
    var date = new Date();
    console.log(idcate);
    var product = {
      productName: productName,
      price: price,
      quantity: quantity,
      image: img[2],
      keywords: keyword,
      description: desscription,
      status: 1,
      idCate: parseInt(idcate),
      created_at: date,
      updated_at: date,
      neww: neww,
      pricenew: pricenew
    }
    if (idProduct === "") {
      callApi('product', 'POST', product).then(res => {
        this.props.onAddProduct(res);
        console.log(res);
      });
      window.location = "/danh-sach-san-pham";
    }
    else {
      callApi(`product/${idProduct}`, 'PUT', product).then(res => {
        this.props.onUpdateProduct(res);
        console.log(res);
      });
      window.location = "/danh-sach-san-pham";
    }
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
    callApi("category", "GET", null).then(res => {
      this.props.fetchAllCategories(res.data);
      console.log(res.data);
    });
    if (this.findGetParameter("edit") != null) {
      var id = this.findGetParameter("edit");
      callApi(`product/${id}`, 'GET', null).then(res => {
        this.setState({
          productName: res.data[0].productName,
          price: res.data[0].price,
          pricenew: res.data[0].pricenew,
          neww: res.data[0].new,
          quantity: res.data[0].quantity,
          keyword: res.data[0].keywords,
          description: res.data[0].description
        });

      });
      this.setState({
        idProduct: this.findGetParameter("edit")
      })
    }
  }
  render() {
    var { categories } = this.props;
    console.log(categories);
    var { idProduct, image, productName, quantity, price, keyword, desscription, idcate, neww, pricenew } = this.state;
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-info">
            <div className="panel-heading">
              {idProduct != "" ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}
            </div>
            <div className="panel-body">
              <form role="form">
                <div className="form-group">
                  <label className="control-label col-lg-4">Hình ảnh sản phẩm</label>
                  <div className="">
                    <div className="fileupload fileupload-new" data-provides="fileupload">
                      <div className="fileupload-new thumbnail"><img src="assets/img/demoUpload.jpg" alt="" /></div>
                      <div id="btim" className="fileupload-preview fileupload-exists thumbnail"></div>
                      <div>

                        <span className="btn btn-file btn-primary"><span className="fileupload-new">Chọn hình ảnh</span><span className="fileupload-exists">Thay đổi</span><input type="file" name="image" onChange={this.onChange} value={image} /></span>
                        <a href="#" className="btn btn-danger fileupload-exists" data-dismiss="fileupload">Xóa</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Tên sản phẩm</label>
                  <input className="form-control" name="productName" onChange={this.onChange} type="text" value={productName} />
                </div>
                <div className="form-group">
                  <label>Giá</label>
                  <input className="form-control" name="price" onChange={this.onChange} type="number" value={price} />
                </div>
                <div className="form-group">
                  <label>Giá mới</label>
                  <input className="form-control" name="pricenew" onChange={this.onChange} type="number" value={pricenew} />
                </div>
                <div className="form-group">
                  <label>Mới</label>
                  <input className="form-control" name="neww" onChange={this.onChange} type="number" value={neww} />
                </div>
                <div className="form-group">
                  <label>Số lượng</label>
                  <input className="form-control" name="quantity" type="number" onChange={this.onChange} value={quantity} />
                </div>

                <div class="form-group">
                  <label>Danh mục sản phẩm</label>
                  <select name="idcate" onChange={this.onChange} class="form-control">
                    <option>---Chọn danh mục----</option>
                    {this.showcate(categories)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Từ khóa</label>
                  <input className="form-control" name="keyword" onChange={this.onChange} value={keyword} type="text" />
                </div>
                <div className="form-group">
                  <label>Mô tả</label>
                  <textarea onChange={this.onChange} name="desscription" value={desscription} className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" onClick={this.onSave} className="btn btn-info">{idProduct != "" ? "Chỉnh sửa" : "Thêm mới"}</button>
              </form>
            </div>
          </div>
        </div>
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
    },
    fetchAllProduct: (products) => {
      dispatch(actFetchProducts(products));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProduct(product));
    },
    onAddProduct: (product) => {
      dispatch(actAddProduct(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(AddNewProductPage);