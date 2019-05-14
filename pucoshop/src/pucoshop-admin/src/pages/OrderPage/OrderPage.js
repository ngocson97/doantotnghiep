import React, { Component } from 'react';
import { connect } from 'react-redux';
import Orderlist from './../../component/Orderlist';
import { actFetchOrder } from '../../actions/index';
import callApi from './../../untils/apiCaller';
class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }
  componentDidMount() {
    callApi("order", "GET", null).then(res => {
      this.props.fetchallOrder(res.data);
    });
  }
  render() {
    var { orders } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">

            <div className="panel-heading">
              Danh sách đơn hàng
          </div>

            <div className="panel-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr style={{textAlign:"center"}}>
                      <th>STT</th>
                      <th>Số hóa đơn</th>
                      <th>Họ tên</th>
                      <th>Số điện thoại</th>
                      <th>Tổng tiền</th>
                      <th>Ngày đặt</th>
                      <th>Trạng thái</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.showOrders(orders)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showOrders(orders) {
    var results = null;
    console.log(orders);
    if (orders.length > 0) {
      results = orders.map((order, index) => {
        return (
          <Orderlist
            order={order}
            index={index}
          />
        );
      });
    }
    return results;
  }
}
const mapStateToProps = state => {
  return {
    orders: state.orders
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchallOrder: (orders) => {
      dispatch(actFetchOrder(orders));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(OrderPage);