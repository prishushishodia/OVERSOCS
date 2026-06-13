import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiHeart, FiMinus, FiPlus, FiStar, FiChevronDown } from "react-icons/fi";
import { products, getProductById, formatPrice } from "../data/products";
import ProductCard from "../Components/ProductCard";

const SIZES = ["S", "M", "L", "XL"];
const accordion = [
  { title: "Product Details", body: "Combed cotton blend with a reinforced heel and hand-linked toe seam. Knitted in a 200-needle count for a smooth, dense finish that holds its shape wash after wash." },
  { title: "Shipping", body: "Free shipping on orders over ₹999. Dispatched within 24 hours; delivered in 2–5 business days across India." },
  { title: "Returns & Exchange", body: "Not in love? Return unworn pairs within 7 days for a full refund or a free size swap." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id) ?? products[0];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [openAcc, setOpenAcc] = useState(0);

  const related = useMemo(
    () => products.filter((p) => p.id !== product.id).slice(0, 4),
    [product.id]
  );

  return (
    <main className="min-h-screen bg-canvas pt-28 md:pt-32">
      <div className="container-x">
        {/* Breadcrumb */}
        <nav className="mb-8 font-grotesk text-xs uppercase tracking-[0.18em] text-ink-soft">
          <Link to="/" className="hover:text-ember">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ember">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              key={product.image}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-canvas-deep"
            >
              <span className="absolute left-4 top-4 z-10 bg-ink px-3 py-1 font-grotesk text-[10px] uppercase tracking-[0.15em] text-cream">
                {product.tag}
              </span>
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </motion.div>
          </div>

          {/* Info */}
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-2 text-ember">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} className="fill-ember text-sm" />
              ))}
              <span className="ml-1 font-grotesk text-xs text-ink-soft">(128 reviews)</span>
            </div>

            <h1 className="text-display text-5xl text-ink md:text-6xl">{product.name}</h1>
            <p className="mt-4 font-grotesk text-2xl text-ink">{formatPrice(product.price)}</p>
            <p className="mt-6 font-archivo text-base leading-relaxed text-ink-soft">{product.blurb}</p>

            {/* Colour */}
            <div className="mt-8">
              <p className="mb-3 font-grotesk text-xs uppercase tracking-[0.2em] text-ink-soft">Colourway</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    aria-label={`Colour ${color}`}
                    className={`h-9 w-9 rounded-full border transition-all ${
                      selectedColor === color
                        ? "ring-2 ring-ember ring-offset-2 ring-offset-canvas border-transparent"
                        : "border-ink/20 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-grotesk text-xs uppercase tracking-[0.2em] text-ink-soft">Size</p>
                <button className="font-grotesk text-xs uppercase tracking-wide text-ember hover:underline">Size guide</button>
              </div>
              <div className="flex gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 w-12 border font-grotesk text-sm uppercase transition-colors ${
                      selectedSize === size
                        ? "border-ink bg-ink text-cream"
                        : "border-ink/20 text-ink hover:border-ink"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-ink/20">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3 text-ink hover:text-ember" aria-label="Decrease">
                  <FiMinus />
                </button>
                <span className="w-10 text-center font-grotesk text-sm">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-4 py-3 text-ink hover:text-ember" aria-label="Increase">
                  <FiPlus />
                </button>
              </div>
              <button className="btn btn-solid flex-1">Add to cart · {formatPrice(product.price * qty)}</button>
              <button
                onClick={() => navigate("/wishlist")}
                aria-label="Add to wishlist"
                className="flex h-[52px] w-[52px] items-center justify-center border border-ink/20 text-ink transition-colors hover:border-ember hover:text-ember"
              >
                <FiHeart />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-ink/15">
              {accordion.map((item, i) => (
                <div key={item.title} className="border-b border-ink/15">
                  <button
                    onClick={() => setOpenAcc(openAcc === i ? -1 : i)}
                    className="flex w-full items-center justify-between py-5 font-grotesk text-sm uppercase tracking-wide text-ink"
                  >
                    {item.title}
                    <FiChevronDown className={`transition-transform ${openAcc === i ? "rotate-180" : ""}`} />
                  </button>
                  {openAcc === i && (
                    <p className="pb-5 font-archivo text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="border-t border-ink/10 py-20 md:py-28">
          <h2 className="text-display mb-10 text-4xl text-ink md:text-5xl">You may also like</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
