import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layouts/MainLayout";
import User from "../Pages/User"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ User Account Page Route */}
        <Route path="/account" element={<User />} />
      </Route>
    </Routes>
  );
}