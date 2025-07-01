import { useState } from "react";
import { LogOut, MapPin, ShoppingBag } from "lucide-react";
import wishlist from "../assets/wishlist.jpg";
import { motion } from "framer-motion";

export default function UserPage() {
  const [user] = useState({
    name: "PRIYANSHU SHISHODIA",
    email: "priyanshu@example.com",
    avatar: "https://ui-avatars.com/api/?name=Priyanshu+Shishodia&background=000000&color=fff",
    address: "Gurgaon, Haryana, India",
    orders: [
      { id: 1, product: "Red Bold Socks", date: "2025-06-20", price: "₹499" },
      { id: 2, product: "Oversized Black Socks", date: "2025-05-10", price: "₹699" },
    ],
  });

  return (
    <div className="min-h-screen bg-[#F5F5DC] text-black flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background Image */}
      <img
        src={wishlist}
        alt="Oversocs Background"
        className="absolute top-1/2 left-1/2 w-[150vh] h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 z-0 opacity-30 pointer-events-none"
      />

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[clamp(2rem,5vw,4rem)] font-anton font-extrabold uppercase tracking-wide mt-32 mb-10 z-10"
      >
        Your Account
      </motion.h1>

      {/* User Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl p-6 flex flex-col md:flex-row items-center gap-6 bg-[#F5F5DC] border border-black rounded-3xl shadow-xl z-10"
      >
        <img
          src={user.avatar}
          alt="avatar"
          className="w-28 h-28 rounded-full border-4 border-black"
        />

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl font-bold uppercase">{user.name}</h2>
          <p className="text-black/70">{user.email}</p>
          <div className="flex items-center gap-2 text-black/70">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>{user.address}</span>
          </div>
          <button className="mt-4 bg-black text-[#F5F5DC] px-4 py-2 rounded-xl uppercase tracking-wide hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </motion.div>

      {/* Order History */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl mt-12 z-10"
      >
        <h3 className="text-xl font-bold uppercase text-black mb-4">Order History</h3>

        {user.orders.map((order) => (
          <div
            key={order.id}
            className="mb-4 p-4 flex justify-between items-center bg-[#F5F5DC] border border-black rounded-2xl shadow hover:scale-105 hover:shadow-red-500/50 transition-transform group"
          >
            <div className="flex items-center gap-4">
              <ShoppingBag className="text-red-500 group-hover:scale-110 transition" />
              <div>
                <p className="font-bold text-black">{order.product}</p>
                <p className="text-black/50 text-sm">{order.date}</p>
              </div>
            </div>
            <span className="font-bold text-red-500">{order.price}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
