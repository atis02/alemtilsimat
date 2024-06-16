import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "./Loader";
import { Stack } from "@mui/material";
import { Color } from "three";

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const earth = useGLTF("./planet8/scene.gltf");
  const skyBlue = new Color(0x007bff); // Cooler blue for hemisphere light
  const warmYellow = new Color(0xffd700); // Warmer yellow for point light

  const Earth = ({ isMobile, isTablet }) => {
    const Planet = useGLTF("/planet8/scene.gltf");

    return (
      <mesh>
        <hemisphereLight intensity={3} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={Planet.scene}
          scale={isMobile ? 4 : isTablet ? 2.5 : 3.75}
          position={
            isMobile ? [0, -5.5, 0] : isTablet ? [0, -1.5, 0] : [0, -4.25, 0]
          }
          // rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    );
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const mediaQueryTablet = window.matchMedia("(max-width: 768px)");
    setIsTablet(mediaQueryTablet.matches);
    const handleMediaQueryChangeTablet = (event) => {
      setIsTablet(event.matches);
    };
    mediaQueryTablet.addEventListener("change", handleMediaQueryChangeTablet);

    return () => {
      mediaQueryTablet.removeEventListener(
        "change",
        handleMediaQueryChangeTablet
      );
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Stack
      width={{ lg: "38%", md: "50%", sm: "50%", xs: "100%" }}
      height={{ lg: "465px", md: "465px", sm: "465px", xs: "205px" }}
      alignItems="center"
    >
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
          <Earth isMobile={isMobile} isTablet={isTablet} />
        </Suspense>
        <Preload all />
      </Canvas>
    </Stack>
  );
};

export default EarthCanvas;
