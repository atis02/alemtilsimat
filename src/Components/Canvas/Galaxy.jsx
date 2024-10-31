// import * as THREE from "three";
// import { Points, useGLTF, OrbitControls, Sphere } from "@react-three/drei"; // Import Sphere from drei
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { Suspense, useEffect, useMemo, useRef } from "react";
// import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
// import CanvasLoader from "./Loader";
// import { Stack } from "@mui/material";

// export function Galaxy(props) {
//   const ref = useRef(null);
//   const galaxyCenterLightRef = useRef(null);
//   const { nodes } = useGLTF("/space/galaxy.glb");
//   const starTexture = useLoader(THREE.TextureLoader, "/space/star.png");

//   const [positions, colors] = useMemo(() => {
//     nodes.Object_2.geometry.center();
//     const positions = new Float32Array(
//       nodes.Object_2.geometry.attributes.position.array.buffer
//     );
//     const colors = new Float32Array(positions.length);

//     const getDistanceToCenter = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
//     const color = new THREE.Color();
//     for (let i = 0; i < positions.length; i += 3) {
//       const x = positions[i];
//       const y = positions[i + 1];
//       const z = positions[i + 2];
//       const distanceToCenter = getDistanceToCenter(x, y, z);
//       const normalizedDistanceToCenter = distanceToCenter / 100;

//       color.setRGB(
//         Math.cos(normalizedDistanceToCenter),
//         THREE.MathUtils.randFloat(0, 0.8),
//         Math.sin(normalizedDistanceToCenter)
//       );
//       color.toArray(colors, i);
//     }

//     return [positions, colors];
//   }, [nodes]);

//   const MyGalaxy = () => {
//     useEffect(() => {
//       if (ref.current) {
//         ref.current.rotation.x = Math.PI / 1.5; // Lay it horizontally
//         ref.current.rotation.z = Math.PI / 3; // Set fixed rotation to 120 degrees
//       }
//       return () => {
//         if (nodes?.Object_2?.geometry) {
//           nodes.Object_2.geometry.dispose(); // Free the geometry
//         }
//         if (starTexture) {
//           starTexture.dispose(); // Free the texture
//         }
//       };
//     }, [nodes, starTexture]);

//     useFrame(({ clock }) => {
//       const elapsedTime = clock.getElapsedTime();
//       ref.current.rotation.z = -(elapsedTime / 60) * 2 * Math.PI; // Rotate the galaxy
//     });

//     return (
//       <group {...props} dispose={null} ref={ref}>
//         <pointLight
//           position={[0, 0, 0]}
//           ref={galaxyCenterLightRef}
//           intensity={0.8}
//         />
//         <Points scale={0.05} positions={positions} colors={colors}>
//           <pointsMaterial
//             map={starTexture}
//             transparent
//             depthWrite={false}
//             vertexColors
//             opacity={0.2}
//             depthTest
//             size={0.01}
//           />
//         </Points>
//         <EffectComposer autoClear={false}>
//           <SelectiveBloom
//             intensity={0.5}
//             luminanceThreshold={0.001}
//             luminanceSmoothing={0.225}
//             lights={[galaxyCenterLightRef]}
//           />
//         </EffectComposer>
//       </group>
//     );
//   };

//   return (
//     <Stack
//       position="absolute"
//       sx={{ cursor: "pointer" }}
//       top={{ lg: 0, md: 0, sm: 0, xs: 0 }}
//       zIndex={1000}
//       width={{ lg: "80%", md: "100%", sm: "100%", xs: "100%" }}
//       right={0}
//       height={{ lg: "100%", md: "100%", sm: "100%", xs: "100%" }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [25, 3, 5], fov: 25 }}
//         gl={{ preserveDrawingBuffer: true, alpha: true }} // Ensure alpha is true
//         style={{ background: "none" }} // Ensure the canvas itself has no background
//         onCreated={({ gl }) => {
//           gl.setClearColor(0x000000, 0); // Set the WebGL clear color to fully transparent
//         }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             enableZoom={false}
//             autoRotate
//             target={[0, 0, 0]}
//             autoRotateSpeed={0.01}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//           <MyGalaxy />
//         </Suspense>
//       </Canvas>
//     </Stack>
//   );
// }

// useGLTF.preload("/space/galaxy.glb");

// import * as THREE from "three";
// import { Points, useGLTF, OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { Suspense, useEffect, useMemo, useRef, useState } from "react";
// import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
// import CanvasLoader from "./Loader";
// import { Stack } from "@mui/material";

// export function Galaxy(props) {
//   const ref = useRef(null);
//   const galaxyCenterLightRef = useRef(null);
//   const galaxyContainerRef = useRef(null); // Ref for IntersectionObserver
//   const { nodes } = useGLTF("/space/galaxy.glb");
//   const starTexture = useLoader(THREE.TextureLoader, "/space/star.png");

