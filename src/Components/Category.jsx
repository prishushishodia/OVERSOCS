import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const tiles = [
  { num: "01", label: "Men", to: "/shop?category=men", img: "/images/MAN.jpg" },
  { num: "02", label: "Women", to: "/shop?category=women", img: "/images/WOMAN.jpg" },
  { num: "03", label: "Kids", to: "/shop?category=kids", img: "/images/KIDS.jpg" },
];

export default function CategorySection() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display text-5xl text-cream md:text-7xl">
            Shop by <span className="text-ember">wear</span>
          </h2>
          <p className="max-w-xs font-archivo text-sm text-cream/60">
            Three cuts, one attitude. Find the pair built for how you move.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.to}
              className="group relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-[68vh]"
            >
              <img
                src={tile.img}
                alt={`Shop ${tile.label}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover sepia transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:sepia-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

              <span className="absolute left-5 top-5 font-grotesk text-xs tracking-[0.3em] text-cream/70">
                {tile.num}
              </span>

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                <h3 className="text-display text-5xl text-cream md:text-6xl">{tile.label}</h3>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink transition-colors duration-300 group-hover:bg-ember group-hover:text-cream">
                  <FiArrowUpRight className="text-xl" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
