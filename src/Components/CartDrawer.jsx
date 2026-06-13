import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiX, FiShoppingBag } from "react-icons/fi";
import { products, formatPrice } from "../data/products";

export default function CartDrawer({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const suggestions = products.slice(0, 3);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md transform flex-col bg-canvas shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 p-6">
          <h2 className="font-grotesk text-sm uppercase tracking-[0.2em] text-ink">Cart (0)</h2>
          <button onClick={onClose} aria-label="Close cart" className="text-ink hover:text-ember">
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Empty state */}
        <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ink/15 text-ink-soft">
            <FiShoppingBag className="text-2xl" />
          </span>
          <p className="text-display text-2xl text-ink">Your cart is empty</p>
          <p className="max-w-xs font-archivo text-sm text-ink-soft">
            Looks like you haven't added any pairs yet. Let's fix that.
          </p>
          <button onClick={onClose} className="btn btn-solid mt-2">
            Start shopping
          </button>
        </div>

        {/* Suggestions */}
        <div className="border-t border-ink/10 p-6">
          <p className="mb-4 font-grotesk text-[11px] uppercase tracking-[0.2em] text-ink-soft">You might like</p>
          <div className="grid grid-cols-3 gap-3">
            {suggestions.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} onClick={onClose} className="group">
                <div className="aspect-square overflow-hidden bg-canvas-deep">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="mt-2 font-grotesk text-[11px] text-ink-soft">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
