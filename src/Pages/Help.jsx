import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Reveal from "../Components/Reveal";

const faqs = [
  { q: "What is the delivery time?", a: "Orders are dispatched within 24 hours and delivered in 2–5 business days across India." },
  { q: "How can I track my order?", a: "Head to Track Order in the footer, or visit /track-order and enter your order number." },
  { q: "What is your return & exchange policy?", a: "Return or exchange unworn pairs within 7 days of delivery for a full refund or free size swap." },
  { q: "Do you ship internationally?", a: "Yes — we ship worldwide with lightning-fast dispatch. Duties may apply at checkout." },
  { q: "How do I find my size?", a: "Each product page has a size guide. When in doubt, size down — our cuffs have generous stretch." },
  { q: "How can I contact support?", a: "Email help@oversocks.com and our team will reply within one business day." },
];

export default function HelpPage() {
  const [open, setOpen] = useState(0);

  return (
    <main className="min-h-screen bg-canvas pt-28 md:pt-32">
      <div className="container-x py-10">
        <Reveal className="mb-12 border-b border-ink/10 pb-8">
          <p className="mb-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">We've got you</p>
          <h1 className="text-display text-5xl text-ink md:text-7xl">Help & FAQs</h1>
        </Reveal>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ink/15">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="font-grotesk text-lg uppercase tracking-wide text-ink">{faq.q}</span>
                <FiChevronDown className={`shrink-0 text-xl text-ember transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <p className="pb-6 font-archivo text-base leading-relaxed text-ink-soft">{faq.a}</p>
              )}
            </div>
          ))}

          <div className="mt-12 flex flex-col items-center gap-4 border border-ink/15 bg-canvas-deep p-10 text-center">
            <h2 className="text-display text-3xl text-ink">Still stuck?</h2>
            <p className="max-w-md font-archivo text-ink-soft">Our team replies within a business day. We're happy to help with sizing, orders or anything else.</p>
            <a href="mailto:help@oversocks.com" className="btn btn-solid mt-2">Email support</a>
            <Link to="/track-order" className="font-grotesk text-xs uppercase tracking-[0.18em] text-ink link-underline">Track an order instead</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
