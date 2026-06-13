import { FiStar } from "react-icons/fi";
import Marquee from "./Marquee";
import Reveal, { RevealItem } from "./Reveal";
import review1 from "../assets/1.jpg";
import review2 from "../assets/2.jpg";
import review3 from "../assets/3.jpg";
import review4 from "../assets/4.jpg";
import review5 from "../assets/5.jpg";

const testimonials = [
  {
    quote: "The only socks I reach for now. They hug the ankle without choking it — and they survive the wash looking new.",
    name: "Aarav M.",
    handle: "@aaravruns",
  },
  {
    quote: "Got the Acid Trip crew and immediately got asked where they're from. Loud in the best way.",
    name: "Nisha K.",
    handle: "@nishawears",
  },
  {
    quote: "Compression pair held up through a half-marathon with zero blisters. Genuinely impressed.",
    name: "Dev R.",
    handle: "@devonfoot",
  },
];

const ugc = [review1, review2, review3, review4, review5];

export default function ReviewsSection() {
  return (
    <section className="bg-canvas-deep py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 inline-flex items-center gap-3 font-grotesk text-[11px] uppercase tracking-[0.3em] text-ember">
            <span className="h-px w-8 bg-ember" /> 4.9 / 5 from 2,300+ pairs sold
            <span className="h-px w-8 bg-ember" />
          </p>
          <h2 className="text-display text-5xl text-ink md:text-7xl">Loved by the bold</h2>
        </Reveal>

        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem
              key={t.name}
              className="flex flex-col justify-between border border-ink/15 bg-canvas p-8"
            >
              <div>
                <div className="mb-5 flex gap-1 text-ember">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className="fill-ember" />
                  ))}
                </div>
                <p className="font-archivo text-lg leading-relaxed text-ink">"{t.quote}"</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-grotesk text-sm text-cream">
                  {t.name.charAt(0)}
                </span>
                <div className="font-grotesk text-sm">
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="text-ink-soft">{t.handle}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>

      {/* UGC image strip */}
      <div className="mt-16">
        <Marquee speed={40} pauseOnHover>
          {ugc.map((src, i) => (
            <div key={i} className="mx-2 aspect-[4/5] w-56 shrink-0 overflow-hidden md:w-64">
              <img
                src={src}
                alt="From the community"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover sepia transition-all duration-500 hover:sepia-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
