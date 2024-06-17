import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { navlinks } from "../../Components/Navbar/components/navlinks.mjs";
import { Link, NavLink } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        backgroundColor="#112334"
        maxHeight={{ lg: 300, md: "100%", sm: "100%", xs: "100%" }}
        p={{ lg: "50px", md: "50px", sm: "50px", xs: "20px" }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ lg: "50px", md: 0, sm: 0, xs: 0 }}
        >
          <Stack maxWidth={405} pb={{ lg: 0, md: 2, sm: 2, xs: 2 }}>
            <Stack direction="row" alignItems="center" spacing={-4}>
              <Stack
                width={{ lg: "105px", md: "100px", sm: "100px", xs: "100px" }}
                height={{ lg: "120px", md: "110px", sm: "110px", xs: "118px" }}
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
                  fontSize={{ lg: 44, md: 40, sm: 35, xs: 20 }}
                  ml={{ lg: -2, md: -1, sm: 0, xs: 0 }}
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
                fontSize={{ lg: 13, md: 12, sm: 12, xs: 11 }}
                mt={{ lg: "20px", md: "20px", sm: "10px", xs: "10px" }}
              >
                Cоздание и внедрение ИТ проектов любой сложности, разработка веб
                сайтов и мобильных приложений
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column" pt={1} spacing="20px">
            {navlinks.map((elem, index) => (
              <Stack key={index}>
                <NavLink
                  className="nav-link2"
                  style={{
                    ...(isMobile ? { fontSize: 16 } : { fontSize: 20 }),
                  }}
                  to={elem.link}
                >
                  {elem.title}
                </NavLink>
              </Stack>
            ))}
          </Stack>
          <Stack spacing="30px">
            <Stack direction="row" alignItems="center" color="#fff" spacing={2}>
              <CallIcon />
              <Link
                to="tel:+99312486640"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  ...(isMobile ? { fontSize: 16 } : { fontSize: 20 }),

                  fontFamily: "Montserrat",
                }}
              >
                (+993 12) 48 66 40
              </Link>
            </Stack>
            <Stack direction="row" alignItems="center" color="#fff" spacing={2}>
              <EmailIcon />
              <a
                href="mailto:info@alemtilsimat.com"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  ...(isMobile ? { fontSize: 16 } : { fontSize: 20 }),

                  fontFamily: "Montserrat",
                }}
              >
                info@alemtilsimat.com
              </a>
            </Stack>
            <Stack direction="row" alignItems="center" color="#fff" spacing={2}>
              <LanguageIcon />
              <a
                href="https://alemtilsimat.com"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  ...(isMobile ? { fontSize: 16 } : { fontSize: 20 }),

                  fontFamily: "Montserrat",
                }}
              >
                www.alemtilsimat.com
              </a>
            </Stack>
          </Stack>
          <Stack
            width={{ lg: 420, md: "100%", sm: "100%", xs: "100%" }}
            height={190}
            justifyContent="center"
            pt={{ lg: 0, md: 0, sm: 0, xs: 2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d385.00680435551686!2d58.363795627254426!3d37.90382396484076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d37.9037553!2d58.363958499999995!5e1!3m2!1sen!2s!4v1718447810086!5m2!1sen!2s"
              style={{ width: "auto" }}
              height="216px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Stack>
      </Box>
      <Divider sx={{ background: "lightgray" }} />

      <Typography
        textAlign="center"
        fontWeight={300}
        fontFamily="Montserrat"
        fontSize={{ lg: 16, md: 15, sm: 14, xs: 12 }}
        color="#858585"
        p="8px 0"
        backgroundColor="#112334"
      >
        Copyright © {new Date().getFullYear()} Älem Tilsimat
      </Typography>
    </>
  );
};

export default Footer;
