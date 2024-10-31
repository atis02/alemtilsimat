import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        pr: { lg: "80px", md: "40px", sm: "30px", xs: "20px" },
        pl: { lg: "80px", md: "40px", sm: "30px", xs: "20px" },
        mt: "50px",
        pb: "50px",
        borderBottom: "1px solid gray",
        // marginTop: "100vh",
        padding: "20px",
      }}
      id="targetSection"
    >
      <Stack
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        alignItems="center"
      >
        <Stack
          width={{ lg: 570, md: 500, sm: 480, xs: "95%" }}
          height={{ lg: 505, md: 455, sm: 405, xs: 325 }}
        >
          <img
            src="/images/MainPageImages/ABout2.png"
            style={{ width: "auto", height: "100%", opacity: "5%" }}
            alt=""
          />
          <Stack
            width={{ lg: 450, md: 400, sm: 350, xs: 310 }}
            height={{ lg: 405, md: 375, sm: 305, xs: 285 }}
            position="absolute"
            zIndex={10}
            mt={{ lg: 13, md: 9, sm: 5, xs: 5 }}
          >
            <img src="/images/MainPageImages/About.png" alt="" />
          </Stack>
        </Stack>
        <Stack>
          <Typography
            color="#00E0FF"
            fontFamily="Roboto"
            fontWeight={500}
            fontSize={{ lg: 50, md: 45, sm: 40, xs: 30 }}
            lineHeight={{
              lg: "76px",
              md: "56px",
              sm: "46px",
              xs: "36px",
            }}
            mb="20px"
            textAlign="center"
          >
            {t("about")}
          </Typography>
          <Typography
            color="#DDDDDDDD"
            fontSize={{ lg: 16, md: 15, sm: 15, xs: 14 }}
            lineHeight="27px"
            fontFamily="Roboto"
            fontWeight={400}
            textAlign="justify"
          >
            <Trans i18nKey="aboutText" components={{ 1: <br /> }} />
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
