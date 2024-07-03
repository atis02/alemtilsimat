import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navlinks } from "./components/navlinks.mjs";
import MenuIcon from "@mui/icons-material/Menu";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      position="sticky"
      top="0"
      width="100%"
      zIndex="1000"
      sx={{
        ...(scrolled
          ? {
              boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.25)",
              opacity: "90%",
              backgroundColor: "#04101c",
            }
          : { boxShadow: "0" }),
      }}
    >
      <Stack
        direction="row"
        mr="50px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          spacing="30px"
          pt={{ lg: "4vh", md: "4vh", sm: "3vh", xs: "2vh" }}
          pl="50px"
          pb={2}
          sx={{
            ...(isMobile ? { display: "none" } : { display: "flex" }),
          }}
        >
          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            className="nav-link"
            to="/"
          >
            {t("home")}
          </NavLink>
          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            className="nav-link"
            to="/demo"
          >
            {t("demo")}
          </NavLink>
          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            className="nav-link"
            to="/contacts"
          >
            {t("contact")}
          </NavLink>
        </Stack>
        <Stack
          sx={{
            ...(isMobile ? { display: "none" } : { display: "flex" }),
          }}
        >
          <Language />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        p="5px 20px"
        height={68}
        sx={{ ...(isMobile ? { display: "flex" } : { display: "none" }) }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              ...(isMobile && scrolled
                ? { display: "flex" }
                : { display: "none" }),
            }}
          >
            <Stack width="50px" height="58px">
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
                fontSize={16}
                ml={-2}
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
        </Link>

        <IconButton
          onClick={toggleMobileMenu}
          sx={{
            width: 24,
            height: 24,
            p: 0,
          }}
        >
          <MenuIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Stack>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            background: " transparent",
            backdropFilter: " blur(5px)",
          },
        }}
      >
        <Box
          className="mobile-menu"
          sx={{
            bg: "#8F6340",
            height: "100%",
            mt: "220px",
            padding: "16px 0",
          }}
        >
          <Stack
            spacing={2}
            direction="column"
            height="35px"
            alignItems="center"
          >
            <Button sx={{ color: "#fff" }} onClick={toggleMobileMenu}>
              <svg
                fillRule="evenodd"
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
              </svg>
            </Button>
            <Stack direction="column" alignItems="center" spacing={2}>
              <NavLink
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
                to="/"
              >
                {t("home")}
              </NavLink>
              <NavLink
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
                to="/demo"
              >
                {t("demo")}
              </NavLink>
              <NavLink
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link"
                to="/contacts"
              >
                {t("contact")}
              </NavLink>
              <Language />
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
