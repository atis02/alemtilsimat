import { Box, Stack, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import MainLayout from "./Components/Layout/MainLayout";
import Footer from "./Pages/Footer/Footer";
import Contacts from "./Pages/Contacts/Contacts";
import Login from "./Pages/Demo/components/Login";
import Demo from "./Pages/Demo/Demo";
import { HashLoader } from "react-spinners";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <>
      {loader ? (
        <Stack
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#04101c"
          color="#blue"
        >
          <HashLoader
            color="#0cfefc"
            loading={loader}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <Typography
            fontFamily="Roboto"
            // fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 74, md: 44, sm: 44, xs: 30 }}
            mt={2}
            lineHeight={{
              lg: "78px",
              md: "76px",
              sm: "46px",
              xs: "36px",
            }}
            textAlign={{
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            }}
            className="main-title"
          >
            Älem Tilsimat
          </Typography>
        </Stack>
      ) : (
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
      )}
    </>
  );
}
export default App;
