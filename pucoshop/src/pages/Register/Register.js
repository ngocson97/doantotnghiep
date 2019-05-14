import React, { Component } from 'react';
import callApi from '../../pucoshop-admin/src/untils/apiCaller';
import { connect } from 'react-redux';
import { actAddUser, actFethAllUser } from '../../pucoshop-admin/src/actions/index';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txterrr: "",
      users: [],
      id: "",
      fullname: "",
      gender: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      rPassword: ""
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
    const { id, fullname, gender, userName, email, phoneNumber, password, rPassword, users } = this.state;
    var date = new Date();
    var useradd = {
      userName: userName,
      fullname: fullname,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      gender: parseInt(gender),
      permision: 0,
      created_at: date,
      updated_at: date
    }
    console.log(gender);
    if (userName === "" || password === "" || email === "" || phoneNumber === "") {
      this.setState({
        txterrr: "Không dược để trống thông tin"
      });

    }
    else if (password !== rPassword) {
      this.setState({
        txterrr: "kiểm tra lại mật khẩu"
      });
    }
    else {
      for (var i = 0; i < users.length; i++) {
        if (users[i].username === useradd.userName) {
          this.setState(
            {
              txterrr: "Tên đăng nhập đã tồn tại"
            }
          );
          break;
        }
        else {
          if (users[i].email === useradd.email) {
            this.setState(
              {
                txterrr: "Email đã tồn tại"
              }
            );
            break;
          }
          else {
            this.setState(
              {
                txterrr: ""
              }
            );
            callApi('users', 'POST', useradd).then(res => {
              this.props.AddUser(res);
              console.log(res);
            });

          }
        }

      }
    }

    // if (id === "") {
    //   callApi('users', 'POST', useradd).then(res => {
    //     this.props.AddUser(res);
    //     console.log(res);
    //   });
    // }
    // else {
    //   callApi(`users/${id}`, 'PUT', useradd).then(res => {
    //     this.props.onUpdateCategory(res);
    //     console.log(res);
    //   });
    // }
    //  setTimeout(window.location.replace("/"), 2000);
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
    callApi("users", "GET", null).then(res => {
      console.log(res.data);
      this.setState({
        users: res.data
      });
    });
  }
  render() {
    var { txterrr, fullname, gender, userName, email, phoneNumber, password, rPassword } = this.state;
    return (
      <div class="span9">
        <div className="well">
          <form className="form-horizontal">
            <h3>Thông tin cá nhân</h3>
            <div className="control-group">
              <p>{txterrr}</p>
              <label className="control-label" for="inputFname">Họ Tên<sup>*</sup></label>
              <div className="controls">

                <input type="text" id="inputLname" onChange={this.onChange} name="fullname" value={fullname} placeholder="Họ và tên" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Giới tính<sup>*</sup></label>
              <div className="controls">
                <select className="span1" name="days" onChange={this.onChange} name="gender" >
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" for="inputLname">Tên đăng nhập<sup>*</sup></label>
              <div className="controls">
                <input type="text" id="inputLname" name="userName" onChange={this.onChange} value={userName} placeholder="Tên đăng nhập" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" for="inputEmail">Email <sup>*</sup></label>
              <div className="controls">
                <input type="email" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" for="inputEmail">Số điện thoại<sup>*</sup></label>
              <div className="controls">
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.onChange} placeholder="Số điện thoại" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Mật khẩu<sup>*</sup></label>
              <div className="controls">
                <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Mật khẩu" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Nhập lại mật khẩu<sup>*</sup></label>
              <div className="controls">
                <input type="password" name="rPassword" value={rPassword} onChange={this.onChange} placeholder="Nhập lai mật khẩu" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Date of Birth <sup>*</sup></label>
              <div className="controls">
                <select className="span1" name="days">
                  <option value="">-</option>
                  <option value="1">1&nbsp;&nbsp;</option>
                  <option value="2">2&nbsp;&nbsp;</option>
                  <option value="3">3&nbsp;&nbsp;</option>
                  <option value="4">4&nbsp;&nbsp;</option>
                  <option value="5">5&nbsp;&nbsp;</option>
                  <option value="6">6&nbsp;&nbsp;</option>
                  <option value="7">7&nbsp;&nbsp;</option>
                </select>
                <select className="span1" name="days">
                  <option value="">-</option>
                  <option value="1">1&nbsp;&nbsp;</option>
                  <option value="2">2&nbsp;&nbsp;</option>
                  <option value="3">3&nbsp;&nbsp;</option>
                  <option value="4">4&nbsp;&nbsp;</option>
                  <option value="5">5&nbsp;&nbsp;</option>
                  <option value="6">6&nbsp;&nbsp;</option>
                  <option value="7">7&nbsp;&nbsp;</option>
                </select>
                <select className="span1" name="days">
                  <option value="">-</option>
                  <option value="1">1&nbsp;&nbsp;</option>
                  <option value="2">2&nbsp;&nbsp;</option>
                  <option value="3">3&nbsp;&nbsp;</option>
                  <option value="4">4&nbsp;&nbsp;</option>
                  <option value="5">5&nbsp;&nbsp;</option>
                  <option value="6">6&nbsp;&nbsp;</option>
                  <option value="7">7&nbsp;&nbsp;</option>
                </select>
              </div>
            </div>
            <div className="control-group">
              <div className="controls">
                <input type="submit" onClick={this.onSave} name="submitAccount" value="Đăng ký" className="exclusive shopBtn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  fullname = (a) => {
    return a;
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    AddUser: (user) => {
      dispatch(actAddUser(user));
    },
    FethUser: (users) => {
      dispatch(actFethAllUser(users));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Register);