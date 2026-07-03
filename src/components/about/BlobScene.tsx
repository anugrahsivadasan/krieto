import { useMemo } from "react";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom, ToneMapping, SMAA } from "@react-three/postprocessing";
import BlobLights from "./BlobLights";
import FloatingBlob from "./FloatingBlob";

type PointerState = {
  x: number;
  y: number;
};

type BlobSceneProps = {
  pointer: PointerState;
};

const blobDefinitions = [
  {
    id: "large",
    position: [2.15, 0.25, -0.9] as [number, number, number],
    scale: 2.8,
    speed: 0.2,
    driftX: 0.28,
    driftY: 0.22,
    floatHeight: 0.18,
    color: "#00B4D8",
    phase: 0.35,
  },
  {
    id: "medium",
    position: [1.05, -0.4, 0.6] as [number, number, number],
    scale: 1.45,
    speed: 0.28,
    driftX: 0.2,
    driftY: 0.17,
    floatHeight: 0.14,
    color: "#90E0EF",
    phase: 1.7,
  },
  {
    id: "small",
    position: [1.65, 0.95, 1.3] as [number, number, number],
    scale: 0.9,
    speed: 0.38,
    driftX: 0.16,
    driftY: 0.11,
    floatHeight: 0.1,
    color: "#0077B6",
    phase: 2.8,
  },
] as const;

const BlobScene = ({ pointer }: BlobSceneProps) => {
  const blobs = useMemo(() => blobDefinitions, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={34} />
      <BlobLights />
      <Environment preset="city" />
      {blobs.map((blob) => (
        <FloatingBlob key={blob.id} {...blob} pointer={pointer} />
      ))}
      <EffectComposer multisampling={2}>
        <Bloom intensity={0.12} luminanceThreshold={0.18} luminanceSmoothing={0.2} mipmapBlur />
        <ToneMapping />
        <SMAA />
      </EffectComposer>
    </>
  );
};

export default BlobScene;
