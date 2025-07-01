import { useEffect, useRef } from "react";
import gsap from "gsap";

import woman from "../assets/WOMAN.png";
import man from "../assets/MAN.jpg";
import mng from "../assets/mng.jpg";

export default function NewAndFeatured() {
  const sectionRef = useRef(null);

  const featuredProducts = [
    { id: 1, name: "Oversocks Classic", desc: "Available in all stores", price: "₹299", image: woman },
    { id: 2, name: "Oversocks Bold Stripes", desc: "Online exclusive", price: "₹349", image: man },
    { id: 3, name: "Oversocks Winter Comfy", desc: "Limited Edition", price: "₹399", image: mng },
  ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".featured-card");
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F5F5DC] py-16 px-4 md:px-10 flex flex-col gap-8 items-center overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-7xl w-full flex justify-between items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-anton text-black">New & Featured</h2>
          <p className="text-gray-700 mt-2">Discover our latest drops and seasonal favourites</p>
        </div>
        <button className="px-6 py-2 bg-black text-[#F5F5DC] rounded-full hover:bg-red-500 hover:text-black transition">
          Explore All →
        </button>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="featured-card bg-white rounded-xl overflow-hidden shadow border border-gray-200 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-100 opacity-100"
          >
            <div className="bg-[#F5F5DC] h-72 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-60 object-contain p-4"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.desc}</p>
              <p className="mt-2 text-black font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
