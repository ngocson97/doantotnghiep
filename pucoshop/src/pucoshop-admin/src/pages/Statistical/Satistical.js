import React, { Component } from 'react';
import callApi from './../../untils/apiCaller';
import CurrencyFormat from 'react-currency-format';
import currentWeekNumber from 'current-week-number';
const Dayy = ({ productname, tt, totall, totalmoney, price }) => {
 return (
  <tr>
   <td>{tt + 1}</td>
   <td>{productname}</td>
   <td>{totall}</td>
   <td><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} /></td>
   <td><CurrencyFormat value={totalmoney} displayType={'text'} thousandSeparator={true} /></td>
  </tr >
 );
}
class Satistical extends Component {
 constructor(props) {
  super(props);
  this.state = {
   totald: 0,
   totalm: 0,
   totalw: 0,
   datee: [],
   week: [],
   monthh: [],
   d: Math.floor(((new Date()) - (new Date((new Date()).getFullYear(), 0, 0))) / (1000 * 60 * 60 * 24)),
   m: (new Date).getMonth(),
   w: currentWeekNumber(new Date()) - 1
  }
 }
 onChange = (e) => {
  var target = e.target;
  var value = target.type === 'checkbox' ? target.checked : target.value;
  var d = Math.floor(((new Date(value)) - (new Date((new Date(value)).getFullYear(), 0, 0))) / (1000 * 60 * 60 * 24));
  var m = (new Date(value)).getMonth() + 1;
  var w = currentWeekNumber(value) - 1;
  console.log(w);
  callApi(`orderdetaild/${d}`, 'GET', null).then(res => {
   this.setState({
    datee: res.data
   });
  });

  callApi(`orderdetailw/${w}`, 'GET', null).then(res => {
   this.setState({
    week: res.data
   });
  });

  callApi(`orderdetailm/${m}`, 'GET', null).then(res => {

   this.setState({
    monthh: res.data,
   });
  });
  callApi(`totalw/${w}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totalw: res.data[0].tongtien
    });
   }
   else {
    this.setState({
     totalw: 0
    });
   }
  });
  callApi(`totalm/${m}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totalm: res.data[0].tongtien
    });
   }
   this.setState({
    totalm: 0
   });
  });

  callApi(`totald/${d}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totald: res.data[0].tongtien
    });
    console.log(res.data[0].tongtien);
   }
   else {
    this.setState({
     totald: 0
    });
   }
  });
  callApi(`totalw/${w}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totalw: res.data[0].tongtien
    });
   }
   else {
    this.setState({
     totalw: 0
    });
   }
  });
  callApi(`totalm/${m}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totalm: res.data[0].tongtien
    });
   }
   else {
    this.setState({
     totalm: 0
    });
   }
  });

 }
 componentDidMount() {
  const { d, m, w } = this.state;

  callApi(`totalw/${w}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totalw: res.data[0].tongtien
    });
   }

  });
  callApi(`totalm/${m}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totalm: res.data[0].tongtien
    });
   }
  });

  callApi(`totald/${d}`, 'GET', null).then(res => {
   if (res.data[0].tongtien != null) {
    this.setState({
     totald: res.data[0].tongtien
    });
   }
  });

  callApi(`orderdetailm/${m}`, 'GET', null).then(res => {
   this.setState({
    monthh: res.data
   });
  });
  callApi(`orderdetailw/${w}`, 'GET', null).then(res => {
   this.setState({
    week: res.data
   });
  });
  callApi(`orderdetaild/${d}`, 'GET', null).then(res => {
   this.setState({
    datee: res.data
   });
  });
 }
 render() {
  const { monthh, datee, week, totald, totalm, totalw } = this.state;
  return (
   <div>
    <div className="form-group">

     <input type="date" class="form-control" style={{ width: 200 + 'px' }} name="getdate" id="getdate" onChange={this.onChange} aria-describedby="helpId" placeholder="" />
    </div>
    <div className="row">
     <div className="col-md-12">
      <div class="panel panel-default">
       <div className="panel-heading">
        Thống kê bán theo ngày
                        </div>
       <div className="panel-body">
        <div className="table-responsive">
         <table className="table table-striped table-bordered table-hover">
          <thead>
           <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng bán</th>
            <th>Giá bán</th>
            <th>Thành tiền</th>
           </tr>
          </thead>
          <tbody>
           {this.showdayy(datee)}
          </tbody>
         </table>
         Tổng : <b><CurrencyFormat value={totald} displayType={'text'} thousandSeparator={true} /></b>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="row">
     <div className="col-md-12">
      <div class="panel panel-default">
       <div className="panel-heading">
        Thống kê bán theo tuần
                        </div>
       <div className="panel-body">
        <div className="table-responsive">
         <table className="table table-striped table-bordered table-hover">
          <thead>
           <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng bán</th>
            <th>Giá bán</th>
            <th>Thành tiền</th>
           </tr>
          </thead>
          <tbody>
           {this.showdayy(week)}

          </tbody>
         </table>
         Tổng : <b><CurrencyFormat value={totalw} displayType={'text'} thousandSeparator={true} /></b>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="row">
     <div className="col-md-12">
      <div class="panel panel-default">
       <div className="panel-heading">
        Thống kê bán theo tháng
        </div>
       <div className="panel-body">
        <div className="table-responsive">
         <table className="table table-striped table-bordered table-hover">
          <thead>
           <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng bán</th>
            <th>GIá bán</th>
            <th>Thành tiền</th>
           </tr>
          </thead>
          <tbody>
           {this.showdayy(monthh)}
          </tbody>
         </table>
         Tổng : <b><CurrencyFormat value={totalm} displayType={'text'} thousandSeparator={true} /></b>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
 }
 showdayy(dayy) {
  var results = null;


  if (dayy.length > 0) {


   results = dayy.map((d, index, total = 0) => {
    return (
     <Dayy
      tt={index}
      productname={d.productName}
      totall={d.soluongban}
      price={d.price}
      totalmoney={d.thanhtien}
     />
    );
   });
  }
  return results;
 }
}
export default Satistical;
