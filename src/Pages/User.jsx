import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiMapPin, FiShoppingBag, FiHeart, FiPackage } from "react-icons/fi";
import Reveal from "../Components/Reveal";
import { formatPrice } from "../data/products";

export default function UserPage() {
  const [user] = useState({
    name: "Priyanshu Shishodia",
    email: "priyanshu@example.com",
    address: "Gurgaon, Haryana, India",
    orders: [
      { id: "OS-24819", product: "Ember Ribbed Crew", date: "Jun 10, 2026", price: 349, status: "Shipped" },
      { id: "OS-24102", product: "Streetlux Black", date: "May 28, 2026", price: 379, status: "Delivered" },
    ],
  });

  const shortcuts = [
    { label: "Wishlist", icon: FiHeart, to: "/wishlist" },
    { label: "Track Order", icon: FiPackage, to: "/track-order" },
    { label: "Returns", icon: FiShoppingBag, to: "/returns" },
  ];

  return (
    <main className="min-h-screen bg-canvas pt-28 md:pt-32">
      <div className="container-x py-10">
        <Reveal className="mb-12 border-b border-ink/10 pb-8">
          <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">Your account</p>
          <h1 className="text-display text-5xl text-ink md:text-7xl">Hey, {user.name.split(" ")[0]}</h1>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Profile card */}
          <Reveal className="h-fit border border-ink/15 bg-canvas-deep p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-2xl text-cream font-display">
                {user.name.charAt(0)}
              </span>
              <div>
                <h2 className="font-grotesk text-lg font-medium uppercase text-ink">{user.name}</h2>
                <p className="font-grotesk text-sm text-ink-soft">{user.email}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 font-archivo text-sm text-ink-soft">
              <FiMapPin className="text-ember" /> {user.address}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2">
              {shortcuts.map((s) => (
                <Link key={s.label} to={s.to} className="flex flex-col items-center gap-2 border border-ink/15 py-4 text-center transition-colors hover:border-ink">
                  <s.icon className="text-lg text-ink" />
                  <span className="font-grotesk text-[10px] uppercase tracking-wide text-ink-soft">{s.label}</span>
                </Link>
              ))}
            </div>

            <button className="btn btn-outline mt-8 w-full">
              <FiLogOut /> Log out
            </button>
          </Reveal>

          {/* Orders */}
          <Reveal delay={0.1}>
            <h3 className="text-display mb-6 text-3xl text-ink">Order history</h3>
            <div className="space-y-4">
              {user.orders.map((order) => (
                <div key={order.id} className="flex flex-wrap items-center justify-between gap-4 border border-ink/15 bg-canvas-deep p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-ink text-cream">
                      <FiShoppingBag />
                    </span>
                    <div>
                      <p className="font-grotesk text-sm font-medium uppercase text-ink">{order.product}</p>
                      <p className="font-grotesk text-xs text-ink-soft">{order.id} · {order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 font-grotesk text-[10px] uppercase tracking-wide ${order.status === "Delivered" ? "bg-ink text-cream" : "bg-ember text-cream"}`}>
                      {order.status}
                    </span>
                    <span className="font-grotesk text-sm text-ink">{formatPrice(order.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
