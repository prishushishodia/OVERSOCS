import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "./Marquee";

/**
 * Brand intro loader — purely typographic so it paints instantly and keeps
 * heavy 3D / vendor code off the critical path. Reveals the site with a
 * vertical clip-path wipe once loading completes.
 */
const Loading = ({ percent }) => {
  const { setIsLoading } = useLoading();
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      const t1 = setTimeout(() => {
        setExpand(true);
        const t2 = setTimeout(() => setIsLoading(false), 850);
        return () => clearTimeout(t2);
      }, 450);
      return () => clearTimeout(t1);
    }
  }, [percent, setIsLoading]);

  const shown = Math.min(100, Math.round(percent));

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-ink transition-[clip-path,opacity] duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        expand ? "opacity-0 [clip-path:inset(0_0_100%_0)]" : "opacity-100 [clip-path:inset(0_0_0_0)]"
      }`}
    >
      {/* Top kinetic band */}
      <div className="mt-16 border-y border-cream/10 py-4">
        <Marquee speed={16}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-display mx-8 text-5xl text-cream/10 md:text-7xl">
              OVERSOCKS <span className="text-ember/40">✱</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Center wordmark */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="relative">
          <h1 className="text-display text-center text-[22vw] leading-[0.8] text-cream md:text-[16rem]">
            STEP
          </h1>
          {/* Ember fill that rises with progress */}
          <div
            className="text-display pointer-events-none absolute inset-0 overflow-hidden text-center text-[22vw] leading-[0.8] text-ember md:text-[16rem]"
            style={{ clipPath: `inset(${100 - shown}% 0 0 0)` }}
          >
            STEP
          </div>
        </div>
        <p className="mt-2 text-display text-3xl text-cream/30 md:text-5xl">BOLDLY</p>
      </div>

      {/* Progress rail */}
      <div className="container-x w-full pb-10">
        <div className="flex items-end justify-between font-grotesk text-xs uppercase tracking-[0.25em] text-cream/50">
          <span>Lacing up</span>
          <span className="text-display text-5xl leading-none text-cream md:text-6xl">
            {shown.toString().padStart(3, "0")}
            <span className="text-ember">%</span>
          </span>
        </div>
        <div className="mt-4 h-[3px] w-full bg-cream/15">
          <div className="h-full bg-ember transition-[width] duration-300 ease-out" style={{ width: `${shown}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;

// Progress driver — eases to ~90% on a timer, then `loaded()` finishes the run.
export const setProgress = (setLoading) => {
  let percent = 0;
  let interval = setInterval(() => {
    if (percent <= 50) {
      percent += Math.round(Math.random() * 5);
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent += Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) clearInterval(interval);
      }, 2000);
    }
  }, 100);

  const clear = () => {
    clearInterval(interval);
    setLoading(100);
  };

  const loaded = () =>
    new Promise((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });

  return { loaded, percent, clear };
};
