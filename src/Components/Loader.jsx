import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setExpand(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }, 1000);
      }, 600);
    }
  }, [percent, setIsLoading]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-[1200ms] ${
        expand ? "bg-red-400 scale-[10] opacity-0" : "bg-red-500"
      }`}
    >
      {/* Logo Top Left */}
     {/* Logo Centered */}


      {/* Oversocks Marquee */}
      <div className="w-full font-anton py-2 mt-12">
        <Marquee speed={50}>
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                className="mx-16 uppercase font-anton text-5xl tracking-widest text-black opacity-20"
              >
                OVERSOCKS
              </span>
            ))}
        </Marquee>
      </div>

      {/* Loading Button with Transition */}
      <div className="relative mt-16">
        <div
          className={`px-14 py-6 rounded-4xl text-2xl font-anton uppercase border border-black transition-all duration-700 ${
            loaded
              ? "bg-[#EAE4D5] text-black scale-110"
              : "bg-black text-white scale-100"
          } ${expand ? "opacity-0 scale-150" : ""}`}
        >
          {loaded ? "Welcome to OVERSOCKS" : `Loading ${percent}%`}
        </div>
      </div>
    </div>
  );
};

export default Loading;



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
