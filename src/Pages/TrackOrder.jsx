import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPackage, FiTruck, FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import Reveal from "../Components/Reveal";

const steps = [
  { label: "Order Placed", icon: FiPackage, date: "Jun 10" },
  { label: "Shipped", icon: FiTruck, date: "Jun 11" },
  { label: "Delivered", icon: FiCheckCircle, date: "Est. Jun 14" },
];

export default function TrackOrderPage() {
  const navigate = useNavigate();
  const [current] = useState(1); // index of the active step

  return (
    <main className="min-h-screen bg-canvas pt-28 md:pt-32">
      <div className="container-x py-10">
        <Reveal className="mb-12 border-b border-ink/10 pb-8">
          <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">Where's my drop?</p>
          <h1 className="text-display text-5xl text-ink md:text-7xl">Track your order</h1>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl border border-ink/15 bg-canvas-deep p-8 md:p-12">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-2 font-grotesk text-sm">
            <span className="text-ink-soft">Order <span className="text-ink">#OS-24819</span></span>
            <span className="bg-ember px-3 py-1 text-xs uppercase tracking-wide text-cream">In transit</span>
          </div>

          {/* Stepper */}
          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-7 h-[2px] bg-ink/15" />
            <div
              className="absolute left-0 top-7 h-[2px] bg-ember transition-all duration-700"
              style={{ width: `${(current / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step, i) => {
              const Icon = step.icon;
              const done = i <= current;
              return (
                <div key={step.label} className="relative z-10 flex flex-1 flex-col items-center">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-colors ${
                      done ? "border-ember bg-ember text-cream" : "border-ink/20 bg-canvas text-ink-soft"
                    }`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <span className="mt-3 text-center font-grotesk text-xs uppercase tracking-wide text-ink">{step.label}</span>
                  <span className="font-grotesk text-[11px] text-ink-soft">{step.date}</span>
                </div>
              );
            })}
          </div>

          <button onClick={() => navigate("/shop")} className="btn btn-outline mx-auto mt-12 flex">
            <FiArrowLeft /> Back to shop
          </button>
        </Reveal>
      </div>
    </main>
  );
}
