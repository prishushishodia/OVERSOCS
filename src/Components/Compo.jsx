import alterbg from "../assets/mnop.jpg";
import CircularText from "../ReactBits/CircularText";
import Reveal from "./Reveal";

/**
 * Manifesto — a full-bleed brand statement over imagery, anchored by the
 * spinning OVERSOCKS badge.
 */
export default function Manifesto() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${alterbg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />

      <div className="container-x relative grid w-full items-center gap-12 py-24 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 font-grotesk text-[11px] uppercase tracking-[0.3em] text-acid">
            <span className="h-px w-8 bg-acid" />
            The manifesto
          </p>
          <h2 className="text-display text-4xl leading-[0.95] text-cream sm:text-6xl md:text-7xl">
            Your socks should work
            <br />
            as <span className="text-ember">hard</span> as you do.
          </h2>
          <p className="mt-8 max-w-lg font-archivo text-base leading-relaxed text-cream/70 md:text-lg">
            We merge premium craftsmanship with fearless design — built for the
            people who notice the details and refuse to disappear in a crowd.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center md:justify-end">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-cream/20 md:h-72 md:w-72">
            <CircularText
              text="OVERSOCKS✱STEP✱BOLDLY✱"
              onHover="speedUp"
              spinDuration={16}
              className="text-cream"
            />
            <span className="absolute h-3 w-3 rounded-full bg-ember" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
