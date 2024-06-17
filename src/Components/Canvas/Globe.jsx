import * as THREE from "three";
import { Points, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import CanvasLoader from "./Loader";
import { Stack } from "@mui/material";

// type GLTFResult = GLTF & {
//   nodes: {
//     Object_2: THREE.Mesh
//   }
//   materials: {
//     ['Scene_-_Root']: THREE.PointsMaterial
//   }
// }

export function Galaxy(props) {
  const ref = useRef(null);
  const galaxyCenterLightRef = useRef(null);
  const { nodes } = useGLTF("/space/galaxy.glb");
  const [positions, colors] = useMemo(() => {
    nodes.Object_2.geometry.center();
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer
    );
    const colors = new Float32Array(positions.length);

    const getDistanceToCenter = (x, y, z) => Math.sqrt(x * x + y * y + z * z);

    // make colors closer to 0,0,0 be more reddish and colors further away be more blueish
    const color = new THREE.Color();
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const distanceToCenter = getDistanceToCenter(x, y, z);
      const normalizedDistanceToCenter = distanceToCenter / 100;

      color.setRGB(
        Math.cos(normalizedDistanceToCenter),
        THREE.MathUtils.randFloat(0, 0.8),
        Math.sin(normalizedDistanceToCenter)
      );
      color.toArray(colors, i);
    }

    return [positions, colors];
  }, [nodes]);
  const starTexture = useLoader(THREE.TextureLoader, "/space/star.png");

  // slowly rotate the galaxy

  //  make particles glow
  const MyGalaxy = () => {
    let rotationAngle = 0;
    useFrame(({ clock }) => {
      rotationAngle += 0.0005; // Adjust this value for desired rotation speed

      ref.current.rotation.z = rotationAngle;
    });
    return (
      <group {...props} dispose={null} ref={ref}>
        <pointLight
          position={[0, 0, 0]}
          ref={galaxyCenterLightRef}
          intensity={0.3}
        />
        <Points scale={0.04} positions={positions} colors={colors}>
          <pointsMaterial
            map={starTexture}
            transparent
            depthWrite={false}
            vertexColors
            opacity={0.4}
            depthTest
            size={0.001}
          />
        </Points>
        <EffectComposer autoClear={false}>
          <SelectiveBloom
            intensity={0.5}
            luminanceThreshold={0.001}
            luminanceSmoothing={0.225}
            lights={[galaxyCenterLightRef]}
          />
        </EffectComposer>
      </group>
    );
  };
  return (
    <Stack position="absolute" top={0} zIndex={10} width="100%" height="100%">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <MyGalaxy />
        </Suspense>
      </Canvas>
    </Stack>
  );
}

useGLTF.preload("/space/galaxy.glb");
