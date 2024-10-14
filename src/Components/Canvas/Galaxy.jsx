
import * as THREE from "three";
import { Points, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import CanvasLoader from "./Loader";
import { Stack } from "@mui/material";


export function Galaxy(props) {
  const ref = useRef(null);
  const galaxyCenterLightRef = useRef(null);
  const { nodes } = useGLTF("/space/galaxy.glb");
  const starTexture = useLoader(THREE.TextureLoader, "/space/star.png");
  const [positions, colors] = useMemo(() => {
    nodes.Object_2.geometry.center();
    const positions = new Float32Array(nodes.Object_2.geometry.attributes.position.array.buffer);
    const colors = new Float32Array(positions.length);


    const getDistanceToCenter = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
    // useEffect(() => {
    //   // Cleanup function to dispose of geometry and texture
    //   return () => {
    //     if (nodes?.Object_2?.geometry) {
    //       nodes.Object_2.geometry.dispose();
    //     }
    //     if (starTexture) {
    //       starTexture.dispose();
    //     }
    //   };
    // }, [nodes, starTexture]); 
    
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

  // slowly rotate the galaxy

  //  make particles glow
  const MyGalaxy = () => {
 
  
    // Rotate the galaxy to lay flat horizontally (rotate 90 degrees around X-axis)
    useEffect(() => {
      if (ref.current) {
        ref.current.rotation.x = Math.PI / 2; // 90 degrees in radians
      }
    }, []);
    let rotationAngle = 0;
    // useFrame(({ clock }) => {
    //   rotationAngle += 0.003; // Adjust this value for desired rotation speed

    //   ref.current.rotation.z = rotationAngle;
    // });
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime(); // Total time in seconds since the scene started
      ref.current.rotation.z = -(elapsedTime / 60) * 2 * Math.PI; // One full rotation every 60 seconds
    });
    return (
      <group {...props} dispose={null} ref={ref}>
        <pointLight
          position={[0,0,0]}
          ref={galaxyCenterLightRef}
          intensity={0.8}
        />
         <ambientLight intensity={0.3} /> 
        <Points scale={0.05} positions={positions} colors={colors}>
          <pointsMaterial
            map={starTexture}
            transparent
            depthWrite={false}
            vertexColors
            opacity={0.2}
            depthTest
            size={0.01}
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
    <Stack position="absolute" top={{lg:0,md:0,sm:0,xs:0}}   zIndex={10} width="100%" height={{lg:"100%",md:"100%",sm:"100%",xs:"100%"}}>
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
         
          autoRotate
          autoRotateSpeed={0.1} 
          enableZoom={false}
          minAzimuthAngle={90} 
          maxAzimuthAngle={Math.PI * 4}
          />
          <MyGalaxy />
        </Suspense>
      </Canvas>
    </Stack>
  );
}

useGLTF.preload("/space/galaxy.glb");





