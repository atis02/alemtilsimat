import React, { useEffect } from "react";

import { SectionWrapper } from "../../Hoc";
import { Box, Button, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  return (
    <Box minHeight={{ lg: "86.6vh", xs: "90vh" }} borderBottom="1px solid gray">
      <Stack
        sx={{
          position: "absolute",
          zIndex: 100,
          top: { lg: "5%", md: "8%", sm: "8%", xs: "0" },
          pr: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
          pl: { lg: "80px", md: "40px", sm: "30px", xs: "20px" },
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "space-evenly",
          },
          alignItems: "center",
          width: "100%",
          height: "100%",
          mt: { xs: "10%", lg: 0, md: 0, sm: 0 },
        }}
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
      >
        <Stack justifyContent="center" alignItems="start" minWidth="50%">
          <Stack direction="row" alignItems="center" spacing={-2}>
            <Stack
              direction="row"
              alignItems="center"
              pb={{ lg: 0, md: 0, sm: 0, xs: 2 }}

            >
              <Typography
                fontFamily="Montserrat"
                fontWeight={600}
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
                  sm: "start",
                  xs: "center",
                }}
                className="main-title"
                width={{lg:'100%',xs:'400px'}}
                mb={{lg:'20px',xs:0}}
              >
                Älem Tilsimat
              </Typography>
              {/* <Stack
                width={{ lg: 700, md: 490, sm: 390, xs: 190 }}
                height={{ lg: 700, md: 375, sm: 305, xs: 145 }}
                sx={{
                  display: { lg: "none", md: "none", sm: "none", xs: "flex" },
                }}
                mt={-5}
              >
                <img src="/images/MainPageImages/about3.png" alt="" />
              </Stack> */}
            </Stack>
          </Stack>
          <Stack alignItems={{lg:'start',md:'start',sm:'start',xs:'center'}} >
            <Typography
              color="#dddddd"
              maxWidth={750}
              fontFamily="Montserrat"
              fontSize={{ lg: 20, md: 18, sm: 16, xs: 15 }}
              // mt={{ lg: "30px", md: "30px", sm: "30px", xs: "20px" }}
              textAlign='center'
            >
              {t("homeTitle")}
            </Typography>
            <Button
              className="button"
              onClick={() => {
                navigate("/demo");
              }}
              sx={{
                mt: { lg: "30px", md: "20px", sm: "20px", xs: "220px" },
                width: { lg: 273, md: 243, sm: 200, xs: 233 },
              }}
            >
              <span className="button-background"></span>
              <Typography
                className="button-text"
                sx={{
                  fontSize: { lg: 20, md: 18, sm: 16, xs: 15 },
                  fontWeight: 500,
                  lineHeight: "20px",
                  fontFamily:'Montserrat'
                }}
              >
                {" "}
                {t("explore")}
                <EastIcon />
              </Typography>
            </Button>
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
        <img src="/space/star.png" alt="" />
      </Stack>
    </Box>
  );
};

export default SectionWrapper(Home, "contact");
