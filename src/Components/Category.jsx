import { useEffect, useRef } from "react";
import gsap from "gsap";

import woman from "../assets/a.jpg";
import man from "../assets/a.jpg";
import kid from "../assets/c.jpg";

export default function CategorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const columns = sectionRef.current.querySelectorAll(".category-tile");
    gsap.fromTo(
      columns,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen font-Montserrat font-thin flex overflow-hidden">
      {/* MEN */}
      <div className="category-tile w-1/3 h-full relative group overflow-hidden cursor-pointer z-20">

        <img
          src={man}
          alt="Shop Men"
          className="w-full  border-red-400 h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-3xl md:text-4xl font-Montserrat uppercase mb-4">Shop Men</h2>
          <button className="px-6 py-2 bg-white text-black hover:bg-black hover:text-white transition uppercase tracking-wide">
            Explore
          </button>
        </div>
      </div>

      {/* WOMEN */}
      <div className="category-tile w-1/3 h-full relative group overflow-hidden cursor-pointer">
        <img
          src={woman}
          alt="Shop Womens"
          className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-3xl md:text-4xl font-Montserrat uppercase mb-4">Shop Women</h2>
          <button className="px-6 py-2 bg-white text-black hover:bg-black hover:text-white transition uppercase tracking-wide">
            Explore
          </button>
        </div>
      </div>

      {/* KIDS */}
      <div className="category-tile w-1/3 h-full relative group overflow-hidden cursor-pointer">
        <img
          src={kid}
          alt="Shop Kids"
          className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-3xl md:text-4xl font-Montserrat uppercase mb-4">Shop Kids</h2>
          <button className="px-6 py-2 bg-white text-black hover:bg-black hover:text-white transition uppercase tracking-wide">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
