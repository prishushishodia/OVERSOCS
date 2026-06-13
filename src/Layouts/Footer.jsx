import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const columns = [
  {
    title: "Shop",
    links: [
      ["Men", "/shop?category=men"],
      ["Women", "/shop?category=women"],
      ["Kids", "/shop?category=kids"],
      ["New In", "/shop?tag=new"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Track Order", "/track-order"],
      ["Returns & Exchange", "/returns"],
      ["FAQ", "/help"],
      ["Account", "/account"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Our Story", "/#about"],
      ["Careers", "/help"],
      ["Sustainability", "/help"],
      ["Contact", "/help"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 text-cream">
      <div className="container-x">
        {/* Top: newsletter + columns */}
        <div className="grid gap-12 border-b border-cream/10 pb-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <h2 className="text-display text-4xl md:text-5xl">
              Join the <span className="text-ember">drop list</span>
            </h2>
            <p className="mt-4 max-w-sm font-archivo text-cream/60">
              Early access to limited runs, restocks and members-only colourways. No spam — just the good stuff.
            </p>
            <form
              className="mt-6 flex max-w-sm items-center border border-cream/25 focus-within:border-ember"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-grow bg-transparent px-4 py-3 font-grotesk text-sm text-cream placeholder-cream/40 focus:outline-none"
              />
              <button
                aria-label="Subscribe"
                className="flex h-12 w-12 items-center justify-center bg-ember text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                <FiArrowRight />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 font-grotesk text-xs uppercase tracking-[0.2em] text-cream/50">
                  {col.title}
                </h3>
                <ul className="space-y-3 font-grotesk text-sm">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <Link to={href} className="text-cream/80 transition-colors hover:text-ember">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <p className="font-grotesk text-xs uppercase tracking-[0.18em] text-cream/50">
            © {new Date().getFullYear()} Oversocks — Step Boldly
          </p>
          <div className="flex gap-4">
            {[FaInstagram, FaTiktok, FaXTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-ember hover:bg-ember hover:text-cream"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="flex gap-6 font-grotesk text-xs uppercase tracking-[0.18em] text-cream/50">
            <Link to="/help" className="hover:text-ember">Terms</Link>
            <Link to="/help" className="hover:text-ember">Privacy</Link>
          </div>
        </div>
      </div>

      {/* Oversized wordmark bleed */}
      <h1 className="text-display pointer-events-none select-none whitespace-nowrap text-center text-[24vw] leading-[0.7] text-cream/[0.06]">
        OVERSOCKS
      </h1>
    </footer>
  );
}
