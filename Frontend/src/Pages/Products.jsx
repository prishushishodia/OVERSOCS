import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import wishlist from "../assets/wishlist.jpg";
import { motion } from "framer-motion";

export default function Products() {
  const { filter } = useParams();
  const navigate = useNavigate();

  const allProducts = [
    { id: 1, name: "Classic Red Socks", price: "₹299", image: "/assets/socks1.png" },
    { id: 2, name: "Bold Stripe Socks", price: "₹349", image: "/assets/socks2.png" },
    { id: 3, name: "Comfy Cotton Socks", price: "₹249", image: "/assets/socks3.png" },
    { id: 4, name: "Streetwear Black Socks", price: "₹399", image: "/assets/socks4.png" },
    { id: 5, name: "Cozy Winter Socks", price: "₹299", image: "/assets/socks5.png" },
    { id: 6, name: "Retro Neon Socks", price: "₹279", image: "/assets/socks6.png" },
  ];

  const [expanded, setExpanded] = useState(null);
  const [isSticky, setIsSticky] = useState(true);
  const footerRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => footerRef.current && observer.unobserve(footerRef.current);
  }, []);

  const categories = [
    {
      title: "Socks Length",
      options: [
        ["no-show", "No Show"],
        ["low-cut", "Low Cut"],
        ["ankle-length", "Ankle Length"],
        ["full-length", "Full Length"],
      ],
    },
    {
      title: "Shop by Activity",
      options: [
        ["work", "Work (Professional)"],
        ["sports", "Sports/Gymwear"],
        ["everyday", "Every Day Wear"],
      ],
    },
    {
      title: "Shop by Season",
      options: [
        ["winter", "Winter Wear"],
        ["summer", "Summer Wear"],
        ["allseason", "All Season Favourite"],
      ],
    },
  ];

  const filteredProducts =
    filter && filter !== "All"
      ? allProducts.filter((p) =>
          p.name.toLowerCase().includes(filter.toLowerCase())
        )
      : allProducts;

  return (
    <>
      <main
        className="min-h-screen pt-28 bg-[#F5F5DC] text-black flex relative overflow-hidden"
        style={{
          backgroundImage: `url(${wishlist})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className={`w-64 p-6 border-r border-gray-800 z-20 overflow-y-auto bg-[#F5F5DC] transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 h-screen" : "relative top-28 h-[calc(100vh-7rem)]"
          }`}
        >
          <div className="translate-y-30">
            <h3 className="text-3xl font-anton mb-6">FILTERS</h3>

            {categories.map((cat, i) => (
              <div key={i} className="mb-6">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-semibold mb-2"
                >
                  {cat.title}
                  <span>{expanded === i ? "▲" : "▼"}</span>
                </button>

                {expanded === i && (
                  <ul className="space-y-2 pl-2">
                    {cat.options.map(([key, label]) => (
                      <li key={key}>
                        <button
                          onClick={() => navigate(`/shop/${key}`)}
                          className={`w-full text-left px-3 py-2 border border-black hover:bg-black hover:text-[#F5F5DC] transition ${
                            filter === key ? "bg-black text-[#F5F5DC]" : "bg-white text-black"
                          }`}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Price</h4>
              <input type="range" min="100" max="500" className="w-full" />
            </div>

            <div>
              <h4 className="font-semibold mb-2">New & Featured</h4>
              <button
                onClick={() => navigate("/new-featured")}
                className="w-full px-3 py-2 border border-black bg-white text-black hover:bg-black hover:text-[#F5F5DC] transition"
              >
                Explore Now
              </button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1 p-8 ml-64 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl text-[#F5F5DC] font-bebas mb-6"
          >
            {filter ? `${filter.replace("-", " ")} Collection` : "All Products"}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-black bg-[#F5F5DC] hover:shadow-xl transition overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-4 group-hover:scale-105 transition"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-base font-bold uppercase">{product.name}</h3>
                  <p className="font-bold text-red-500">{product.price}</p>
                  <button className="text-sm text-black hover:text-red-500 hover:underline uppercase">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer ref={footerRef} className="bg-black text-white p-8 text-center">
        <h4 className="text-lg font-semibold mb-4">OVERSOCKS Footer</h4>
        <p>All rights reserved. Contact us at support@oversocks.com</p>
      </footer>
    </>
  );
}
