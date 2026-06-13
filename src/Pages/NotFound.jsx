import { Link } from "react-router-dom";
import Marquee from "../Components/Marquee";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="absolute inset-x-0 top-1/4 -z-0 opacity-[0.07]">
        <Marquee speed={20}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-display mx-8 text-[12rem] text-cream">404</span>
          ))}
        </Marquee>
      </div>

      <div className="relative z-10">
        <p className="mb-4 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">Lost a sock</p>
        <h1 className="text-display text-7xl text-cream md:text-9xl">
          Page <span className="text-ember">missing.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md font-archivo text-cream/60">
          This page wandered off like a sock in the laundry. Let's get you back to something bold.
        </p>
        <Link to="/" className="btn btn-solid mt-8 bg-ember border-ember hover:bg-cream hover:text-ink">
          Back home
        </Link>
      </div>
    </main>
  );
}
