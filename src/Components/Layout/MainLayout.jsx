import { Box } from "@mui/material";
import React from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import HealthCare from "../../Pages/HealthCare/HealthCare";
import Business from "../../Pages/BusinessSolution/Business";
import AutoDatabase from "../../Pages/AutoDatabase/AutoDatabase";
import { StarsCanvas } from "../Canvas";
import { Galaxy } from "../Canvas/Globe";

const MainLayout = () => {
  return (
    <Box>
      {/* <StarsCanvas /> */}
      {/* <Galaxy /> */}
      <Home />
      <About />
      <Business />
      <HealthCare />
      <AutoDatabase />
    </Box>
  );
};

export default MainLayout;
