import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { fadeIn } from "../../Utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";

const HealthCare = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));

  const { t } = useTranslation();

  const healthCare = [
    {
      img: "/images/MainPageImages/HealthCare1.png",
      title: t("healthDescTitle"),
      desc: t("healthDesc"),
    },
    {
      img: "/images/MainPageImages/HealthCare2.png",
      title: t("healthDescTitle2"),
      desc: t("healthDesc2"),
    },
    {
      img: "/images/MainPageImages/HealthCare3.png",
      title: t("healthDescTitle3"),
      desc: t("healthDesc3"),
    },
  ];

  const ServiceCard = ({ index, title, img, desc }) => (
    <Tilt
      style={{
        ...(isMobile
          ? {
              width: "100%",
              height: "400px",
            }
          : isTablet
          ? { width: "360px", height: "590px" }
          : isMd
          ? { width: "420px", height: "480px" }
          : { width: "420px", height: "500px" }),
      }}
      options={{
        scale: isMobile ? "none" : 1,
        max: 45,
        perspective: 1000,
      }}
    >
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <Stack
          position="absolute"
          height={{
            lg: 530,
            md: 470,
            sm: 580,
            xs: 450,
          }}
          width={{ lg: 420, md: 430, sm: 340, xs: "90%" }}
        >
          <img
            src="/images/MainPageImages/border.png"
            style={{ height: "100%", width: "auto" }}
            alt=""
          />
        </Stack>
        <Stack
          width={{ lg: "100%", md: "100%", sm: "90%", xs: "95%" }}
          height="450px"
          p={{
            lg: "20px",
            md: "20px",
            sm: "0 0px 0 15px",
            xs: "0 0px 0 15px",
          }}
        >
          <Stack alignItems="end">
            <img
              src={img}
              alt="web-development"
              className="w-16 h-16 object-contain"
              style={{ width: 157, height: 157 }}
            />
          </Stack>

          <Typography
            color="#fff"
            fontWeight={500}
            fontFamily="Roboto"
            fontSize={{ lg: 18, md: 17, sm: 16, xs: 15 }}
            mb="10px"
          >
            {title}
          </Typography>
          <Typography
            color="#DDDDDD"
            fontWeight={300}
            fontFamily="Roboto"
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
        pb: "50px",
        borderBottom: "1px solid gray",
      }}
    >
      <Stack>
        <Stack>
          <Typography
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
            className="main-title"
            textAlign="center"
          >
            {t("healthCare")}
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
              fontFamily="Roboto"
              width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}
              fontWeight={400}
              textAlign={{
                lg: "center",
                md: "center",
                sm: "justify",
                xs: "justify",
              }}
            >
              {t("healthText")}
            </Typography>
          </Stack>
          <Stack
            maxHeight={270}
            maxWidth={280}
            mt={-6}
            position="absolute"
            right="0"
          >
            <img
              src="/images/MainPageImages/Vector 14.png"
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </Stack>
        </Stack>
        <Stack
          mt="60px"
          direction={{ lg: "row", dm: "row", sm: "row", xs: "column" }}
          flexWrap="wrap"
          justifyContent="space-between"
          spacing={{ lg: 0, md: 0, sm: 0, xs: 7 }}
          mb={4}
        >
          {healthCare.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default HealthCare;
