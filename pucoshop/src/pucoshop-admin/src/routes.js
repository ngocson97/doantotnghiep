import React from 'react';
import HomePage from './pages/Hompage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductPage from './pages/ProductPage/ProductPage';
import AddNewProductPage from './pages/ProductPage/AddNewProductPage';
import AddQuantityProduct from './pages/ProductPage/AddQuantityProduct';
import CategoriesPage from './pages/CategoryPage/CategoriesPage';
import OrderPage from './pages/OrderPage/OrderPage';
import Orderdetail from './pages/Orderdetail/OrderDeatail';
import Satistical from './pages/Statistical/Satistical';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />

    },
    {
        path: '/danh-sach-san-pham',
        exact: true,
        main: () => <ProductPage />
    },
    {
        path: '/danh-muc-san-pham',
        exact: true,
        main: () => <CategoriesPage />
    },
    {
        path: '/cap-nhat-san-pham',
        exact: true,
        main: () => <AddNewProductPage />
    },
    {
        path: '/danh-sach-hoa-don',
        exact: true,
        main: () => <OrderPage />
    },
    {
        path: '/them-so-luong-san-pham',
        exact: true,
        main: () => <AddQuantityProduct />
    },
    {
        path: '/chi-tiet-hoa-don',
        exact: true,
        main: () => <Orderdetail />
    },
    
    {
        path: '/thong-ke',
        exact: true,
        main: () => <Satistical />
    },
    {
        path: '/',
        exact: false,
        main: () => <NotFoundPage />
    },

];
export default routes;