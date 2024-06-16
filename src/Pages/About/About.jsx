import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
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
            style={{ width: "auto", height: "100%", opacity: "20%" }}
            alt=""
          />
          <Stack
            width={{ lg: 590, md: 490, sm: 390, xs: 290 }}
            height={{ lg: 475, md: 375, sm: 305, xs: 285 }}
            position="absolute"
            mt={{ lg: "100px", md: "90px", sm: "70px", xs: "50px" }}
            zIndex={10}
            ml={{ lg: 0, md: 0, sm: 0, xs: 3 }}
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
            // className="main-title"
            textAlign="center"
          >
            О нас
          </Typography>
          <Typography
            color="#DDDDDDDD"
            fontSize={18}
            lineHeight="27px"
            fontFamily="Montserrat"
            fontWeight={400}
            textAlign="justify"
          >
            Мы – ИТ компания, которая специализируется на программировании. Наша
            команда состоит из опытных разработчиков, которые знают, как
            создавать высококачественные программные продукты.
            <br />
            <br />
            Мы привержены инновациям и всегда следим за последними тенденциями в
            мире технологий. Мы стремимся к тому, чтобы наши решения были
            передовыми и давали нашим клиентам конкурентное преимущество.
            <br />
            <br />
            Наша цель – помочь нашим клиентам достигнуть своих бизнес-целей с
            помощью современных и эффективных технологий. Мы понимаем, что
            каждый проект уникален и требует индивидуального подхода, поэтому мы
            работаем тесно с каждым клиентом, чтобы понять его потребности и
            предоставить наиболее подходящее решение.
            <br />
            <br />
            Мы гордимся своей работой и всегда стремимся к тому, чтобы наши
            продукты были лучшими в своем классе. Если вы ищете надежного
            партнера для создания программного обеспечения, то мы готовы помочь
            вам воплотить ваши идеи в реальность.
            <br />
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
