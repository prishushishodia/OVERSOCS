import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

import dessert from "../assets/alterbg.jpg";
import logo from "../assets/LOGO.png";
import WaveLogo from "../Components/waveLogo";

function BackgroundModel() {
  const { scene } = useGLTF("/models/twosock.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.03; // Slow continuous rotation
    }
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#4B5258",
        roughness: 0.01,
        metalness: 1,
        transparent: true,
        opacity: 0.7, // Semi-transparent effect
      });
    }
  });

  return <primitive object={scene} ref={modelRef} scale={2.4} />;
}

export default function HeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.img
        src={dessert}
        alt="Oversocs Background"
        style={{ y: bgY }}
className="absolute top-0 bottom-1 left-0 w-full z-0 opacity-70"

      />

      {/* 3D Model Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[2, 2, 2]} />
          <Environment preset="warehouse" />
          <BackgroundModel />
        </Canvas>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center px-6 h-full justify-center">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Oversocs Logo"
          className="w-[clamp(200px,25vw,400px)] h-auto object-contain mb-6 z-20"
        />

        {/* Text Group */}
        <div className="-translate-y-35 z-20 flex flex-col items-center">
          <p className="text-4xl md:text-6xl lg:text-7xl text-gray-500 font-extrabold uppercase tracking-wide">
            Step Boldly
          </p>

          <p className="mt-4 -translate-y-3 font-bebas text-gray-400 text-base md:text-2xl max-w-md leading-relaxed">
            Comfort. Confidence. Crafted.<br />100% Cotton Socks
          </p>

          <button className="mt-8 text-black text-lg uppercase bg-red-500 px-8 py-3 hover:bg-black hover:text-red-500 transition-all duration-300 tracking-wider">
            Shop Now
          </button>
        </div>
      </div>

      {/* Decorative Diagonal Bottom Border */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[120px] z-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <polygon points="0,320 0,80 1440,320 1440,320" fill="#051023" />
      </svg>
    </section>
  );
}
