import React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { fadeIn } from "../../Utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";

const AutoDatabase = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  const { t } = useTranslation();

  const database = [
    {
      img: "/images/MainPageImages/autoDatabase1.png",
      title: t("databaseDescTitle"),
      desc: t("databaseDesc"),
    },
    {
      img: "/images/MainPageImages/autoDatabase2.png",
      title: t("databaseDescTitle2"),
      desc: t("databaseDesc2"),
    },
    {
      img: "/images/MainPageImages/autoDatabase3.png",
      title: t("databaseDescTitle3"),
      desc: t("databaseDesc3"),
    },
  ];

  const Database = ({ index, title, img, desc }) => (
    <Tilt
      style={{
        ...(isMobile
          ? {
              width: "100%",
              height: "400px",
              ...(index == "1" ? { marginTop: "0px" } : ""),
              ...(index == "2" ? { marginTop: "0px" } : ""),
            }
          : isTablet
          ? {
              width: "360px",
              height: "590px",
            }
          : isMd
          ? {
              width: "420px",
              height: "480px",
              ...(index == "2" ? { marginTop: "90px" } : ""),
            }
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
            lg: 450,
            md: 470,
            sm: 450,
            xs: 320,
          }}
          width={{ lg: 420, md: 430, sm: 340, xs: "90%" }}
        >
          <img
            src="/images/MainPageImages/autodatabase.png"
            style={{ height: "100%", width: "auto" }}
            alt=""
          />
          <Stack
            position="absolute"
            height={{ lg: 450, md: 470, sm: 460, xs: 285 }}
            width={{ lg: 420, md: 430, sm: 340, xs: "90%" }}
            mt={2}
            ml={2}
          >
            <img
              src="/images/MainPageImages/autodatabase.png"
              style={{ height: "100%", width: "auto" }}
              alt=""
            />
          </Stack>
        </Stack>
        <Stack
          width={{ lg: "100%", md: "100%", sm: "90%", xs: "90%" }}
          height="450px"
          p={{
            lg: "30px",
            md: "0 0px 0 30px",
            sm: "0 0px 0 30px",
            xs: "0 0px 0 30px",
          }}
        >
          <Stack
            alignItems="start"
            width={{ lg: 180, md: 180, sm: 180, xs: 130 }}
            height={{ lg: 200, md: 200, sm: 180, xs: 150 }}
            mt={-14}
            ml={{ lg: -7, md: -7, sm: -7, xs: -6 }}
            position={"absolute"}
          >
            <img
              src={img}
              alt="web-development"
              className="w-16 h-16 object-contain"
              style={{ width: "100%", height: "100%" }}
            />
          </Stack>

          <Typography
            color="#fff"
            fontWeight={500}
            fontFamily="Montserrat"
            fontSize={{ lg: 20, md: 18, sm: 18, xs: 16 }}
            mb="10px"
            mt={{ lg: 12, md: 12, sm: 9, xs: 5 }}
          >
            {title}
          </Typography>
          <Typography
            color="#DDDDDD"
            fontWeight={300}
            fontFamily="Montserrat"
            fontSize={{ lg: 18, md: 16, sm: 16, xs: 14 }}
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
        pr: { lg: "50px", md: "40px", sm: "20px", xs: "20px" },
        pl: { lg: "50px", md: "40px", sm: "20px", xs: "20px" },
        mt: "50px",
        pb: "50px",
      }}
    >
      <Stack>
        <Stack>
          <Typography
            fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 50, md: 54, sm: 44, xs: 30 }}
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
            {t("automatedDatabase")}
          </Typography>

          <Stack alignItems="center">
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              mb="30px"
              width={{ lg: "50%", sm: "50%", md: "50%", xs: "60%" }}
            >
              <img
                style={{ width: "80%" }}
                src="/images/MainPageImages/Line.png"
                alt=""
              />
              <img
                style={{ width: "80%" }}
                src="/images/MainPageImages/Line2.png"
                alt=""
              />
            </Stack>
            <Typography
              color="#DDDDDDDD"
              fontSize={{ lg: 18, md: 18, sm: 16, xs: 15 }}
              lineHeight="27px"
              fontFamily="Montserrat"
              width={{ lg: "61%", md: "60%", sm: "100%", xs: "100%" }}
              fontWeight={400}
              textAlign={{
                lg: "center",
                md: "center",
                sm: "justify",
                xs: "justify",
              }}
            >
              {t("automatedDatabaseText")}
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
          mt="80px"
          direction={{ lg: "row", dm: "row", sm: "row", xs: "column" }}
          flexWrap="wrap"
          justifyContent="space-between"
          spacing={{ lg: 0, md: 0, sm: 0, xs: 7 }}
          mb={4}
        >
          {database.map((service, index) => (
            <Database key={service.title} index={index} {...service} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AutoDatabase;
