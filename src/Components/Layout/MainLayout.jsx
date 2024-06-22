import { Box } from "@mui/material";
import React from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import HealthCare from "../../Pages/HealthCare/HealthCare";
import Business from "../../Pages/BusinessSolution/Business";
import AutoDatabase from "../../Pages/AutoDatabase/AutoDatabase";
import { StarsCanvas } from "../Canvas";

const MainLayout = () => {
  return (
    <Box>
      <StarsCanvas />
      <Home />
      <About />
      <Business />
      <HealthCare />
      <AutoDatabase />
    </Box>
  );
};

export default MainLayout;
