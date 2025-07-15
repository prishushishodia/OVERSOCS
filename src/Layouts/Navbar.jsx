// import { useState, useEffect } from "react";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import { FaHeart, FaUser, FaShoppingBag } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { IoIosArrowDown } from "react-icons/io";
// import logo from "../assets/LOGO.png";
// import CartDrawer from "../Components/CartDrawer";

// const rotatingTexts = [
//   "Get 10% off on orders above ₹1500 with code 'EXTRA10'",
//   "Free Delivery on orders above ₹999",
//   "COD & Easy 7-Day Returns Available",
// ];

// export default function Navbar() {
//   const location = useLocation();
//   const [showBars, setShowBars] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [currentText, setCurrentText] = useState(0);
//   const [hovering, setHovering] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
//   const [showAuthPopup, setShowAuthPopup] = useState(false);

//   const isHome = location.pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY < lastScrollY || currentScrollY < 10) {
//         setShowBars(true);
//       } else {
//         setShowBars(false);
//       }
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const transparentOnTop = isHome && window.scrollY < 10 && !hovering;
//   const navbarBg = transparentOnTop ? "bg-transparent text-white" : "bg-[#F5F5DC] text-black shadow-sm";

//   return (
//     <header className="w-full z-50 font-michroma">
//       <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showBars ? "translate-y-0" : "-translate-y-full"}`}>
        
//         {/* Top Rotating Bar */}
//         <div className="w-full bg-black text-white text-sm py-2 text-center uppercase tracking-wide">
//           <div className="transition-opacity duration-500">
//             {rotatingTexts[currentText]}
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <div
//           className={`${navbarBg} transition-colors duration-300`}
//           onMouseEnter={() => setHovering(true)}
//           onMouseLeave={() => setHovering(false)}
//         >
//           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-base uppercase tracking-wide relative">

//             {/* Left Section with Logo */}
//             <div className="flex items-center space-x-8">
//               <Link to="/" className="flex-shrink-0 transition duration-300">
//                 <img 
//                   src={logo} 
//                   alt="Logo" 
//                   className="h-10 w-auto object-contain scale-[7] -translate-x-[50px] -translate-y-[3px]" 
//                 />
//               </Link>

//               <NavLink to="/shop?featured=premium" className="text-lg hover:text-oversocsRed transition">New</NavLink>
//               <NavLink to="/shop?featured=bestsellers" className="text-lg hover:text-oversocsRed transition">Bestsellers</NavLink>
//               <NavLink to="/shop?featured=newarrivals" className="text-lg hover:text-oversocsRed transition">New Arrivals</NavLink>

//               <div className="relative group">
//                 <button className="text-lg hover:text-oversocsRed flex items-center transition">
//                   Season
//                   <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" size={16} />
//                 </button>
//               </div>

//               <div className="relative group">
//                 <button className="text-lg hover:text-oversocsRed flex items-center transition">
//                   Men
//                   <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Right Icons */}
//             <div className="flex items-center space-x-6 text-xl z-10">
//               <div className="relative group">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="bg-black rounded-full px-4 py-1 w-28 md:w-40 text-sm focus:outline-oversocsRed placeholder-gray-300"
//                 />
//                 <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-oversocsRed cursor-pointer" />
//               </div>

//               <NavLink to="/wishlist" className="hover:text-oversocsRed"><FaHeart /></NavLink>

//               <button onClick={() => setIsCartOpen(true)} className="hover:text-oversocsRed">
//                 <FaShoppingBag />
//               </button>

//               <button
//                 onClick={() => {
//                   if (isLoggedIn) {
//                     window.location.href = "/account";
//                   } else {
//                     setShowAuthPopup(true);
//                   }
//                 }}
//                 className="hover:text-oversocsRed"
//               >
//                 <FaUser />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

//       {/* Login/Register Popup */}
//       {showAuthPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
//           <div className="bg-white p-8 rounded-lg w-[90%] max-w-sm relative text-black">
            
//             <button
//               className="absolute top-3 right-3 text-xl text-gray-500 hover:text-red-500"
//               onClick={() => setShowAuthPopup(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
            
