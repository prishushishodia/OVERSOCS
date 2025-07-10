import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/LOGO2.png";
import CartDrawer from "../Components/CartDrawer";

const rotatingTexts = [
  "Get 10% off on orders above ₹1500 with code 'EXTRA10'",
  "Free Delivery on orders above ₹999",
  "COD & Easy 7-Day Returns Available",
];

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-montserrat font-light">
      {/* Search Popup */}
      {showSearchPopup && (
        <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-start p-8">
          <div className="w-full max-w-4xl mt-12">
            <div className="flex items-center border-b border-gray-300 pb-3">
              <input
                autoFocus
                type="text"
                placeholder="Search for products..."
                className="w-full text-xl text-black placeholder-gray-400 bg-transparent focus:outline-none"
              />
              <button
                onClick={() => setShowSearchPopup(false)}
                className="ml-4 text-2xl text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-700">
              <p className="mb-2 text-xs text-gray-500 uppercase tracking-wide">Recent Searches</p>
              <div className="flex flex-wrap gap-2">
                {["Oversized Socks", "Winter Collection", "Kids", "Bold Red"].map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full cursor-pointer text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rotating Announcement Bar */}
      <div className="w-full bg-black text-white text-sm h-[32px] overflow-hidden">
        <div
          className="h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${currentText * 100}%)` }}
        >
          {rotatingTexts.map((text, index) => (
            <div
              key={index}
              className="h-[32px] flex items-center justify-center w-full uppercase tracking-widest"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#f0f0f0] text-black shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm uppercase">
          {/* Logo */}
          <Link to="/" className="scale-[2] -translate-x-4 -translate-y-[2px]">
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Links */}
          <div className="flex gap-12 tracking-wide text-xs">
            <NavLink to="/shop?featured=newin" className="hover:text-gray-600">New In</NavLink>

            <div className="relative group">
              <button className="hover:text-gray-600">SHOP BY</button>
              <div className="absolute left-0 top-full bg-white text-black mt-1 p-4 shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50 grid grid-cols-2 min-w-[200px] text-xs">
                <div className="flex flex-col gap-10">
                  <NavLink to="/shop?season=winters" className="hover:underline">Winters</NavLink>
                  <NavLink to="/shop?season=summers" className="hover:underline">Summers</NavLink>
                  <NavLink to="/shop?season=alltime" className="hover:underline">All Time</NavLink>
                </div>
                <div className="flex flex-col gap-10">
                  <NavLink to="/shop?category=men" className="hover:underline">Men</NavLink>
                  <NavLink to="/shop?category=women" className="hover:underline">Women</NavLink>
                  <NavLink to="/shop?category=kids" className="hover:underline">Kids</NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/stores" className="hover:text-gray-600">ALL PRODUCTS</NavLink>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <FiSearch
              onClick={() => setShowSearchPopup(true)}
              className="cursor-pointer hover:text-oversocsRed text-xl"
            />
            <NavLink to="/account" className="hover:text-gray-600">Login</NavLink>
            <button onClick={() => setIsCartOpen(true)} className="hover:text-gray-600">
              <FaShoppingBag />
            </button>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Popup */}
      {showAuthPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-sm relative text-black">
            <button
              className="absolute top-3 right-3 text-xl text-gray-500 hover:text-red-500"
              onClick={() => setShowAuthPopup(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 w-full p-2 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 w-full p-2 mb-4"
            />
            <button
              className="w-full bg-black text-white py-2 hover:bg-gray-800 transition"
              onClick={() => {
                setIsLoggedIn(true);
                setShowAuthPopup(false);
              }}
            >
              Login
            </button>
            <p className="text-sm text-center mt-4">
              New here? <span className="text-gray-700 cursor-pointer">Register</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
