import { useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiArrowUpRight } from "react-icons/fi";
import { products, formatPrice } from "../data/products";
import Reveal from "../Components/Reveal";

export default function WishlistPage() {
  // Seed with a couple of real catalogue items.
  const [items, setItems] = useState(() => [products[2], products[3], products[7]]);

  const remove = (id) => setItems((list) => list.filter((p) => p.id !== id));

  return (
    <main className="min-h-screen bg-canvas pt-28 md:pt-32">
      <div className="container-x py-10">
        <Reveal className="mb-12 border-b border-ink/10 pb-8">
          <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">Saved for later</p>
          <h1 className="text-display text-5xl text-ink md:text-7xl">Your wishlist</h1>
        </Reveal>

        {items.length === 0 ? (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <p className="text-display text-3xl text-ink">Nothing saved yet.</p>
            <Link to="/shop" className="btn btn-solid mt-6">Browse the catalogue</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-canvas-deep">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <button
                    onClick={() => remove(item.id)}
                    aria-label="Remove"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink backdrop-blur transition-colors hover:bg-ember hover:text-cream"
                  >
                    <FiTrash2 className="text-sm" />
                  </button>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-grotesk text-sm font-medium uppercase text-ink">{item.name}</h3>
                    <p className="mt-1 font-grotesk text-sm text-ink-soft">{formatPrice(item.price)}</p>
                  </div>
                  <Link to={`/product/${item.id}`} aria-label="View" className="mt-1 text-ink hover:text-ember">
                    <FiArrowUpRight className="text-lg" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
