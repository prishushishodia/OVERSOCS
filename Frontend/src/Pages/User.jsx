import { useState } from "react";
import { LogOut, MapPin, ShoppingBag } from "lucide-react";
import bgImage from "../assets/NoBG.png";

export default function UserPage() {
  const [user] = useState({
    name: "PRIYANSHU SHISHODIA",
    email: "priyanshu@example.com",
    avatar: "https://ui-avatars.com/api/?name=Priyanshu+Shishodia&background=FF0000&color=fff",
    address: "Gurgaon, Haryana, India",
    orders: [
      { id: 1, product: "Red Bold Socks", date: "2025-06-20", price: "₹499" },
      { id: 2, product: "Oversized Black Socks", date: "2025-05-10", price: "₹699" },
    ],
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Added padding top to prevent title being hidden by navbar */}
      <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-wide font-bebas text-white-500 mt-32 mb-10">
        Your Account
      </h1>

      {/* User Card with Black Background */}
      <div className="w-full max-w-2xl p-6 flex flex-col md:flex-row items-center gap-6 bg-black  rounded-2xl shadow-lg">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-28 h-28 rounded-full border-4 border-red-500"
        />

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl font-bold uppercase">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>{user.address}</span>
          </div>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl uppercase tracking-wide hover:bg-red-600 transition flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Order History Section */}
      <div className="w-full max-w-2xl mt-12">
        <h3 className="text-xl font-bold uppercase text-white-500 mb-4">Order History</h3>
        
        {user.orders.map((order) => (
          <div
            key={order.id}
            className="mb-4 p-4 flex justify-between items-center bg-black  rounded-xl shadow"
          >
            <div className="flex items-center gap-4">
              <ShoppingBag className="text-red-500" />
              <div>
                <p className="font-bold">{order.product}</p>
                <p className="text-gray-400 text-sm">{order.date}</p>
              </div>
            </div>
            <span className="font-bold text-red-500">{order.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