//             <input
//               type="email"
//               placeholder="Email"
//               className="border border-gray-300 w-full p-2 mb-3"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="border border-gray-300 w-full p-2 mb-4"
//             />
//             <button 
//               className="w-full bg-black text-white py-2 hover:bg-red-500 transition"
//               onClick={() => {
//                 setIsLoggedIn(true);
//                 setShowAuthPopup(false);
//               }}
//             >
//               Login
//             </button>

//             <p className="text-sm text-center mt-4">
//               New here? <span className="text-oversocsRed cursor-pointer">Register</span>
//             </p>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaHeart, FaUser, FaShoppingBag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/LOGO.png";
import CartDrawer from "../Components/CartDrawer";

const rotatingTexts = [
  "Get 10% off on orders above ₹1500 with code 'EXTRA10'",
  "Free Delivery on orders above ₹999",
  "COD & Easy 7-Day Returns Available",
];

export default function Navbar() {
  const location = useLocation();
  const [showBars, setShowBars] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowBars(true);
      } else {
        setShowBars(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transparentOnTop = isHome && window.scrollY < 10 && !hovering;
  const navbarBg = transparentOnTop ? "bg-transparent text-white" : "bg-[#F5F5DC] text-black shadow-sm";

  return (
    <header className="w-full z-50 font-michroma">
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showBars ? "translate-y-0" : "-translate-y-full"}`}>
        
        {/* Top Rotating Bar */}
        <div className="w-full bg-black text-white text-sm py-2 text-center uppercase tracking-wide">
          <div className="transition-opacity duration-500">
            {rotatingTexts[currentText]}
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`${navbarBg} transition-colors duration-300`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-base uppercase tracking-wide relative">

            {/* Left Section with Logo */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex-shrink-0 transition duration-300">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-10 w-auto object-contain scale-[7] -translate-x-[50px] -translate-y-[3px]" 
                />
              </Link>

              <NavLink to="/shop?featured=premium" className="text-lg hover:text-oversocsRed transition">New</NavLink>
              <NavLink to="/shop?featured=bestsellers" className="text-lg hover:text-oversocsRed transition">Bestsellers</NavLink>
              <NavLink to="/shop?featured=newarrivals" className="text-lg hover:text-oversocsRed transition">New Arrivals</NavLink>

              <div className="relative group">
                <button className="text-lg hover:text-oversocsRed flex items-center transition">
                  Season
                  <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" size={16} />
                </button>
              </div>

              <div className="relative group">
                <button className="text-lg hover:text-oversocsRed flex items-center transition">
                  Men
                  <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" size={16} />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6 text-xl z-10">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search"
                  readOnly
                  onFocus={() => setIsSearchOpen(true)}
                  className="bg-black rounded-full px-4 py-1 w-28 md:w-40 text-sm focus:outline-oversocsRed placeholder-gray-300 cursor-pointer"
                />
                <FiSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-oversocsRed cursor-pointer"
                  onClick={() => setIsSearchOpen(true)}
                />
              </div>

              <NavLink to="/wishlist" className="hover:text-oversocsRed"><FaHeart /></NavLink>

              <button onClick={() => setIsCartOpen(true)} className="hover:text-oversocsRed">
                <FaShoppingBag />
              </button>

              <button
                onClick={() => {
                  if (isLoggedIn) {
                    window.location.href = "/account";
                  } else {
                    setShowAuthPopup(true);
                  }
                }}
                className="hover:text-oversocsRed"
              >
                <FaUser />
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Login/Register Popup */}
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
              className="w-full bg-black text-white py-2 hover:bg-red-500 transition"
              onClick={() => {
                setIsLoggedIn(true);
                setShowAuthPopup(false);
              }}
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              New here? <span className="text-oversocsRed cursor-pointer">Register</span>
            </p>
          </div>
        </div>
      )}

      {/* Search Slide Panel */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black bg-opacity-60 flex items-start justify-center"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-[#F5F5DC] w-full h-1/2 shadow-xl px-8 py-6 animate-slide-down relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-6 text-black text-2xl hover:text-red-600"
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </button>

            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl md:text-3xl font-michroma text-black mb-6 uppercase tracking-wide">
                What are you looking for?
              </h2>
              <input
                type="text"
                placeholder="Search for products..."
                autoFocus
                className="w-full px-6 py-3 rounded-full border border-black text-black focus:outline-oversocsRed text-lg font-anton"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