//   const [positions, colors] = useMemo(() => {
//     nodes.Object_2.geometry.center();
//     const positions = new Float32Array(
//       nodes.Object_2.geometry.attributes.position.array.buffer
//     );
//     const colors = new Float32Array(positions.length);

//     const getDistanceToCenter = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
//     const color = new THREE.Color();
//     for (let i = 0; i < positions.length; i += 3) {
//       const x = positions[i];
//       const y = positions[i + 1];
//       const z = positions[i + 2];
//       const distanceToCenter = getDistanceToCenter(x, y, z);
//       const normalizedDistanceToCenter = distanceToCenter / 100;

//       color.setRGB(
//         Math.cos(normalizedDistanceToCenter),
//         THREE.MathUtils.randFloat(0, 0.8),
//         Math.sin(normalizedDistanceToCenter)
//       );
//       color.toArray(colors, i);
//     }

//     return [positions, colors];
//   }, [nodes]);

//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.1 } // Trigger when at least 10% of the component is visible
//     );
//     if (galaxyContainerRef.current) {
//       observer.observe(galaxyContainerRef.current);
//     }
//     return () => observer.disconnect();
//   }, []);

//   const MyGalaxy = () => {
//     useEffect(() => {
//       if (ref.current) {
//         ref.current.rotation.x = Math.PI / 1.5;
//         ref.current.rotation.z = Math.PI / 3;
//       }
//       return () => {
//         if (nodes?.Object_2?.geometry) {
//           nodes.Object_2.geometry.dispose();
//         }
//         if (starTexture) {
//           starTexture.dispose();
//         }
//       };
//     }, [nodes, starTexture]);

//     useFrame(({ clock }) => {
//       if (isVisible) {
//         const elapsedTime = clock.getElapsedTime();
//         ref.current.rotation.z = -(elapsedTime / 60) * 2 * Math.PI;
//       }
//     });

//     return (
//       <group {...props} dispose={null} ref={ref}>
//         <pointLight
//           position={[0, 0, 0]}
//           ref={galaxyCenterLightRef}
//           intensity={0.8}
//         />
//         <Points scale={0.05} positions={positions} colors={colors}>
//           <pointsMaterial
//             map={starTexture}
//             transparent
//             depthWrite={false}
//             vertexColors
//             opacity={0.2}
//             depthTest
//             size={0.01}
//           />
//         </Points>
//         <EffectComposer autoClear={false}>
//           <SelectiveBloom
//             intensity={0.5}
//             luminanceThreshold={0.001}
//             luminanceSmoothing={0.225}
//             lights={[galaxyCenterLightRef]}
//           />
//         </EffectComposer>
//       </group>
//     );
//   };

//   return (
//     <Stack
//       position="absolute"
//       ref={galaxyContainerRef} // Attach ref to track visibility
//       sx={{ cursor: "pointer" }}
//       top={{ lg: 0, md: 0, sm: 0, xs: 0 }}
//       zIndex={1000}
//       width={{ lg: "80%", md: "100%", sm: "100%", xs: "100%" }}
//       right={0}
//       height={{ lg: "100%", md: "100%", sm: "100%", xs: "100%" }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [25, 3, 5], fov: 25 }}
//         gl={{ preserveDrawingBuffer: true, alpha: true }}
//         style={{ background: "none" }}
//         onCreated={({ gl }) => {
//           gl.setClearColor(0x000000, 0);
//         }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             enableZoom={false}
//             autoRotate
//             target={[0, 0, 0]}
//             autoRotateSpeed={0.01}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//           <MyGalaxy />
//         </Suspense>
//       </Canvas>
//     </Stack>
//   );
// }

// useGLTF.preload("/space/galaxy.glb");

import * as THREE from "three";
import { Points, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
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
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer
    );
    const colors = new Float32Array(positions.length);

    const getDistanceToCenter = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
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

  const MyGalaxy = () => {
    useEffect(() => {
      if (ref.current) {
        ref.current.rotation.x = Math.PI / 1.5;
        ref.current.rotation.z = Math.PI / 3;
      }
      return () => {
        if (nodes?.Object_2?.geometry) {
          nodes.Object_2.geometry.dispose();
        }
        if (starTexture) {
          starTexture.dispose();
        }
      };
    }, [nodes, starTexture]);

    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      ref.current.rotation.z = -(elapsedTime / 60) * 2 * Math.PI;
    });

    return (
      <group {...props} dispose={null} ref={ref}>
        <pointLight
          position={[0, 0, 0]}
          ref={galaxyCenterLightRef}
          intensity={0.8}
        />
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
    <Stack
      position="absolute"
      sx={{ cursor: "pointer" }}
      top={{ lg: 0, md: 0, sm: 0, xs: 0 }}
      zIndex={1000}
      width={{ lg: "80%", md: "100%", sm: "100%", xs: "100%" }}
      right={0}
      height={{ lg: "100%", md: "100%", sm: "100%", xs: "100%" }}
    >
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [25, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        style={{ background: "none" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            target={[0, 0, 0]}
            autoRotateSpeed={0.01}
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
