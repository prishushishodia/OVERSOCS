import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import wishlist from "../assets/wishlist.jpg";

export default function WishlistPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wishlistItems = [
    {
      id: 1,
      name: "Classic Red Socks",
      price: "₹299",
      image: "/images/sock1.png",
    },
    {
      id: 2,
      name: "Bold Stripe Socks",
      price: "₹349",
      image: "/images/sock2.png",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#f5f5dc] text-black relative overflow-hidden p-4 md:p-8 flex flex-col items-center justify-center">

      {/* Rotated Static Background */}
      <img
        src={wishlist}
        alt="Oversocs Background"
        className="absolute top-1/2 left-1/2 w-[150vh] h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 z-0 opacity-40"
      />

     

      {/* Animated Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto w-full text-center"
      >
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-anton uppercase font-extrabold text-black mb-10">
          Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <p className="text-lg">
            Your wishlist is empty.{" "}
            <Link to="/shop" className="underline text-red-600">
              Browse products
            </Link>
            .
          </p>
        ) : (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {wishlistItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="border border-black rounded-2xl overflow-hidden shadow-xl bg-[#f5f5dc]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-contain p-4 bg-black"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="uppercase font-semibold text-xl">{item.name}</h2>
                  <p className="text-lg font-bold">{item.price}</p>
                  <div className="flex gap-4 mt-2">
                    <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 transition">
                      <Trash2 size={16} /> Remove
                    </button>
                    <Link
                      to={`/product/${item.id}`}
                      className="flex items-center gap-2 border border-black px-4 py-2 rounded-2xl hover:bg-black hover:text-white transition"
                    >
                      <Heart size={16} /> View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
