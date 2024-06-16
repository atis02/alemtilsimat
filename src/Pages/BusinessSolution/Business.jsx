import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { BusinessData } from "./components/data.mjs";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/motion";

const Business = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));

  const BusinessCard = ({ index, title, img, desc }) => (
    <Tilt
      style={{
        ...(isMobile
          ? { width: "100%", height: "440px" }
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
          ml={{ lg: 6, md: 10, sm: 6, xs: 12 }}
          height={{ lg: 280, md: 250, sm: 220, xs: 180 }}
          alignItems="center"
          mt={{ lg: -20, md: -20, sm: -16, xs: -13 }}
          position="absolute"
        >
          <img
            src={img}
            alt="web-development"
            className="w-16 h-16 object-contain"
            style={{ width: "100%", height: "100%" }}
          />
        </Stack>
        <Stack
          width={{ lg: "100%", md: "100%", sm: "90%", xs: "95%" }}
          height="auto"
          p={{ lg: "20px", md: "20px", sm: "20px", xs: "20px" }}
          border="5px solid #00E0FF"
          borderRadius="20px"
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
        borderBottom: "1px solid gray",
      }}
    >
      <Stack>
        <Stack>
          <Typography
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
            className="main-title"
            textAlign="center"
          >
            Business Solutions
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            mb="30px"
          >
            <span
              style={{
                height: "4px",
                width: "29%",
                borderRadius: "10000%",
                background:
                  " linear-gradient(90deg, rgba(255,255,255,1)  0%, rgba(0,224,255,1)100%)",
              }}
            ></span>
            <span
              style={{
                background:
                  " linear-gradient(90deg,rgba(0,224,255,1)  0%, rgba(255,255,255,1) 100%)",
                width: "29%",
                height: "4px",
                borderRadius: "10000%",
              }}
            ></span>
          </Stack>
          <Stack alignItems="center">
            <Typography
              color="#DDDDDDDD"
              fontSize={18}
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
              Maximize your business potential and drive growth with our
              innovative IT solution, designed to streamline your operations,
              optimize your workflows, and deliver measurable results.
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
          mt="140px"
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
