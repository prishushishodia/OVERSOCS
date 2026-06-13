import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import Reveal from "../Components/Reveal";

const points = [
  "Items must be unworn, unwashed and in original packaging.",
  "Returns accepted within 7 days of delivery.",
  "Sale items are non-returnable unless defective.",
  "Exchanges are subject to stock availability.",
];

export default function ReturnExchangePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-canvas pt-28 md:pt-32">
      <div className="container-x py-10">
        <Reveal className="mb-12 border-b border-ink/10 pb-8">
          <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">No-stress returns</p>
          <h1 className="text-display text-5xl text-ink md:text-7xl">Returns & exchange</h1>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl space-y-8">
          <p className="font-archivo text-lg leading-relaxed text-ink">
            We want you to love your socks. If something isn't right, you can return or
            exchange your items within <span className="font-semibold text-ember">7 days</span> of delivery —
            quick, simple, no interrogation.
          </p>

          <ul className="space-y-4 border-y border-ink/15 py-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 font-archivo text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember text-cream">
                  <FiCheck className="text-xs" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <p className="font-archivo text-ink-soft">
            To start a return, email{" "}
            <a href="mailto:help@oversocks.com" className="font-semibold text-ink link-underline">help@oversocks.com</a>{" "}
            with your order number and we'll walk you through it.
          </p>

          <button onClick={() => navigate("/shop")} className="btn btn-solid flex">
            <FiArrowLeft /> Back to shop
          </button>
        </Reveal>
      </div>
    </main>
  );
}
