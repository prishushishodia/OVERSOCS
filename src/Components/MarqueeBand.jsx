import Marquee from "./Marquee";

/**
 * Full-bleed kinetic divider in ember — the brand "heartbeat" that
 * separates the hero from the catalogue.
 */
export default function MarqueeBand() {
  const words = ["Step Boldly", "Ankle-Up Attitude", "Crafted in Comfort", "Refuse to Blend In"];
  return (
    <div className="border-y border-ink bg-ember py-4">
      <Marquee speed={26}>
        {words.map((w) => (
          <span
            key={w}
            className="text-display mx-8 text-4xl uppercase text-cream md:text-6xl"
          >
            {w}
            <span className="mx-8 text-ink">✱</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
