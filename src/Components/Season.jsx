import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Reveal, { RevealItem } from "./Reveal";

/**
 * Latest Drop — the first taste of the catalogue. Pulls the four
 * freshest pairs straight from the shared product data.
 */
export default function LatestDrop() {
  const drop = products.slice(0, 4);

  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 flex items-center gap-3 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">
              <span className="h-px w-8 bg-ember" />
              Latest Drop
            </p>
            <h2 className="text-display text-5xl text-ink md:text-7xl">Fresh on the line</h2>
          </div>
          <Link to="/shop?tag=new" className="link-underline font-grotesk text-sm uppercase tracking-[0.18em] text-ink">
            View all <FiArrowRight className="ml-1 inline" />
          </Link>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
        >
          {drop.map((product, i) => (
            <RevealItem key={product.id}>
              <ProductCard product={product} index={i} />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
