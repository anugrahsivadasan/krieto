import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import BlobScene from "./BlobScene";

type PointerState = {
  x: number;
  y: number;
};

const BlobBackground = () => {
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    setPointer({ x, y });
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,180,216,0.22),transparent_42%),radial-gradient(ellipse_at_20%_80%,rgba(144,224,239,0.14),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "220px 220px",
        }}
      />
      <div className="absolute right-[-10%] top-[-8%] h-[78%] w-[44%] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.16),transparent_70%)] blur-[90px]" />

      <motion.div
        className="absolute inset-0"
        animate={{ x: pointer.x * 10, y: pointer.y * 10 }}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.35 }}
      >
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 7], fov: 34 }}
          style={{ width: "100%", height: "100%" }}
        >
          <BlobScene pointer={pointer} />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default BlobBackground;
