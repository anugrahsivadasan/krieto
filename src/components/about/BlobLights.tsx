import { useMemo } from "react";

type LightConfig = {
  position: [number, number, number];
  intensity: number;
  color: string;
  distance: number;
};

const BlobLights = () => {
  const lights = useMemo<LightConfig[]>(
    () => [
      {
        position: [-4.2, 2.2, 3.8],
        intensity: 1.25,
        color: "#00B4D8",
        distance: 16,
      },
      {
        position: [3.6, 1.55, 4.2],
        intensity: 0.85,
        color: "#FFFFFF",
        distance: 14,
      },
      {
        position: [0.8, -2.5, 2.6],
        intensity: 0.45,
        color: "#0077B6",
        distance: 11,
      },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} color="#07111F" />
      <hemisphereLight intensity={0.32} color="#f8fbff" groundColor="#020617" />
      {lights.map((light) => (
        <pointLight
          key={`${light.position.join("-")}-${light.color}`}
          position={light.position}
          intensity={light.intensity}
          color={light.color}
          distance={light.distance}
        />
      ))}
      <directionalLight position={[3.1, 1.1, 4.1]} intensity={0.55} color="#F8FAFC" />
      <directionalLight position={[-2.6, -1.2, 3.2]} intensity={0.3} color="#00B4D8" />
      <spotLight position={[0, 0, 6]} intensity={0.45} color="#9BE8FF" angle={0.45} penumbra={0.35} />
    </>
  );
};

export default BlobLights;
