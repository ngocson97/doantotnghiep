import React, { Component } from 'react';
import callApi from './../../untils/apiCaller';
import { connect } from 'react-redux';
import { actFetchOrder, actFetchOrderDetail } from '../../actions/index';
import ListProductOrder from '../../component/ListProductOrder';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';


const InforCustomer = ({ fullname, email, phone, address, total, date }) => {
    localStorage.setItem("email", email);
    localStorage.setItem("Info", "Họ và tên :" + fullname + " ;Số điện thoại " + phone + " ; Địa chỉ : " + address)

    return (
        <div>
            <table style={{ marginLeft: 20 + 'px' }}>
                <tr>
                    <td><b>Họ và tên</b></td>
                    <td>&ensp;:&ensp;&ensp;&ensp;</td>
                    <td>{fullname}</td>
                </tr>
                <tr>
                    <td><b>Số điện thoại:</b>  </td>
                    <td>&ensp;:&ensp;</td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td><b>Email</b>  </td>
                    <td>&ensp;:&ensp;</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td><b>Địa chỉ</b></td>
                    <td>&ensp;:&ensp;</td>
                    <td>{address}</td>
                </tr>
                <tr>
                    <td><b>Ngày đặt</b></td>
                    <td>&ensp;:&ensp;</td>
                    <Moment format="hh:mm:ssA DD/MM/YY">
                        {date}
                    </Moment>

                </tr>
            </table>

        </div>


    );
}

class OrderDeatail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderdetails: [],
            order: [],
            idOrder: "",
            permis: "",
            total: "",
            status: "",
            quantityOld: "",


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
    sucess = (e) => {
        const { idOrder } = this.state;
        const date = new Date();
        console.log(localStorage.getItem("Info"));
        const nd = {
            email: localStorage.getItem("email"),
            Info: localStorage.getItem("Info"),
            idOrder: idOrder,
            status: 1,
            updated_at: date

        }
        callApi("mail", "POST", nd).then(res => {
            console.log(res);
        });
        callApi(`order/${idOrder}`, "PUT", nd).then(res => {
            console.log(res);
        });
        alert("Đơn hàng đã được xác nhận");
        window.location.reload();

    }
    printDocument = (e) => {
        var id = this.findGetParameter("ma-hoa-don");
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${id}.pdf`);
            })
            ;
    }
    Cancel = (e) => {
        var id = this.findGetParameter("ma-hoa-don");
        const date = new Date();
        const nd = {
            idOrder: id,
            status: 3,
            updated_at: date
        }
        if (confirm("Bạn có chắc chắn muốn hủy đơn hàng này?")) {// eslint-disable-line
            for (var i = 0; i < this.props.orderdetails.length; i++) {
                var quantity = this.props.orderdetails[i].quantity;
                var idPro = this.props.orderdetails[i].idProduct;
                alert(quantity);
                callApi(`product/${idPro}`, "GET", null).then(res => {
                    var producttt = {
                        id: idPro,
                        quantity: parseInt(res.data[0].quantity) + parseInt(quantity)
                    }
                    callApi(`productt/${idPro}`, 'PUT', producttt).then(ress => {
                        console.log(ress.data);
                    });
                });
            }
            callApi(`order/${id}`, "PUT", nd).then(res => {
                console.log(res);
            });

            alert("Đơn hàng đã hủy");
            window.location.reload();
        }


    }
    componentDidMount() {
        var id = this.findGetParameter("ma-hoa-don");
        this.setState({
            idOrder: id
        })
        callApi(`orderdetail/${id}`, "GET", null).then(res => {
            this.props.fetchOrderDetail(res.data);
            console.log(res.data);
        });
        callApi(`order/${id}`, "GET", null).then(res => {
            this.setState({
                order: res.data,
                total: res.data[0].totalMoney,
                status: res.data[0].status
            })

        });
        var ps = this.findGetParameter("permis");
        if (ps == "khachhang") {
            this.setState({
                permis: "khachhang"
            });
            const date = new Date();
            const nd = {
                email: localStorage.getItem("email"),
                Info: localStorage.getItem("Info"),
                idOrder: id,
                status: 2,
                updated_at: date
            }
            callApi(`order/${id}`, "PUT", nd).then(res => {
                console.log(res);
            });
            window.location = "/danh-sach-hoa-don";
        }
    }
    render() {
        var { orderdetails } = this.props;
        var { order, permis, idOrder, total, status } = this.state;
        console.log(order);
        return (
            <div className="row" >
                <div style={{ textAlign: "center" }}>
                    <h3 >Hóa đơn số {idOrder}</h3>
                </div>
                <div className="col-md-12" >

                    <div className="panel panel-default" id="divToPrint">
                        {this.showinfo(order)}
                        <div className="panel-heading">
                            Danh sách sản phẩm trong đơn hàng
                        </div>

                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr style={{ textAlign: "center" }}>
                                            <th>STT</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành Tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showProductOrder(orderdetails)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3>Tổng Tiền : <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} /></h3>
                    </div>
                    {permis == "khachhang" ? "" : status == 0 ? <button type="button" onClick={this.sucess} class="btn btn-success">Xác nhận đơn hàng</button> : status == 1 ? "Đã xác nhận" : status == 2 ? "Hoàn thành" : "Đơn hàng đã hủy"}
                    {permis == "khachhang" ? "" : status == 3 ? "" : <button type="button" style={{ float: "right" }} onClick={this.printDocument} class="btn btn-success">In hóa đơn</button>}
                    {status == 2 ? "" : status == 3 ? "" : <button type="button" style={{ float: "right", marginRight: 20 + 'px' }} onClick={this.Cancel} class="btn btn-success">Hủy đơn hàng</button>}
                </div>
            </div>
        );

    }
    showinfo(order) {
        var results = null;
        if (order.length > 0) {
            results = order.map((od, index) => {

                return (
                    <InforCustomer
                        fullname={od.customerFullName}
                        email={od.customerEmail}
                        phone={od.customerPhone}
                        address={od.customerAddress}
                        total={od.totalMoney}
                        date={od.created_at}
                    />
                );
            });
        }
        return results;
    }
    showProductOrder(orderdetails) {
        var results = null;
        console.log(orderdetails);
        if (orderdetails.length > 0) {
            results = orderdetails.map((orderdetail, index) => {
                return (
                    <ListProductOrder
                        orderdetail={orderdetail}
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
        orderdetails: state.orderdetails
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchallOrder: (orders) => {
            dispatch(actFetchOrder(orders));
        },
        fetchOrderDetail: (orderdetails) => {
            dispatch(actFetchOrderDetail(orderdetails));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(OrderDeatail);
