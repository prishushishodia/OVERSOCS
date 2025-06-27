import { NavLink, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50  shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative">

        {/* Left Navigation */}
        <div className="flex items-center space-x-8 uppercase">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Products" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `font-bebas text-xl text-white tracking-wider no-underline font-semibold relative cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "text-red-500"
                    : "hover:text-red-500 hover:underline"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right Navigation */}
        <div className="flex items-center text-xl space-x-6">

          {/* Search Bar */}
          <div className=" font-bebas relative group">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 w-32 md:w-48 transition-all duration-300"
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
              </svg>
            </button>
          </div>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `font-bebas text-white tracking-wider no-underline font-semibold relative cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 hover:underline"
              }`
            }
          >
            Bag (0)
          </NavLink>

          {/* Profile */}
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `flex items-center gap-2 font-bebas text-white tracking-wider no-underline font-semibold relative cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 hover:underline"
              }`
            }
          >
            <FaUser className="text-sm" />
            <span className="hidden md:inline">Profile</span>
          </NavLink>
        </div>

      </div>
    </header>
  );
}
