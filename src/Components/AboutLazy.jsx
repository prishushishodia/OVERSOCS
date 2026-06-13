import { Suspense, lazy, useEffect, useRef, useState } from "react";

// WhyUs pulls in three.js + drei + gsap — keep all of it off the critical
// path and only fetch the chunk when the section is about to enter view.
const AboutUs = lazy(() => import("./WhyUs"));

export default function AboutLazy() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[60vh] bg-canvas">
      {show && (
        <Suspense fallback={<div className="min-h-[60vh] bg-canvas" />}>
          <AboutUs />
        </Suspense>
      )}
    </div>
  );
}
