import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import HealthCare from "../../Pages/HealthCare/HealthCare";
import Business from "../../Pages/BusinessSolution/Business";
import AutoDatabase from "../../Pages/AutoDatabase/AutoDatabase";
import { Galaxy } from "../Canvas/Galaxy";

const MainLayout = () => {
  const [showGalaxy, setShowGalaxy] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY < 800;
      setShowGalaxy(isAtTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {showGalaxy ? <Galaxy /> : ""}

      <Home />
      <About />
      <AutoDatabase />
      <HealthCare />
      <Business />
    </Box>
  );
};

export default MainLayout;
