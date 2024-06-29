import { Box, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "./Utils/motion";
import { CanvasLoader } from "./Components/Canvas";
import About from "./Pages/About/About";
import MainLayout from "./Components/Layout/MainLayout";
import Footer from "./Pages/Footer/Footer";
import Contacts from "./Pages/Contacts/Contacts";
import Login from "./Pages/Demo/components/Login";
import Demo from "./Pages/Demo/Demo";

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
      {/* {loader ? (
      ) : ( */}
      <Box sx={{ backgroundColor: "#04101c", minHeight: "100vh" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/demo" element={<Login />} />
            <Route path="/projects" element={<Demo />} />
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
