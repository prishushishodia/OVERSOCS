import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layouts/MainLayout";
import User from "../Pages/User";
import WishlistPage from "../Pages/Wishlist"; // Import Wishlist Page

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        {/* Shop Page with Filter Support */}
        <Route path="/shop" element={<Products />} />

        {/* Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<WishlistPage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Account */}
        <Route path="/account" element={<User />} />

      </Route>
    </Routes>
  );
}
