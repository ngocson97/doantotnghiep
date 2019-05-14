import React from 'react';
import HomePage from './pages/HomePage/Homepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import CartPage from './pages/CartPage/CartPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import About from './component/About';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/san-pham/",
        exact: true,
        main: () => <ProductPage />
    },
    {
        path: "/gio-hang",
        exact: true,
        main: () => <CartPage />
    },
    {
        path: "/dang-nhap",
        exact: true,
        main: () => <Login />
    },
    {
        path: "/chi-tiet-san-pham",
        exact: true,
        main: () => <ProductDetailPage />
    },
    {
        path: "/dang-ky",
        exact: true,
        main: () => <Register />
    },
    {
        path: "/dat-hang",
        exact: true,
        main: () => <CheckoutPage />
    },
    {
        path: "/gioi-thieu",
        exact: true,
        main: () => <About />
    },
    {
        path: '/',
        exact: false,
        main: () => <NotFoundPage />
    }

];
export default routes;