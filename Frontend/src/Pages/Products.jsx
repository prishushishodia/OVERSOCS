import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import bgImage from "../assets/useme.jpg";

export default function Products() {
  const allProducts = [
    { id: 1, name: "Classic Red Socks", price: "₹299", image: "/assets/socks1.png" },
    { id: 2, name: "Bold Stripe Socks", price: "₹349", image: "/assets/socks2.png" },
    { id: 3, name: "Comfy Cotton Socks", price: "₹249", image: "/assets/socks3.png" },
    { id: 4, name: "Streetwear Black Socks", price: "₹399", image: "/assets/socks4.png" },
    { id: 5, name: "Cozy Winter Socks", price: "₹299", image: "/assets/socks5.png" },
    { id: 6, name: "Retro Neon Socks", price: "₹279", image: "/assets/socks6.png" },
  ];

  const [filter, setFilter] = useState("All");

  return (
    <main className="min-h-screen pt-28 bg-white text-black">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-100 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-6">
          <h3 className="text-2xl text-white font-bold mb-4">Filters</h3>
          
          <div>
            <h4 className="text-sm text-white font-semibold mb-2">Collections</h4>
            <div className="flex flex-wrap gap-2">
              {["All", "Best Sellers", "New Arrivals", "Accessories"].map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-1 rounded-full border text-sm ${
                    filter === c
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="text-white">
            <h4 className="text-sm  font-semibold mb-2 mt-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><input type="checkbox" className="mr-2" /> Socks</li>
              <li><input type="checkbox" className="mr-2" /> Streetwear</li>
              <li><input type="checkbox" className="mr-2" /> Winter</li>
              <li><input type="checkbox" className="mr-2" /> Premium</li>
            </ul>
          </div>

          <div >
            <h4 className="text-sm text-white font-semibold mb-2 mt-4">Price</h4>
            <input type="range" min="100" max="500" className="w-full" />
          </div>
        </aside>

        {/* Products Grid */}
        <section className="flex-1">
          <h2 className="text-2xl text-white font-bold mb-6">Showing {allProducts.length} Results</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-4 text-white space-y-2">
                  <h3 className="text-base font-medium">{product.name}</h3>
                  <p className="font-bold text-white">{product.price}</p>
                  <button className="text-sm text-blue-600 hover:underline">Buy now →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
