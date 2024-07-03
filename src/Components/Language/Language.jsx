import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Language() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lng")
  );
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = (lng) => {
    localStorage.setItem("lng", lng);
    setSelectedLanguage(lng);
    handleClose();
  };

  const lang2 =
    i18n.language === "ru"
      ? {
          color: "#fff",
          backgroundColor: "#00E0FF",
          "&:hover": { backgroundColor: "#00E0FF" },
        }
      : { color: "#fff" };
  const lang3 =
    i18n.language === "en"
      ? {
          color: "#fff",
          backgroundColor: "#00E0FF",
          "&:hover": { backgroundColor: "#00E0FF" },
        }
      : { color: "#fff" };

  return (
    <Box maxWidth={70}>
      <Stack
        cursor="pointer"
        variant="text"
        direction="row"
        mt={-0.2}
        alignItems="center"
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          gap: { lg: "5px", md: "3px", xs: 0 },
        }}
      >
        {localStorage.getItem("lng") === "ru" ? (
          <IconButton
            direction="row"
            onClick={() => handleLanguageChange("en")}
            spacing={1}
            sx={{ width: 50, height: 40 }}
          >
            <img
              src="/images/rus.png"
              style={{ width: "100%", height: "100%" }}
              alt="ru"
            />
          </IconButton>
        ) : (
          <IconButton
            direction="row"
            onClick={() => handleLanguageChange("ru")}
            spacing={1}
            sx={{ width: 50, height: 40 }}
          >
            <img
              src="/images/eng.png"
              style={{ width: "100%", height: "100%" }}
              alt="eng"
            />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
}
