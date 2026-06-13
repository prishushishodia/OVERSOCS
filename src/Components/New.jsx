import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import prod1 from "../assets/kpop.jpg";
import prod2 from "../assets/mnop.jpg";
import Reveal from "./Reveal";

/**
 * Editorial split — a magazine-style break between the catalogue and the
 * social proof, pairing two full-bleed images with a bold call to action.
 */
export default function EditorialSplit() {
  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mb-12 grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 flex items-center gap-3 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">
              <span className="h-px w-8 bg-ember" />
              New In
            </p>
            <h2 className="text-display text-5xl text-ink md:text-7xl">
              Upgrade your rotation
            </h2>
          </div>
          <p className="font-archivo text-base leading-relaxed text-ink-soft md:max-w-md md:justify-self-end">
            Fresh colourways and limited runs, dropped weekly. Get them before
            they sell through — our best pairs never sit still.
            <Link
              to="/shop?tag=new"
              className="mt-5 inline-flex items-center gap-2 font-grotesk text-sm uppercase tracking-[0.18em] text-ink link-underline"
            >
              Shop new arrivals <FiArrowRight />
            </Link>
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { img: prod1, label: "The Acid Collection", to: "/shop?tag=limited" },
            { img: prod2, label: "Everyday Essentials", to: "/shop?activity=everyday" },
          ].map((item) => (
            <Reveal key={item.label}>
              <Link to={item.to} className="group relative block aspect-[16/11] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
                  <h3 className="text-display text-3xl text-cream md:text-4xl">{item.label}</h3>
                  <FiArrowRight className="text-2xl text-cream transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
