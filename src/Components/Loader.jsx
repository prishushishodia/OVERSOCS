import { useEffect, useState, useRef } from "react";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

// 3D Model Component
const Model = () => {
  const { scene } = useGLTF("/models/oversocks.glb");
  const modelRef = useRef();

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.roughness = 0.01;     // Adjust roughness (0 = shiny, 1 = matte)
          child.material.metalness = 5;   
           child.material.color.set("#000000");  // Adjust metallic look (0 = plastic, 1 = metal)
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.00;
    }
  });

  return <primitive object={scene} ref={modelRef} scale={[6, 6, 6]} />;
};


// Loader UI
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

      {/* 3D Model Display */}
      <div className="relative w-[800px] h-[300px] mt-12">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 5]} />
          <Environment preset="studio" />
          <Model />
        </Canvas>
      </div>
    </div>
  );
};

export default Loading;

// 🚀 Export setProgress for loader logic
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
