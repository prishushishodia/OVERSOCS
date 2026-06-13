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
    <div className="relative h-[100px] w-full overflow-hidden">
      <motion.div
        style={{ x }}
        className={`text-display flex whitespace-nowrap ${textSize} select-none uppercase tracking-[0.1em] text-ink/[0.07]`}
      >
        <span ref={ref} className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </motion.div>
    </div>
  );
}

function ShinyModel() {
  const { scene } = useGLTF("/models/redsocks.glb");
  const modelRef = useRef();

  useFrame((_, delta) => {
    if (modelRef.current) modelRef.current.rotation.y += delta * 0.6;
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#2c1f14",
        roughness: 0.25,
        metalness: 0.7,
      });
    }
  });

  return <primitive object={scene} ref={modelRef} scale={1.3} />;
}

const pillars = [
  {
    title: "Uncompromising Quality",
    desc: "Every pair is crafted from premium combed cotton with reinforced heels and hand-linked toes — durability you feel from day one.",
  },
  {
    title: "Statement Style",
    desc: "From sleek minimal essentials to loud, unapologetic colourways, our designs are made to turn heads on purpose.",
  },
  {
    title: "All-Day Comfort",
    desc: "Breathable, engineered knit zones and cushioned footbeds deliver lasting comfort with zero slouch.",
  },
  {
    title: "Global Delivery",
    desc: "Lightning-fast dispatch and worldwide shipping — your next bold pair is only days away.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-canvas px-4 py-32 text-ink md:py-40">
      {/* Kinetic background type */}
      <div className="pointer-events-none absolute inset-x-0 top-16 z-0 space-y-2">
        <VelocityScroller text="OVERSOCKS ✱ OVERSOCKS" direction={1} velocity={70} textSize="text-[60px] md:text-[110px]" />
        <VelocityScroller text="STEP BOLDLY ✱ STEP BOLDLY" direction={-1} velocity={70} textSize="text-[60px] md:text-[110px]" />
      </div>

      {/* Floating 3D sock */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-80">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[3, 2, 2]} intensity={1.4} />
          <Environment preset="warehouse" />
          <ShinyModel />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-20 text-center">
        <ScrollFloat containerClassName="text-display text-5xl text-ember md:text-7xl">
          About OVERSOCKS
        </ScrollFloat>

        <ScrollFloat textClassName="font-archivo text-lg leading-relaxed text-ink md:text-xl max-w-3xl mx-auto block">
          Oversocks was born from a simple belief — your socks should work as hard as you do while making a bold statement. We merge premium craftsmanship with fearless design, built for those who refuse to blend in.
        </ScrollFloat>

        <div className="grid gap-12 pt-10 text-left md:grid-cols-2">
          {pillars.map(({ title, desc }) => (
            <div key={title} className="group space-y-4 border-t border-ink/15 pt-6">
              <ScrollFloat containerClassName="text-display text-3xl md:text-4xl text-ink group-hover:text-ember transition-colors">
                {title}
              </ScrollFloat>
              <ScrollFloat textClassName="font-archivo text-base leading-relaxed text-ink-soft md:text-lg block">
                {desc}
              </ScrollFloat>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
