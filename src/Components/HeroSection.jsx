import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";
import bg from "../assets/bg.jpg";
import Marquee from "./Marquee";

const easeOutExpo = [0.16, 1, 0.3, 1];
const rise = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo, delay: 0.15 * i },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image + cinematic ink wash */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      {/* Content */}
      <div className="container-x relative flex h-full flex-col justify-end pb-28 pt-32">
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mb-6 flex items-center gap-3 font-grotesk text-[11px] uppercase tracking-[0.3em] text-cream/70"
        >
          <span className="h-px w-10 bg-ember" />
          Premium statement socks · Est. for the bold
        </motion.p>

        <h1 className="text-display text-cream">
          <motion.span
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="block text-[18vw] leading-[0.82] sm:text-[15vw] lg:text-[12rem]"
          >
            Step
          </motion.span>
          <motion.span
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            className="block text-[18vw] leading-[0.82] text-stroke-cream sm:text-[15vw] lg:text-[12rem]"
          >
            Boldly<span className="text-ember not-italic [-webkit-text-stroke:0]">.</span>
          </motion.span>
        </h1>

        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md font-archivo text-base leading-relaxed text-cream/80 md:text-lg">
            Comfort, confidence and craft — engineered into every pair.
            Socks for people who refuse to blend in.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn btn-solid bg-ember border-ember hover:bg-cream hover:text-ink">
              Shop the drop
            </Link>
            <Link
              to="/shop?tag=new"
              className="btn btn-outline border-cream/40 text-cream hover:bg-cream hover:text-ink"
            >
              New in <FiArrowDownRight />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom kinetic strip */}
      <div className="absolute inset-x-0 bottom-0 border-t border-cream/15 bg-ink/30 py-3 backdrop-blur-sm">
        <Marquee speed={24}>
          {["Comfort", "Confidence", "Crafted", "Fearless", "Ankle-up"].map((w) => (
            <span
              key={w}
              className="mx-6 font-grotesk text-sm uppercase tracking-[0.3em] text-cream/60"
            >
              {w} <span className="text-ember">✱</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
