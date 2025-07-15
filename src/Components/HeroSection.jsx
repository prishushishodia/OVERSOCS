import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const images = [
    new URL("../assets/BG5.jpg", import.meta.url).href,
    new URL("../assets/BG4.jpg", import.meta.url).href,
    new URL("../assets/BG3.jpg", import.meta.url).href,
    new URL("../assets/BG2.jpg", import.meta.url).href,
    new URL("../assets/BG1.jpg", import.meta.url).href,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#F5F5DC]"
    >
      {/* Background Slideshow */}
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ y: bgY }}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center px-6 h-full justify-center">
        <div className="translate-y-60 z-20 flex flex-col items-center">
          <p className="text-6xl md:text-6xl lg:text-7xl text-white font-michroma  uppercase">
            Step <span className="font-black">boldly</span>
          </p>

          <p className="mt-4 -translate-y-3 font-anton text-white text-base md:text-2xl max-w-md leading-relaxed">
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
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full border border-black transition-all duration-300 ${
              index === currentSlide ? "bg-black" : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>

     
    </section>
  );
}
