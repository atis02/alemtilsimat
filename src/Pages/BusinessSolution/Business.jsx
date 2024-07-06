import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/motion";
import { Trans, useTranslation } from "react-i18next";

const Business = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  const { t, i18n } = useTranslation();

  const BusinessData = [
    {
      img: "/images/MainPageImages/business.png",
      title: t("businessTextTitle"),
      desc: <Trans i18nKey={"businessText"} components={{ 1: <br /> }} />,
    },
    {
      img: "/images/MainPageImages/business1.png",
      title: t("businessManagament"),
      desc: (
        <Trans i18nKey={"businessManagamentText"} components={{ 1: <br /> }} />
      ),
    },
    {
      img: "/images/MainPageImages/business2.png",
      title: t("industry"),
      desc: <Trans i18nKey={"industryText"} components={{ 1: <br /> }} />,
    },
  ];
  const BusinessCard = ({ index, title, img, desc }) => (
    <Tilt
      style={{
        ...(isMobile
          ? {
              width: "100%",
            }
          : isTablet
          ? { width: "360px", height: "100%" }
          : isMd
          ? { width: "450px", height: "650px" }
          : { width: "410px", height: "100%" }),
      }}
      options={{
        scale: isMobile ? "none" : 1,
        max: 20,
        perspective: 1000,
      }}
    >
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <Stack
          ml={{ lg: 12, md: 15, sm: 9, xs: 13 }}
          height={{ lg: 150, md: 140, sm: 130, xs: 100 }}
          alignItems="center"
          mt={{ lg: -9, md: -9, sm: -9, xs: -7 }}
          position="absolute"
        >
          <img
            src={img}
            alt="web-development"
            className="w-16 h-16 object-contain"
            style={{ height: "100%" }}
          />
        </Stack>
        <Stack
          width={{ lg: "100%", md: "100%", sm: "90%", xs: "100%" }}
          height={{
            lg: "100%",
            md: 580,
            sm: "100%",
            xs: "100%",
          }}
          p={{ lg: "20px", md: "20px", sm: "20px", xs: "20px" }}
          border="5px solid #00E0FF"
          borderRadius="20px"
          mb={7}
        >
          <Typography
            color="#fff"
            fontWeight={500}
            fontFamily="Montserrat"
            fontSize={{ lg: 20, md: 18, sm: 18, xs: 16 }}
            mb="10px"
            mt={{ lg: 10, md: 10, sm: 10, xs: 4 }}
          >
            {title}
          </Typography>
          <Typography
            color="#DDDDDD"
            fontWeight={300}
            fontFamily="Montserrat"
            fontSize={{ lg: 16, md: 15, sm: 15, xs: 14 }}
            textAlign="justify"
          >
            {desc}
          </Typography>
        </Stack>
      </motion.div>
    </Tilt>
  );
  return (
    <Box
      sx={{
        pr: { lg: "80px", md: "40px", sm: "20px", xs: "20px" },
        pl: { lg: "80px", md: "40px", sm: "20px", xs: "20px" },
        mt: "50px",
        borderBottom: "1px solid gray",
      }}
    >
      <Stack>
        <Stack>
          <Typography
            fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 50, md: 45, sm: 40, xs: 30 }}
            lineHeight={{
              lg: "76px",
              md: "56px",
              sm: "46px",
              xs: "36px",
            }}
            mb="20px"
            className="main-title"
            textAlign="center"
          >
            {t("business")}
          </Typography>

          <Stack alignItems="center">
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              mb="30px"
              width={{ lg: "50%", sm: "50%", md: "50%", xs: "100%" }}
            >
              <img
                style={{ width: "50%" }}
                src="/images/MainPageImages/Line.png"
                alt=""
              />
              <img
                style={{ width: "50%" }}
                src="/images/MainPageImages/Line2.png"
                alt=""
              />
            </Stack>
            <Typography
              color="#DDDDDDDD"
              fontSize={{ lg: 16, md: 15, sm: 15, xs: 14 }}
              lineHeight="27px"
              fontFamily="Montserrat"
              width={{ lg: "61%", md: "60%", sm: "100%", xs: "100%" }}
              fontWeight={400}
              mb={3}
              textAlign={{
                lg: "center",
                md: "center",
                sm: "justify",
                xs: "justify",
              }}
            >
              {t("businessDesc")}
            </Typography>
          </Stack>
          <Stack
            maxHeight={270}
            maxWidth={280}
            mt={-6}
            position="absolute"
            left="0"
          >
            <img
              src="/images/MainPageImages/Vector 15.png"
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </Stack>
        </Stack>
        <Stack
          mt="70px"
          direction={{ lg: "row", dm: "row", sm: "row", xs: "column" }}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {BusinessData.map((service, index) => (
            <BusinessCard key={service.title} index={index} {...service} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Business;
