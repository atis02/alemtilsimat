import React, { useEffect } from "react";

import { SectionWrapper } from "../../Hoc";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToSection = () => {
    document.getElementById("targetSection").scrollIntoView({
      behavior: "smooth",
    });
  };
  const { t } = useTranslation();
  return (
    <Box
      minHeight={{ xl: "90vh", lg: "86.6vh", md: "90vh", xs: "90vh" }}
      borderBottom="1px solid gray"
      className="none-select"
    >
      <Stack direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}>
        <Stack
          alignItems="start"
          pl={{ lg: "6%", md: "6%", sm: "0%", xs: "0%" }}
          minWidth="50%"
        >
          <Stack
            sx={{
              position: "absolute",
              zIndex: 10,
              top: { lg: "350px", md: "38%", sm: "18%", xs: "10%" },
              pr: { lg: "50px", md: "40px", sm: "30px", xs: "5px" },
              // pl: {
              //   xl: "20px",
              //   lg: "10px",
              //   md: "40px",
              //   sm: "30px",
              //   xs: "20px",
              // },

              width: {
                xl: "60%",
                lg: "70%",
                md: "80%",
                sm: "100%",
                xs: "100%",
              },
              mt: { xs: "10%", lg: 0, md: 0, sm: 0 },
            }}
            alignItems={{
              lg: "start",
              md: "start",
              sm: "center",
              xs: "center",
            }}
            spacing={-2}
          >
            <Stack
              alignItems={{
                lg: "center",
                md: "start",
                sm: "center",
                xs: "center",
              }}
              // pb={{ lg: 0, md: 0, sm: 0, xs: 2 }}
              spacing={2}
            >
              <Typography
                fontFamily="Roboto"
                fontWeight={500}
                fontSize={{ lg: 74, md: 44, sm: 40, xs: 30 }}
                lineHeight={{
                  lg: "78px",
                  md: "76px",
                  sm: "46px",
                  xs: "36px",
                }}
                textAlign={{
                  lg: "start",
                  md: "start",
                  sm: "center",
                  xs: "center",
                }}
                className="main-title"
                width={{ lg: "100%", md: "100%", sm: "100%", xs: "100%" }}
                mb={{ lg: "20px", xs: 0 }}
              >
                Älem Tilsimat
              </Typography>
              <Typography
                color="#dddddd"
                maxWidth={750}
                fontFamily="Roboto"
                fontSize={{ lg: 20, md: 18, sm: 16, xs: 15 }}
                // mt={{ lg: "30px", md: "30px", sm: "30px", xs: "20px" }}
                textAlign={{
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                }}
              >
                {t("homeTitle")}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              zIndex: 10000,
              top: {
                xl: "470px",
                lg: "470px",
                md: "56%",
                sm: "78%",
                xs: "10%",
              },
              // pr: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
              // pl: {
              //   xl: "115px",
              //   lg: "60px",
              //   md: "40px",
              //   sm: "48%",
              //   xs: "20px",
              // },

              width: {
                xl: "30%",
                lg: "30%",
                md: "90%",
                sm: "97%",
                xs: "100%",
              },
              mt: { xs: "10%", lg: 0, md: 0, sm: 0 },
            }}
            alignItems={{
              lg: "start",
              md: "start",
              sm: "center",
              xs: "center",
            }}
          >
            <Button
              className="button"
              onClick={() => {
                navigate("/demo");
              }}
              sx={{
                display: {
                  lg: "block",
                  md: "block",
                  sm: "block",
                  xs: "none",
                },
                mt: { lg: "30px", md: "20px", sm: "20px", xs: "220px" },
                width: { lg: 273, md: 243, sm: 240, xs: 233 },
              }}
            >
              <span className="button-background"></span>
              <Typography
                className="button-text"
                sx={{
                  fontSize: { lg: 20, md: 18, sm: 16, xs: 15 },
                  fontWeight: 400,
                  lineHeight: "20px",
                  fontFamily: "Roboto",
                }}
              >
                {" "}
                {t("explore")}
                <EastIcon />
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {/* <Stack minWidth={190} maxWidth={600}>
          <Stack
            width="100%"
            height="100%"
            sx={{
              display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            }}
          >
            <img
              src="/images/MainPageImages/cropped_image.png"
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "100%",
                // border: "1px solid #00E0FF",
              }}
              alt=""
              // className="img-gradient"
            />
          </Stack>
        </Stack> */}
      <Stack
        sx={{
          position: "absolute",
          zIndex: 10000,
          bottom: 0,
          width: "100%",
          height: "32%",
          // background: "red",
        }}
      ></Stack>
      {/* <Button
        className="button"
        onClick={() => {
          navigate("/demo");
        }}
        sx={{
          display: { lg: "none", md: "none", sm: "none", xs: "block" },
          mt: { lg: "30px", md: "20px", sm: "20px", xs: "220px" },
          width: { lg: 273, md: 243, sm: 250, xs: 233 },
          position: "absolute",
          zIndex: 10000,
          bottom: 70,
          left: "24%",
        }}
      >
        <span className="button-background"></span>
        <Typography
          className="button-text"
          sx={{
            fontSize: { lg: 20, md: 18, sm: 16, xs: 15 },
            fontWeight: 400,
            lineHeight: "20px",
            fontFamily: "Roboto",
          }}
        >
          {" "}
          {t("explore")}
          <EastIcon />
        </Typography>
      </Button> */}
      <Stack className="down-button" width="100%">
        <IconButton
          sx={{
            width: "35px",
            height: "35px",
            position: "absolute",
            zIndex: 10000,
            bottom: 0,
            right: "45%",
            pb: 5,
          }}
          className="arrow"
          onClick={scrollToSection}
        >
          <KeyboardArrowDownIcon
            sx={{ color: "#0cfefc", width: 35, height: 35 }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default SectionWrapper(Home, "contact");
