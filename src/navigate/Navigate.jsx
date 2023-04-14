import React from "react";
import {
  Admin,
  AllProducts,
  CategoryParams,
  ChangePassword,
  ChangeProfile,
  Chart,
  Contact,
  Favorite,
  Flow,
  FlowDetail,
  Home,
  Login,
  Market,
  Order,
  OrderStatus,
  PageNotFound,
  Payments,
  ProductDetail,
  Profile,
  Register,
  Settings,
  Support,
} from "./index";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const adminRoutes = [
  { id: 1, template: <Home />, link: "/" },
  { id: 2, template: <Contact />, link: "/contact" },
  { id: 3, template: <Favorite />, link: "/favorite" },
  { id: 4, template: <Settings />, link: "/settings" },
  { id: 5, template: <Profile />, link: "/profile" },
  { id: 6, template: <CategoryParams />, link: "/category/:cat_params" },
  { id: 7, template: <ProductDetail />, link: "/product/:product_detail" },
  { id: 8, template: <Login />, link: "/login" },
  { id: 9, template: <Register />, link: "/registration" },
  { id: 10, template: <Support />, link: "/support" },
  { id: 11, template: <ChangeProfile />, link: "/profile/edit-profile/:image" },
  { id: 12, template: <Favorite />, link: "/profile/wishlist" },
  {id: 13, template: <ProductDetail />, link: "/profile/wishlist/:product_detail" },
  { id: 14, template: <ChangePassword />, link: "/profile/change-password" },
  { id: 15, template: <Order />, link: "/profile/orders" },
  { id: 16, template: <AllProducts />, link: "/category" },
  { id: 15, template: <PageNotFound />, link: "*" },
  { id: 16, template: <Admin />, link: "/dashboard" },
  { id: 17, template: <Market />, link: "/dashboard/market" },
  { id: 18, template: <Chart />, link: "/dashboard/chart" },
  { id: 19, template: <Flow />, link: "/dashboard/oqim" },
  {id: 20, template: <Payments />, link: "/dashboard/pay"},
  {id: 21, template: <FlowDetail />, link: "/dashboard/oqim/:product_id/:stream_id"},
  {id: 22, template: <OrderStatus />, link: "/order-status"},
];

const userRoutes = [
  { id: 1, template: <Home />, link: "/" },
  { id: 2, template: <Contact />, link: "/contact" },
  { id: 3, template: <Favorite />, link: "/favorite" },
  { id: 4, template: <Settings />, link: "/settings" },
  { id: 5, template: <Profile />, link: "/profile" },
  { id: 6, template: <CategoryParams />, link: "/category/:cat_params" },
  { id: 7, template: <ProductDetail />, link: "/product/:product_detail" },
  { id: 8, template: <Login />, link: "/login" },
  { id: 9, template: <Register />, link: "/registration" },
  { id: 10, template: <Support />, link: "/support" },
  { id: 11, template: <ChangeProfile />, link: "/profile/edit-profile/:image" },
  { id: 12, template: <Favorite />, link: "/profile/wishlist" },
  {id: 13, template: <ProductDetail />, link: "/profile/wishlist/:product_detail",},
  { id: 14, template: <ChangePassword />, link: "/profile/change-password" },
  { id: 15, template: <Order />, link: "/profile/orders" },
  { id: 16, template: <AllProducts />, link: "/category" },
  { id: 15, template: <PageNotFound />, link: "*" },
];

function Navigate() {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      {user.role === "admin"
        ? adminRoutes.map((item) => (
            <Route path={item.link} element={item.template} key={item.id} />
          ))
        : userRoutes.map((item) => (
            <Route path={item.link} element={item.template} key={item.id} />
          ))}
    </Routes>
  );
}

export default Navigate;
