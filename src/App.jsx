import { Box, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "./Utils/motion";
import { CanvasLoader, EarthCanvas, StarsCanvas } from "./Components/Canvas";
import { Galaxy } from "./Components/Canvas/Globe";
import About from "./Pages/About/About";
import MainLayout from "./Components/Layout/MainLayout";
import Footer from "./Pages/Footer/Footer";
import Demo from "./Pages/Demo/Demo";
import Contacts from "./Pages/Contacts/Contacts";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 10000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Galaxy /> */}
      {/* {loader ? (
      ) : ( */}
      <Box sx={{ backgroundColor: "#04101c", minHeight: "100vh" }}>
        {/* <StarsCanvas /> */}
        {/* <Galaxy /> */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Box>
      {/* )} */}
    </>
  );
}
export default App;
