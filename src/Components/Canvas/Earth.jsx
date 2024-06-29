import React from "react";
import videoSrc from "/space/earth.mp4";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
const Earth = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Stack
      sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
    >
      <video
        autoPlay
        style={{
          width: "99.6vw",
          height: "100vh",
          position: " absolute",
          objectFit: "cover",
          top: 0,
        }}
        loop
        muted
        src={videoSrc}
      />
    </Stack>
  );
};

export default Earth;
