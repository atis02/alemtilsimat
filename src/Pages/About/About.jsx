import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        pr: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        pl: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        mt: "50px",
        pb: "50px",
        borderBottom: "1px solid gray",
      }}
    >
      <Stack
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        alignItems="center"
      >
        <Stack
          width={{ lg: 670, md: 600, sm: 500, xs: "95%" }}
          height={{ lg: 605, md: 505, sm: 405, xs: 325 }}
        >
          <img
            src="/images/MainPageImages/ABout2.png"
            style={{ width: "auto", height: "100%", opacity: "5%" }}
            alt=""
          />
          <Stack
            width={{ lg: 600, md: 490, sm: 390, xs: 310 }}
            height={{ lg: 555, md: 375, sm: 305, xs: 285 }}
            position="absolute"
            zIndex={10}
            mt={{ lg: 7, md: 9, sm: 5, xs: 5 }}
          >
            <img src="/images/MainPageImages/About.png" alt="" />
          </Stack>
        </Stack>
        <Stack>
          <Typography
            color="#00E0FF"
            fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 60, md: 54, sm: 44, xs: 30 }}
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
            fontSize={{ lg: 18, md: 16, sm: 16, xs: 14 }}
            lineHeight="27px"
            fontFamily="Montserrat"
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
