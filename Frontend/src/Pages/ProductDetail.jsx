import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";


export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock Product Data
  const product = {
    id,
    name: "Classic Red Socks",
    price: "₹299",
    description:
      "Step up your sock game with our Classic Red Socks. Bold, comfortable, made with premium cotton blend for everyday wear.",
    category: "Ankle Length",
    images: ["/assets/socks1.png", "/assets/socks2.png", "/assets/socks3.png"],
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [expanded, setExpanded] = useState(null);

  return (
    <main
      className="min-h-screen bg-[#F5F5DC] text-black relative flex flex-col md:flex-row px-4 py-20 md:py-28 gap-8 overflow-hidden"
    
    >
      {/* Left Image Gallery */}
      <aside className="w-full md:w-1/2 flex flex-col items-center sticky top-28 z-10">
        <motion.img
          key={selectedImage}
          src={selectedImage}
          alt="Product View"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[80%] h-auto object-contain border border-black mb-4"
        />

        <div className="flex gap-3">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Thumbnail"
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-contain border border-black cursor-pointer hover:scale-105 transition ${
                selectedImage === img ? "border-2 border-red-500" : ""
              }`}
            />
          ))}
        </div>
      </aside>

      {/* Right Product Info */}
      <section className="w-full md:w-1/2 space-y-6 max-w-xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-anton uppercase"
        >
          {product.name}
        </motion.h1>

        <p className="text-black/70">{product.category}</p>
        <p className="text-2xl font-bold text-red-500">{product.price}</p>

        {/* Color Options */}
        <div className="flex items-center gap-3">
          <span className="font-semibold">Color:</span>
          {product.colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className={`w-8 h-8 border border-black hover:scale-110 transition ${
                selectedColor === color ? "ring-2 ring-red-500" : ""
              }`}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        {/* Size Options */}
        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border border-black uppercase font-bold ${
                selectedSize === size ? "bg-black text-[#F5F5DC]" : "bg-white text-black"
              } hover:bg-black hover:text-[#F5F5DC] transition`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to Cart & Wishlist */}
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-[#F5F5DC] uppercase font-bold hover:bg-red-500 hover:text-white transition">
            Add to Cart
          </button>
          <button
            className="px-6 py-3 border border-black text-black uppercase font-bold hover:bg-black hover:text-[#F5F5DC] transition"
            onClick={() => navigate("/wishlist")}
          >
            Add to Wishlist
          </button>
        </div>

        {/* Description */}
        <p className="text-black/80">{product.description}</p>

        {/* Accordion Details */}
        <div className="border-t border-black pt-4 space-y-3">
          {["Product Details", "Return & Exchange", "Shipping Info"].map((title, i) => (
            <div key={i}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex justify-between items-center text-left font-semibold uppercase py-2"
              >
                {title}
                <span>{expanded === i ? "▲" : "▼"}</span>
              </button>
              {expanded === i && (
                <p className="text-black/70 text-sm pl-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quality guaranteed.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-6 border-t border-black pt-4 space-y-4">
          <h3 className="text-lg font-bold">Reviews (3)</h3>
          {[1, 2, 3].map((r) => (
            <div key={r} className="border border-black p-3 space-y-1">
              <div className="flex items-center gap-2">
                {"★".repeat(4)} <span className="text-sm">(4/5)</span>
              </div>
              <p className="text-black/80 text-sm">Great quality socks. Comfortable and stylish!</p>
            </div>
          ))}
        </div>

        {/* Suggested Products */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-3 uppercase">You may also like</h4>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((s) => (
              <div
                key={s}
                onClick={() => navigate(`/product/${s}`)}
                className="border border-black p-3 bg-[#F5F5DC] hover:shadow-xl cursor-pointer transition"
              >
                <img src={`/assets/socks${s}.png`} alt="Suggest" className="h-32 w-full object-contain mb-2" />
                <p className="font-bold uppercase text-sm">Sock Style {s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
