import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import CartDrawer from "../Components/CartDrawer";

const announcements = [
  "Free shipping on orders over ₹999",
  "10% off ₹1500+ with code STEPBOLD",
  "COD & easy 7-day returns",
];

const popularSearches = ["Ember Crew", "No-Show", "Winter", "Acid Lime", "Kids"];

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [announceIdx, setAnnounceIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Rotating announcement
  useEffect(() => {
    const id = setInterval(
      () => setAnnounceIdx((p) => (p + 1) % announcements.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  // Solidify nav after leaving the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close search on outside click / escape
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e) => e.key === "Escape" && setSearchOpen(false);
    const onClick = (e) =>
      searchRef.current && !searchRef.current.contains(e.target) && setSearchOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [searchOpen]);

  // Transparent only over the home hero before scrolling
  const transparent = onHome && !scrolled && !menuOpen;
  const barText = transparent ? "text-cream" : "text-ink";

  const navLinks = [
    { to: "/shop?tag=new", label: "New In" },
    { to: "/shop?category=men", label: "Men" },
    { to: "/shop?category=women", label: "Women" },
    { to: "/shop?category=kids", label: "Kids" },
    { to: "/shop", label: "All Socks" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-grotesk">
      {/* Announcement bar */}
      <div className="h-9 overflow-hidden bg-ink text-cream">
        <div
          className="flex h-full flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateY(-${announceIdx * 2.25}rem)` }}
        >
          {announcements.map((text, i) => (
            <div
              key={i}
              className="flex h-9 items-center justify-center text-[11px] uppercase tracking-[0.22em]"
            >
              <span className="mr-2 text-acid">✱</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-colors duration-500 ${
          transparent
            ? "bg-transparent"
            : "border-b border-ink/10 bg-canvas/90 backdrop-blur-md"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-4">
          {/* Wordmark */}
          <Link to="/" className={`group flex items-center gap-2 ${barText}`}>
            <span className="text-display text-2xl leading-none tracking-wide md:text-3xl">
              OVERSOCKS
            </span>
            <span className="mb-3 h-2 w-2 rounded-full bg-ember transition-transform duration-300 group-hover:scale-150" />
          </Link>

          {/* Center links */}
          <div className={`hidden items-center gap-9 text-xs uppercase tracking-[0.18em] lg:flex ${barText}`}>
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="link-underline transition-opacity hover:opacity-70"
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-5 ${barText}`}>
            <button aria-label="Search" onClick={() => setSearchOpen(true)} className="hover:text-ember">
              <FiSearch className="text-lg" />
            </button>
            <NavLink aria-label="Account" to="/account" className="hidden hover:text-ember sm:block">
              <FiUser className="text-lg" />
            </NavLink>
            <button aria-label="Cart" onClick={() => setIsCartOpen(true)} className="relative hover:text-ember">
              <FiShoppingBag className="text-lg" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ember text-[9px] font-bold text-cream">
                0
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-5 w-6 flex-col justify-center gap-[5px] lg:hidden"
            >
              <span className={`h-[2px] w-full bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-b border-ink/10 bg-canvas lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      >
        <div className="container-x flex flex-col gap-1 py-4 font-grotesk">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="border-b border-ink/10 py-3 text-sm uppercase tracking-[0.18em] text-ink"
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/account"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm uppercase tracking-[0.18em] text-ink-soft"
          >
            Account
          </NavLink>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm">
          <div
            ref={searchRef}
            className="animate-[rise_0.4s_cubic-bezier(0.16,1,0.3,1)] bg-canvas px-6 py-8 shadow-2xl"
          >
            <div className="container-x">
              <div className="flex items-center gap-4 border-b border-ink/20 pb-4">
                <FiSearch className="text-xl text-ink-soft" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search socks, colours, drops…"
                  className="w-full bg-transparent font-grotesk text-lg text-ink placeholder-ink-soft/60 focus:outline-none"
                />
                <button onClick={() => setSearchOpen(false)} className="text-ink-soft hover:text-ember">
                  <FiX className="text-xl" />
                </button>
              </div>
              <p className="mb-3 mt-6 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((s) => (
                  <Link
                    key={s}
                    to="/shop"
                    onClick={() => setSearchOpen(false)}
                    className="border border-ink/20 px-4 py-1.5 text-xs uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-cream"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
