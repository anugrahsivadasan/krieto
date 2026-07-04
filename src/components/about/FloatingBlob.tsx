import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { createNoise4D } from "simplex-noise";
import * as THREE from "three";

type FloatingBlobProps = {
  position: [number, number, number];
  scale: number;
  speed: number;
  driftX: number;
  driftY: number;
  floatHeight: number;
  color: string;
  pointer: { x: number; y: number };
  phase: number;
};

const FloatingBlob = ({
  position,
  scale,
  speed,
  driftX,
  driftY,
  floatHeight,
  color,
  pointer,
  phase,
}: FloatingBlobProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const basePositionsRef = useRef<Float32Array | null>(null);
  const simplex = useMemo(() => createNoise4D(), []);
  const geometry = useMemo(() => {
    const blobGeometry = new THREE.SphereGeometry(1.2, 128, 128);
    blobGeometry.computeVertexNormals();
    basePositionsRef.current = new Float32Array(blobGeometry.attributes.position.array);
    return blobGeometry;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const mesh = meshRef.current;
    const geometryRef = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometryRef.getAttribute("position") as THREE.BufferAttribute;
    const normalAttribute = geometryRef.getAttribute("normal") as THREE.BufferAttribute;
    const basePositions = basePositionsRef.current;

    if (!basePositions) return;

    const t = state.clock.elapsedTime;
    const breathe = 1 + Math.sin(t * speed * 0.8 + phase) * 0.035 + Math.cos(t * speed * 0.42 + phase * 0.7) * 0.02;
    const targetX = position[0] + Math.sin(t * speed + phase) * (driftX + 0.08) + pointer.x * 0.08;
    const targetY = position[1] + Math.cos(t * speed * 1.16 + phase * 1.12) * (floatHeight + 0.06) + pointer.y * 0.05;
    const targetZ = position[2] + Math.sin(t * speed * 0.67 + phase * 0.9) * 0.24;

    mesh.position.set(targetX, targetY, targetZ);
    mesh.rotation.x = Math.sin(t * speed * 0.35 + phase) * 0.22 + pointer.y * 0.08;
    mesh.rotation.y = Math.cos(t * speed * 0.26 + phase * 1.2) * 0.2 + pointer.x * 0.06;
    mesh.rotation.z = Math.sin(t * speed * 0.42 + phase * 1.35) * 0.12;
    mesh.scale.setScalar(scale * breathe);

    const positionArray = positionAttribute.array as Float32Array;
    const normalArray = normalAttribute.array as Float32Array;
    const count = basePositions.length;
    const motion = 0.22 + Math.sin(t * speed * 0.7 + phase) * 0.04;

    for (let i = 0; i < count; i += 3) {
      const baseX = basePositions[i];
      const baseY = basePositions[i + 1];
      const baseZ = basePositions[i + 2];
      const nx = normalArray[i];
      const ny = normalArray[i + 1];
      const nz = normalArray[i + 2];

      const n1 = simplex(baseX * 0.95 + phase * 0.35, baseY * 0.8 + phase * 0.2, baseZ * 0.7 - phase * 0.1, t * 0.24 + phase);
      const n2 = simplex(baseX * 1.55 - phase * 0.2, baseY * 1.3 + phase * 0.25, baseZ * 1.08 + phase * 0.15, t * 0.18 + phase * 1.4);
      const n3 = simplex(baseX * 0.55 + phase * 0.4, baseY * 0.7 - phase * 0.2, baseZ * 1.3 + phase * 0.3, t * 0.32 + phase * 1.8);
      const deformation = (n1 * 0.48 + n2 * 0.28 + n3 * 0.22) * motion;

      positionArray[i] = baseX + nx * deformation;
      positionArray[i + 1] = baseY + ny * deformation;
      positionArray[i + 2] = baseZ + nz * deformation;
    }

    positionAttribute.needsUpdate = true;
    geometryRef.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} position={position} castShadow={false} receiveShadow={false}>
      <primitive object={geometry} attach="geometry" />
      <MeshTransmissionMaterial
        color={color}
        transmission={0.86}
        roughness={0.18}
        thickness={2.8}
        clearcoat={0.24}
        clearcoatRoughness={0.42}
        ior={1.4}
        chromaticAberration={0.06}
        anisotropy={0.16}
        attenuationColor="#004d66"
        attenuationDistance={1.1}
        backside
        transparent
        envMapIntensity={1.15}
        toneMapped={false}
      />
    </mesh>
  );
};

export default FloatingBlob;
