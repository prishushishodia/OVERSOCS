import { useRef } from "react";
import bg from "../assets/bg.jpg"; // ✅ Make sure this path is correct

export default function HeroSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center text-center px-6 z-10"
    >
      {/* ✅ Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-[-1]"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Foreground Content */}
      <div className="max-w-7xl translate-y-50 mx-auto flex flex-col items-center">
        <p className="text-6xl md:text-6xl lg:text-7xl text-white font-extralight font-Montserrat uppercase">
          Step <span className="font-black">boldly</span>
        </p>
        <p className="mt-4 font-Montserrat font-light text-white text-base md:text-2xl max-w-md leading-relaxed">
          COMFORT. CONFIDENCE. CRAFTED
        </p>
        <button
          className="mt-8 text-black text-lg uppercase bg-[#FF0000] px-8 py-3 
                     hover:bg-black hover:text-[#FF0000] hover:scale-110 
                     cursor-pointer transition-all duration-300 tracking-wider transform"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
