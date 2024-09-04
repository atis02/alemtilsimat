import { Box } from "@mui/material";
import React from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import HealthCare from "../../Pages/HealthCare/HealthCare";
import Business from "../../Pages/BusinessSolution/Business";
import AutoDatabase from "../../Pages/AutoDatabase/AutoDatabase";

const MainLayout = () => {
  return (
    <Box>
      <Home />
      <About />
      <AutoDatabase />
      <Business />
      <HealthCare />
    </Box>
  );
};

export default MainLayout;
