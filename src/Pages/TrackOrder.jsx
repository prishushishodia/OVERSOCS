import { useState } from "react";
import { motion } from "framer-motion";
import { PackageCheck, Truck, CheckCircle, ArrowLeftCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import wishlist from "../assets/wishlist.jpg";

export default function TrackOrderPage() {
  const navigate = useNavigate();

  // Simulated order status: "Processing", "Shipped", "Delivered"
  const [status] = useState("Shipped");

  const steps = [
    { label: "Order Placed", icon: <PackageCheck className="w-6 h-6" /> },
    { label: "Shipped", icon: <Truck className="w-6 h-6" /> },
    { label: "Delivered", icon: <CheckCircle className="w-6 h-6" /> },
  ];

  const getStepClass = (stepIndex) => {
    const statusOrder = ["Order Placed", "Shipped", "Delivered"];
    const currentIndex = statusOrder.indexOf(status);
    if (stepIndex < currentIndex) return "bg-black text-[#F5F5DC]";
    if (stepIndex === currentIndex) return "bg-red-600 text-[#F5F5DC]";
    return "bg-[#F5F5DC] text-black border border-black";
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] text-black flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background Image */}
      <img
        src={wishlist}
        alt="Oversocs Background"
        className="absolute top-1/2 left-1/2 w-[150vh] h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 z-0 opacity-30 pointer-events-none"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(2rem,5vw,4rem)] font-anton font-extrabold uppercase tracking-wide mt-32 mb-10 z-10 text-center"
      >
        Track Your Order
      </motion.h1>

      {/* Order Tracker */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl p-6 bg-[#F5F5DC] border border-black rounded-3xl shadow-xl z-10 text-center space-y-10"
      >
        <p className="text-lg mb-6">Your current order status: <span className="font-bold">{status}</span></p>

        <div className="flex justify-between items-center">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${getStepClass(i)}`}>
                {step.icon}
              </div>
              <span className="text-sm font-semibold">{step.label}</span>
              {i < steps.length - 1 && (
                <div className="w-full h-1 bg-black mt-2"></div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/shop")}
          className="mt-6 bg-black text-[#F5F5DC] px-6 py-3 rounded-xl uppercase tracking-wide hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeftCircle className="w-5 h-5" />
          Back to Shop
        </button>
      </motion.div>
    </div>
  );
}
