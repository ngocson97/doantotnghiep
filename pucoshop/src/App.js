import React, { Component } from 'react';
import Header from './component/Header';
import LeftSection from './component/LeftSection';
import routes from './routes';
import Footer from './component/Footer';
import { connect } from 'react-redux';
import Product from './component/Product';
import { actFetchProducts, actAddToCart } from './pucoshop-admin/src/actions/index';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import callApi from './pucoshop-admin/src/untils/apiCaller';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      products: []
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
    
    
    if (this.findGetParameter("find") != null) {
      this.setState({
        find: this.findGetParameter("find")
      });
      callApi(`find/${this.findGetParameter("find")}`, "GET", null).then(res => {
        console.log(res)
        this.setState({
          products: res.data
        });
      });
    }

  }
  render() {
    const { find, products } = this.state
    return (
      <Router>
        <div className="App" >
          <div>
            <Header />

            <div className="row">
              <LeftSection />
              {find == "" ? this.showContent(routes) : <div className="span9" >
                <div className="well well-small">
                  <div className="row-fluid">
                    <ul className="thumbnails">{this.showProducts(products)} </ul>
                  </div>
                </div>
              </div>}
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return <Switch>{result}</Switch>
  }
  showProducts(products) {
    var txt;
    var results = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      results = products.map((product, index) => {
        return (
          <Product key={index}
            product={product}
            onAddToCart={onAddToCart}
          />
        );
      });
    }
    return results;
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    fetchAllProducts: (products) => {
      dispatch(actFetchProducts(products));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(App);
