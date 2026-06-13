/**
 * Marquee — seamless infinite ticker built purely in CSS.
 * The track is duplicated and translated -50%, so the loop is gapless.
 *
 *   <Marquee>WORD ✱ WORD ✱</Marquee>
 *   <Marquee reverse speed={40}>...</Marquee>
 */
export default function Marquee({
  children,
  reverse = false,
  speed = 28,
  className = "",
  pauseOnHover = false,
}) {
  return (
    <div className={`group/marquee relative flex w-full overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 ${pauseOnHover ? "group-hover/marquee:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `${reverse ? "marquee-rev" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
