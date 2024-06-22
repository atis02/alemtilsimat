import {
  Box,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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

  const lang =
    i18n.language === "tm"
      ? {
          color: "#3a3a3a",
          backgroundColor: "#2265a7",

          "&:hover": { backgroundColor: "#666666" },
        }
      : {};
  const lang2 =
    i18n.language === "ru"
      ? {
          color: "#fff",
          backgroundColor: "#2265a7",
          "&:hover": { backgroundColor: "#666666" },
        }
      : { color: "#fff" };
  const lang3 =
    i18n.language === "en"
      ? {
          color: "#fff",
          backgroundColor: "#2265a7",
          "&:hover": { backgroundColor: "#666666" },
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
          <Stack direction="row" spacing={1}>
            <Typography
              fontFamily="Montserrat"
              textTransform="capitalize"
              fontWeight={600}
              sx={{ ...(isMobile ? { fontSize: 15 } : { fontSize: 20 }) }}
              color="#fff"
            >
              Рус
            </Typography>
          </Stack>
        ) : (
          <Stack direction="row" spacing={1}>
            <Typography
              fontWeight={600}
              sx={{ ...(isMobile ? { fontSize: 15 } : { fontSize: 20 }) }}
              color="#fff"
              fontFamily="Montserrat"
              textTransform="capitalize"
            >
              Eng
            </Typography>
          </Stack>
        )}
        <ArrowDownwardIcon
          sx={{
            color: "#fff",
            ...(open ? { transform: "rotate(180deg)" } : ""),
            width: { lg: 16, md: 15, xs: 14 },
            height: { lg: 16, md: 15, xs: 14 },
          }}
        />
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          zIndex: "100000",
          position: "fixed",
        }}
        MenuListProps={{
          "aris-labelledby": "basic-button",
          sx: { backgroundColor: "#04101c" },
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("ru")} sx={lang2}>
          <Stack direction="row" spacing={1}>
            <Typography>Русский</Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={lang3} onClick={() => handleLanguageChange("en")}>
          <Stack direction="row" spacing={1}>
            <Typography>English</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  );
}
