import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import wishlist from "../assets/wishlist.jpg";
import { ArrowLeftCircle } from "lucide-react";

export default function ReturnExchangePage() {
  const navigate = useNavigate();

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
        Return & Exchange
      </motion.h1>

      {/* Card Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl p-6 bg-[#F5F5DC] border border-black rounded-3xl shadow-xl z-10 text-center space-y-6"
      >
        <p className="text-lg leading-relaxed">
          We want you to love your socks! If you're not satisfied with your purchase, you can return or exchange your items within <span className="font-bold">15 days</span> of delivery.
        </p>

        <ul className="text-left list-disc list-inside space-y-2">
          <li>Items must be unworn, unwashed, and in original packaging.</li>
          <li>Sale items are non-returnable unless defective.</li>
          <li>Exchanges are subject to stock availability.</li>
        </ul>

        <p className="text-lg">
          For returns or exchanges, email us at <span className="font-bold">support@oversocs.com</span> with your order details. We'll assist you with the process.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-4 bg-black text-[#F5F5DC] px-6 py-3 rounded-xl uppercase tracking-wide hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeftCircle className="w-5 h-5" />
          Back to Shop
        </button>
      </motion.div>
    </div>
  );
}
