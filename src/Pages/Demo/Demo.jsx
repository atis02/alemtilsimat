import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mobileData, projects, websitesData } from "./components/data.mjs";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const [website, setWebsite] = useState(0);

  const handleChange = (index) => {
    setWebsite(index);
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        pr: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        pl: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        mb: "80px",
      }}
    >
      <Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Stack width="100%">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={-4}
              width="90%"
              position="absolute"
              top="8%"
              sx={{ opacity: "5%" }}
            >
              <Stack
                width={{ lg: "300px", md: "300px", sm: "200px", xs: "150px" }}
                height={{ lg: "348px", md: "318px", sm: "218px", xs: "168px" }}
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
                  fontFamily="Roboto"
                  fontWeight={500}
                  fontSize={{ lg: 115, md: 100, sm: 70, xs: 50 }}
                  ml={{ lg: -10, md: -5, sm: -4, xs: -2 }}
                  className="main-title"
                >
                  Älem Tilsimat
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              mt="20px"
              ml={{ lg: 17, md: 13, sm: 0, xs: 0 }}
              justifyContent={{
                lg: "start",
                md: "start",
                sm: "start",
                xs: "center",
              }}
            >
              <Button
                sx={{
                  color: "#fff",
                  fontSize: { lg: 40, md: 37, sm: 30, xs: 20 },
                  fontWeight: 500,
                  fontFamily: "Roboto",
                  textTransform: "revert",
                  borderBottom: "1px solid #fff",

                  ...(website == "0"
                    ? { borderBottom: "3px solid #00E0FF " }
                    : ""),
                  "&:hover": { background: "transparent" },
                  borderRadius: "0px",
                }}
                onClick={() => handleChange(0)}
              >
                {t("projects")}
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  fontSize: { lg: 40, md: 37, sm: 30, xs: 20 },
                  fontWeight: 500,
                  fontFamily: "Roboto",
                  borderBottom: "1px solid #fff",
                  textTransform: "revert",
                  ...(website == "1"
                    ? { borderBottom: "3px solid #00E0FF " }
                    : ""),
                  "&:hover": { background: "transparent" },
                  pl: "30px",

                  borderRadius: "0px",
                }}
                onClick={() => handleChange(1)}
              >
                {t("webSites")}
              </Button>
              <Button
                sx={{
                  borderBottom: "1px solid #fff",
                  color: "#fff",
                  fontSize: { lg: 40, md: 37, sm: 30, xs: 20 },
                  fontWeight: 500,
                  fontFamily: "Roboto",
                  textTransform: "revert",
                  ...(website == "2"
                    ? { borderBottom: "3px solid #00E0FF " }
                    : ""),
                  "&:hover": { background: "transparent" },
                  borderRadius: "0px",
                  pl: "30px",
                  zIndex: 100,
                }}
                onClick={() => handleChange(2)}
              >
                {t("applications")}
              </Button>
            </Stack>
            <Stack>
              {website == "0" ? (
                <Stack
                  direction="row"
                  justifyContent={{
                    lg: "center",
                    md: "center",
                    sm: "center",
                    xs: "space-evenly",
                  }}
                  alignItems="center"
                  flexWrap="wrap"
                  gap="40px"
                  mt="30px"
                  zIndex="100"
                >
                  {projects.map((elem) => (
                    <Stack>
                      <Stack
                        maxWidth={{ lg: 350, md: 300, sm: 250, xs: 145 }}
                        maxHeight={{ lg: 460, md: 410, sm: 360, xs: 250 }}
                      >
                        <img
                          src={elem.img}
                          style={{ width: "auto", height: "auto" }}
                          alt={elem.title}
                        />
                      </Stack>
                      <Typography mt="20px" textAlign="center" color="#fff">
                        {elem.title}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              ) : website == "1" ? (
                <Stack
                  direction="row"
                  justifyContent={{
                    lg: "center",
                    md: "center",
                    sm: "center",
                    xs: "space-evenly",
                  }}
                  alignItems="center"
                  flexWrap="wrap"
                  gap="40px"
                  mt="30px"
                  zIndex="100"
                >
                  {websitesData.map((elem) => (
                    <Stack>
                      <Stack
                        maxWidth={{ lg: 350, md: 300, sm: 250, xs: 145 }}
                        maxHeight={{ lg: 460, md: 410, sm: 360, xs: 250 }}
                      >
                        <img
                          src={elem.img}
                          style={{ width: "auto", height: "auto" }}
                          alt={elem.title}
                        />
                      </Stack>
                      <Typography mt="20px" textAlign="center" color="#fff">
                        {elem.title}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              ) : website == "2" ? (
                <Stack
                  direction="row"
                  justifyContent={{
                    lg: "start",
                    md: "start",
                    sm: "center",
                    xs: "center",
                  }}
                  alignItems="center"
                  flexWrap="wrap"
                  gap={{ lg: "86px", xs: "56px" }}
                  mt="30px"
                  zIndex="100"
                  ml={{ lg: 17, md: 13, sm: 0, xs: 0 }}
                >
                  {mobileData.map((elem) => (
                    <Stack alignItems="center">
                      <Stack
                        width={{ lg: 232, md: 200, sm: 150, xs: 130 }}
                        height={{ lg: 430, md: 380, sm: 320, xs: 230 }}
                      >
                        <img
                          src={elem.img}
                          style={{ width: "auto", height: "auto" }}
                          alt={elem.title}
                        />
                      </Stack>
                      <Typography mt="20px" textAlign="center" color="#fff">
                        {elem.title}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              ) : (
                ""
              )}
            </Stack>
            <Stack
              maxHeight={{ lg: 270, md: 250, sm: 230, xs: 180 }}
              maxWidth={{ lg: 280, md: 260, sm: 250, xs: 200 }}
              top={{ lg: "0", md: "0", sm: "0", xs: "200px" }}
              position="absolute"
              right="0"
            >
              <img
                src="/images/MainPageImages/Vector 14.png"
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </Stack>
            <Stack
              maxHeight={{ lg: 270, md: 250, sm: 230, xs: 180 }}
              maxWidth={{ lg: 280, md: 260, sm: 250, xs: 200 }}
              top={{ lg: "1200px", md: "1200px", sm: "1200px", xs: "900px" }}
              position="absolute"
              right="0"
            >
              <img
                src="/images/MainPageImages/Vector 14.png"
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </Stack>
            <Stack
              maxHeight={{ lg: 270, md: 250, sm: 230, xs: 180 }}
              maxWidth={{ lg: 280, md: 260, sm: 250, xs: 200 }}
              top={{ lg: "300px", md: "300px", sm: "300px", xs: "500px" }}
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default Demo;
