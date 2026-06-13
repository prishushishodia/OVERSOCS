import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { formatPrice } from "../data/products";

/**
 * Canonical product card — used by Latest Drop, New In and the Shop grid.
 * Editorial framing: tag chip, hover-zoom image, quick-view affordance,
 * name / price / colourway dots.
 */
export default function ProductCard({ product, index = 0 }) {
  const { id, name, price, tag, image, colors = [] } = product;

  return (
    <Link
      to={`/product/${id}`}
      className="group block"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-canvas-deep">
        {tag && (
          <span className="absolute left-3 top-3 z-10 bg-ink px-2.5 py-1 font-grotesk text-[10px] uppercase tracking-[0.15em] text-cream">
            {tag}
          </span>
        )}

        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />

        {/* Quick view bar */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 px-4 py-3 text-center font-grotesk text-xs uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
          View product <FiArrowUpRight className="ml-1 inline" />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-grotesk text-sm font-medium uppercase tracking-wide text-ink">
            {name}
          </h3>
          <p className="mt-1 font-grotesk text-sm text-ink-soft">{formatPrice(price)}</p>
        </div>
        <div className="mt-1 flex gap-1.5">
          {colors.slice(0, 4).map((c) => (
            <span
              key={c}
              className="h-3 w-3 rounded-full border border-ink/20"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
