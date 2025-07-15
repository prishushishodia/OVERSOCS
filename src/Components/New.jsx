import { useEffect, useRef } from "react";
import gsap from "gsap";
import prod1 from "../assets/1.jpg";
import prod2 from "../assets/2.jpg";

export default function New() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      const images = sectionRef.current.querySelectorAll(".image-item");
      gsap.from(images, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#FAF3E0]">
      
      {/* Heading & Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 flex justify-between items-center flex-wrap gap-4">
        <div ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-michroma text-black">New In</h2>
          <p className="text-gray-700 mt-2 max-w-sm">Upgrade your closet with everything trendy and new</p>
        </div>
        <button
          ref={buttonRef}
          className="px-6 py-2 bg-black text-[#F5F5DC] rounded-full hover:bg-red-500 hover:text-black transition-transform hover:scale-105"
        >
          Shop New Arrivals →
        </button>
      </div>

      {/* Full-Width Two Images */}
      <div className="flex w-screen h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="image-item w-1/2 h-full overflow-hidden">
          <img
            src={prod1}
            alt="Oversocs Classic Crew Socks"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="image-item w-1/2 h-full overflow-hidden">
          <img
            src={prod2}
            alt="Oversocs Bold Stripe Socks"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
