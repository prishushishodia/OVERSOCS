import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layouts/MainLayout";
import User from "../Pages/User";
import WishlistPage from "../Pages/Wishlist";
import HelpPage from "../Pages/Help";
import TrackOrderPage from "../Pages/TrackOrder";
import ReturnExchangePage from "../Pages/ReturnExchange";
import NotFound from "../Pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Routes inside Main Layout */}
      <Route element={<MainLayout />}>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Product Listing with Filters */}
        <Route path="/shop" element={<Products />} />

        {/* Dynamic Product Details by ID */}
        <Route path="/product/:id" element={<ProductDetail />} />



        <Route path="/wishlist" element={<WishlistPage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Account */}
        <Route path="/account" element={<User />} />

        {/* Help, Returns, Order Tracking */}
        <Route path="/help" element={<HelpPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/returns" element={<ReturnExchangePage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}
