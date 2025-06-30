import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import wishlist from "../assets/wishlist.jpg";

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

  const filteredProducts = filter && filter !== "All"
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )
    : allProducts;

  return (
    <main className="min-h-screen pt-28 bg-[#F5F5DC] text-black flex relative overflow-hidden">

      {/* Static Background Image */}
      <img
        src={wishlist}
        alt="Oversocs Background"
        className="absolute top-1/2 left-1/2 w-[150vh] h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 z-0 opacity-40"
      />

      {/* Sidebar Filters */}
      <aside className="w-64 max-h-[calc(100vh-7rem)] p-6 border-r border-gray-300 sticky top-28 self-start overflow-y-auto z-10">
        <h3 className="text-2xl font-bold font-anton mb-6">Filters</h3>

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
      </aside>

      {/* Products Grid */}
      <section className="flex-1 p-8 relative z-10">
        <h2 className="text-4xl font-bold font-anton mb-6">
          {filter ? `${filter.replace("-", " ")} Collection` : "All Products"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 bg-white hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-base font-medium">{product.name}</h3>
                <p className="font-bold">{product.price}</p>
                <button className="text-sm text-oversocsRed hover:underline">
                  Buy now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
