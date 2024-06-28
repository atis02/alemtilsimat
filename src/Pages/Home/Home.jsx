import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { EarthCanvas, StarsCanvas } from "../../Components/Canvas";
import { SectionWrapper } from "../../Hoc";
import { slideIn } from "../../Utils/motion";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Galaxy } from "../../Components/Canvas/Globe";
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
    <Box minHeight={{ lg: "87vh", xs: "90vh" }} borderBottom="1px solid gray">
      <Stack
        sx={{
          position: "absolute",
          zIndex: 100,
          top: { lg: "5%", md: "15%", sm: "15%", xs: "0%" },
          pr: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
          pl: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "space-evenly",
          },
          alignItems: "center",
          width: "100%",
          height: "100%",
          mt: { xs: "11.5%", lg: 0, md: 0, sm: 0 },
        }}
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Stack>
            <Stack direction="row" alignItems="center" spacing={-4}>
              <Stack
                width={{ lg: "350px", md: "300px", sm: "200px", xs: "150px" }}
                height={{ lg: "368px", md: "318px", sm: "218px", xs: "168px" }}
              >
                <img
                  style={{ width: "auto", height: "100%" }}
                  src="/images/Logo.png"
                  alt=""
                />
              </Stack>
              <Stack>
                <Typography
                  color="#fff"
                  fontFamily="Montserrat"
                  fontWeight={600}
                  fontSize={{ lg: 74, md: 64, sm: 44, xs: 30 }}
                  ml={{ lg: -15, md: -5, sm: -4, xs: -2 }}
                  lineHeight={{
                    lg: "76px",
                    md: "56px",
                    sm: "46px",
                    xs: "36px",
                  }}
                  className="main-title"
                >
                  Älem Tilsimat
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                color="#dddddd"
                maxWidth={600}
                fontFamily="Montserrat"
                fontSize={{ lg: 20, md: 18, sm: 16, xs: 15 }}
                mt={{ lg: "50px", md: "40px", sm: "30px", xs: "20px" }}
              >
                {t("homeTitle")}
              </Typography>
              <Button
                sx={{
                  color: "#00E0FF",
                  border: "2px solid #00E0FF",
                  borderRadius: {
                    lg: "26px",
                    md: "20px",
                    sm: "15px",
                    xs: "15px",
                  },
                  maxWidth: { lg: 273, md: 243, sm: 200, xs: 203 },
                  textTransform: "initial",
                  height: 60,
                  display: "flex",
                  gap: "10px",
                  fontSize: { lg: 20, md: 18, sm: 16, xs: 15 },
                  fontWeight: 600,
                  mt: "30px",
                  transition: "all ease 0.4s",
                  "&:hover": {
                    gap: "17px",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,224,255,1) 100%)",
                    color: "#114896",
                  },
                }}
                onClick={() => {
                  navigate("/demo");
                }}
              >
                {/* <Typography
                  color="#00E0FF"
                  fontWeight={600}
                  fontSize={{ lg: 20, md: 18, sm: 16, xs: 15 }}
                  sx={{
                    "&:hover": { color: "#114896" },
                  }}
                > */}{" "}
                {t("explore")}
                {/* </Typography> */}
                <EastIcon />
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {/* <EarthCanvas /> */}
        {/* <Galaxy /> */}
      </Stack>
    </Box>
  );
};

export default SectionWrapper(Home, "contact");
