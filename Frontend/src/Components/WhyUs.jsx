import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

import ScrollFloat from "../Components/ScrollFloat";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(() => setWidth(ref.current.offsetWidth));
    observer.observe(ref.current);
    setWidth(ref.current.offsetWidth);
    return () => observer.disconnect();
  }, [ref]);
  return width;
}

function VelocityScroller({ text, direction = 1, velocity = 80, textSize = "text-[50px] md:text-[90px]" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const ref = useRef(null);
  const width = useElementWidth(ref);

  const wrap = (min, max, v) => (((v - min) % (max - min)) + (max - min)) % (max - min) + min;

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
        className={`flex whitespace-nowrap ${textSize} font-extrabold uppercase tracking-[0.2em] text-black opacity-20 select-none`}
      >
        <span ref={ref} className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </motion.div>
    </div>
  );
}

function ShinyModel({ scale = 5 }) {
  const { scene } = useGLTF("/models/redsocks.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) modelRef.current.rotation.y += 0.025;
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#000000",
        roughness: 0.01,
        metalness: 5,
      });
    }
  });

  return <primitive object={scene} ref={modelRef} scale={1.34} />;
}

export default function AboutUs() {
  return (
    <section id="about" className="relative py-80 px-4 text-black z-10 bg-[#F5F5DC] overflow-hidden">

      <div className="absolute top-30 -left-20 w-[500px] h-[400px] bg-red-500 opacity-30 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-30 -right-20 w-[500px] h-[500px] bg-white opacity-80 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-20 -left-0 w-[600px] h-[600px] bg-[#B6B09F] opacity-70 blur-3xl rounded-full z-0" />

      <div className="absolute top-12 left-0 w-full text-black z-0 space-y-4">
        <VelocityScroller text="OVERSOCKS" direction={-1} velocity={80} textSize="text-[50px] md:text-[80px]" />


      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-70">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[3, 2, 2]} />
          <Environment preset="warehouse" />
          <ShinyModel scale={1.35} />
        </Canvas>
      </div>

      <div className="space-y-20 relative z-10 max-w-5xl mx-auto text-center">
        <ScrollFloat containerClassName="text-5xl text-black md:text-6xl font-anton font-extrabold uppercase tracking-widest">
          About OVERSOCKS
        </ScrollFloat>

        <ScrollFloat textClassName="text-black leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
          Oversocks was born from a simple belief — your socks should work as hard as you do, while making a bold statement We merge premium craftsmanship with fearless design, built for those who refuse to blend in.
        </ScrollFloat>

        <div className="grid md:grid-cols-2 gap-12 pt-10">
          {[{
            title: "Uncompromising Quality",
            desc: "Every pair is crafted from premium materials, combining durability, comfort, and fearless design for those who refuse to blend in."
          }, {
            title: "Statement-Making Style",
            desc: "Our bold designs are crafted to turn heads — from sleek minimal essentials to loud, unapologetic looks."
          }, {
            title: "All-Day Comfort",
            desc: "Breathable, engineered fabrics that deliver lasting comfort — no compromises, no shortcuts, just relentless performance."
          }, {
            title: "Global Delivery",
            desc: "Oversocks ships worldwide with lightning-fast dispatch — your next bold look is only days away."
          }].map(({ title, desc }) => (
            <div key={title} className="space-y-6 group">
              <ScrollFloat containerClassName="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-black group-hover:text-red-500 transition-all">
                {title}
              </ScrollFloat>
              <ScrollFloat textClassName="text-black leading-relaxed text-lg md:text-xl ">
                {desc}
              </ScrollFloat>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}