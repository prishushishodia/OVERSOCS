import wishlist from "../assets/wishlist.jpg";
import { motion } from "framer-motion";

export default function Cart() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] flex flex-col items-center justify-center px-4 text-white relative overflow-hidden">

      {/* Centered Wishlist Background Image Rotated */}
      <img
        src={wishlist}
        alt="Oversocs Background"
        className="absolute top-1/2 left-1/2 w-[150vh] h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 z-0 opacity-40 pointer-events-none"
      />

      
      {/* Heading with entrance animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[clamp(2rem,5vw,4rem)] font-anton font-extrabold uppercase tracking-wide text-black mb-10 z-10"
      >
        Your Cart
      </motion.h1>

      {/* Cart Box */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-black/90 border border-red-500 shadow-2xl backdrop-blur-sm p-8 md:p-12 rounded-3xl max-w-xl w-full text-center z-10"
      >
        <p className="text-lg text-white/60 mb-6 tracking-wide">
          No items added yet.
        </p>

        <button
          disabled
          className="mt-4 bg-[#F5F5DC] text-black uppercase px-8 py-3 rounded-xl font-bold cursor-not-allowed hover:bg-red-600 hover:text-white transition"
        >
          Checkout (Coming Soon)
        </button>
      </motion.div>
    </div>
  );
}
