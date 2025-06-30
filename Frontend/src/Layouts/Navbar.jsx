import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaHeart, FaUser, FaShoppingBag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/LOGO.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [showBars, setShowBars] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowBars(true); // Show bars on scroll up or near top
      } else {
        setShowBars(false); // Hide on scroll down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="w-full z-50 font-anton">

      {/* Scroll Controlled Wrapper */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showBars ? "translate-y-0" : "-translate-y-full"}`}>

        {/* Top Bar */}
        <div className="w-full bg-[#F5F5DC] text-black text-xs sm:text-sm border-b border-black">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <NavLink to="/returns" className="hover:text-oversocsRed transition">Return/Exchange</NavLink>
              <NavLink to="/size-guide" className="hover:text-oversocsRed transition">Size Guide</NavLink>
              <NavLink to="/track-order" className="hover:text-oversocsRed transition">Track Your Order</NavLink>
              <NavLink to="/customer-care" className="hover:text-oversocsRed transition">Customer Care</NavLink>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink to="/help" className="hover:text-oversocsRed transition">Help</NavLink>
              <span>|</span>
              <NavLink to="/account" className="hover:text-oversocsRed transition">Hi, Priyanshu</NavLink>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-[#F5F5DC] shadow-sm w-full">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-lg uppercase tracking-wide relative">

            {/* Left Controls */}
            <div className="flex items-center space-x-8 z-10 relative">
              <div className="relative group">
                <button className="font-bold text-xl text-black hover:text-oversocsRed flex items-center transition">
                  Shop By
                  <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" size={18} />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full bg-black text-white shadow-xl border border-gray-700 px-12 py-10 rounded-2xl hidden group-hover:grid hover:grid grid-cols-5 gap-10 z-50 min-w-[1000px] transition-all duration-300">
                  {/* Dropdown Content */}
                  <div>
                    <h4 className="text-2xl mb-6 text-white underline font-extrabold tracking-widest">Socks Length</h4>
                    <ul className="space-y-5 text-lg">
                      {["no-show", "low-cut", "ankle-length", "full-length"].map((item) => (
                        <li key={item}>
                          <NavLink to={`/shop?category=${item}`} className="hover:text-beige hover:scale-115 transition transform block">
                            {item.replace("-", " ").toUpperCase()}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl mb-6 text-white underline font-extrabold tracking-widest">Shop by Activity</h4>
                    <ul className="space-y-5 text-lg">
                      {["work", "sports", "everyday"].map((item) => (
                        <li key={item}>
                          <NavLink to={`/shop?activity=${item}`} className="hover:text-beige hover:scale-115 transition transform block">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl mb-6 text-white underline font-extrabold tracking-widest">Shop by Season</h4>
                    <ul className="space-y-5 text-lg">
                      {["winter", "summer", "allseason"].map((item) => (
                        <li key={item}>
                          <NavLink to={`/shop?season=${item}`} className="hover:text-beige hover:scale-115 transition transform block">
                            {item.toUpperCase()}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <NavLink to="/shop?featured=new" className="font-bold text-xl text-black hover:text-oversocsRed transition">
                New & Featured
              </NavLink>
            </div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <Link to="/" className="pointer-events-auto">
                <img src={logo} alt="Logo" className="h-60 w-auto object-contain" />
              </Link>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-6 text-xl z-10">
              <div className="relative group">
                <input type="text" placeholder="Search" className="bg-black rounded-full px-4 py-1 w-28 md:w-40 text-sm focus:outline-oversocsRed placeholder-gray-300" />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-oversocsRed cursor-pointer" />
              </div>
              <NavLink to="/wishlist" className="hover:text-oversocsRed text-black"><FaHeart /></NavLink>
              <NavLink to="/cart" className="hover:text-oversocsRed text-black"><FaShoppingBag /></NavLink>
              <NavLink to="/account" className="hover:text-oversocsRed text-black"><FaUser /></NavLink>
            </div>

          </div>
        </div>

      </div>
    </header>
  );
}
