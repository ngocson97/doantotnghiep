import React, { Component } from 'react';
import Header from './component/Header';
import Menu from './component/Menu';
import Cusorder from './component/Cusorder';
import routes from './routes';
import Login from './component/login';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permis: "",
      user : ""
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
   
    var ps = this.findGetParameter("permis");
    if (ps == "khachhang")
    {
      this.setState({
        permis: "khachhang",
        user: localStorage.getItem("Userlogin")
      });
    }
    this.setState({
      user: localStorage.getItem("Userlogin")
    });
    console.log(localStorage.getItem("Userlogin"));
  }
  render() {
    const { permis,user } = this.state;
    console.log(user);
    return (
      <Router>
        <div id="wrapper">
          {permis == "khachhang" ? < Cusorder /> : user == "" ? <Login /> : <Header /> }
          {permis == "khachhang" ? "" :  user=="" ? "" : <Menu />}
          {permis == "khachhang" ? "" : user =="" ? "" :
            <div id="page-wrapper">
              <div id="page-inner">
                {this.showContent(routes)}
              </div>
            </div>
          }
        </div>
        </Router>
    );
  }
  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />);
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
