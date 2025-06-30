import { useRef, useEffect, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useVelocity,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

import dessert from "../assets/white.jpg";

// ------------------ Moving Strip Logic Copied Inside ------------------

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(() =>
      setWidth(ref.current.offsetWidth)
    );
    observer.observe(ref.current);
    setWidth(ref.current.offsetWidth);
    return () => observer.disconnect();
  }, [ref]);
  return width;
}

function VelocityScroller({
  text,
  direction = 1,
  velocity = 80,
  textSize = "text-[50px] md:text-[90px]",
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const ref = useRef(null);
  const width = useElementWidth(ref);

  const wrap = (min, max, v) =>
    ((((v - min) % (max - min)) + (max - min)) % (max - min)) + min;

  const x = useTransform(baseX, (v) => {
    if (width === 0) return "0px";
    return `${wrap(-width, 0, v)}px`;
  });

  useAnimationFrame((_, delta) => {
    let moveBy = direction * velocity * (delta / 500);
    moveBy += direction * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden w-full h-[100px] relative">
      <motion.div
        style={{ x }}
        className={`flex whitespace-nowrap ${textSize} font-extrabold uppercase tracking-[0.2em] text-gray opacity-30 select-none`}
      >
        <span ref={ref} className="mx-8">
          {text}
        </span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </motion.div>
    </div>
  );
}

// ------------------ 3D Model Section ------------------

function BackgroundModel() {
  const { scene } = useGLTF("/models/redsocks.glb");
  const modelRef = useRef();
  const clonedScene = clone(scene);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#EAE4D5",
          roughness: 0.01,
          metalness: 2,
          transparent: false,
        });
      }
    });
  }, [clonedScene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02;
    }
  });

  return <primitive object={clonedScene} ref={modelRef} scale={2} />;
}

// ------------------ HeroSection ------------------

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
      className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-white"
    >
      <motion.img
        src={dessert}
        alt="Oversocs Background"
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 w-[150vh] h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 z-0 opacity-100"
      />

      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[2, 2, 2]} />
          <Environment preset="warehouse" />
          <BackgroundModel />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center px-6 h-full justify-center">
        <div className="-translate-y-10 z-20 flex flex-col items-center">
          <p className="text-6xl md:text-6xl lg:text-7xl text-black  font-anton uppercase tracking-wide">
            step boldly
          </p>

          <p className="mt-4 -translate-y-3 font-anton text-black text-base md:text-2xl max-w-md leading-relaxed">
            COMFORT. CONFIDENCE . CRAFTED
            <br />
          </p>

          <button className="mt-8 text-black text-lg uppercase bg-red-500 px-8 py-3 hover:bg-black hover:text-red-500 transition-all duration-300 tracking-wider">
            Shop Now
          </button>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-[120px] z-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <polygon points="0,320 0,80 1440,320 1440,320" fill="#F5F5DC" />
      </svg>

      {/* Oversocs Moving Strip at Bottom */}
      <div className="absolute bottom-0 left-0 -translate-y-[70px] w-full z-30">
        <VelocityScroller
          text="OVERSOCS"
          direction={1}
          velocity={100}
          textSize="text-[80px] md:text-[80px]"
        />
        <VelocityScroller
          text="OVERSOCS"
          direction={-1}
          velocity={100}
          textSize="text-[80px] md:text-[80px]"
        />
      </div>
    </section>
  );
}
