import { motion } from "framer-motion";

/**
 * Reveal — scroll-triggered entrance used across the site for a
 * consistent, restrained motion language (fade + rise).
 *
 *   <Reveal>            // single element
 *   <Reveal as="li" delay={0.1}>
 *   <Reveal stagger>    // animates direct children in sequence
 */
const easeOutExpo = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  stagger = false,
  className = "",
  amount = 0.3,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  if (stagger) {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        transition={{ staggerChildren: 0.08, delayChildren: delay }}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: easeOutExpo, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Child of a <Reveal stagger> parent. */
export function RevealItem({ children, as = "div", y = 28, className = "", ...rest }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
