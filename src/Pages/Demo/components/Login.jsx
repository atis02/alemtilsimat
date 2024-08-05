import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TabletAndroidOutlinedIcon from "@mui/icons-material/TabletAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTranslation } from "react-i18next";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const currentPassword = "AlemTilsimat50";
  const currentEmail = "info@alemtilsimat.com";

  const onSend = () => {
    setLoading(true);
    if (password === "" || email === "") {
      toast.error("Dogry maglumatyňyzy giriziň!"), setLoading(false);
    } else if (password === currentPassword && email === currentEmail) {
      navigate("/projects");
    } else {
      toast.error("Dogry maglumatyňyzy giriziň!"), setLoading(false);
    }
  };
  console.log(password);
  return (
    <Box
      sx={{
        minHeight: "75vh",
        pr: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        pl: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        m: "80px 0",
      }}
    >
      <ToastContainer />

      <Stack alignItems="center">
        <Stack
          width={{ lg: 520, md: 500, sm: 600, xs: "100%" }}
          height={{ lg: 460, md: 460, sm: 400, xs: 400 }}
          sx={{
            webkitBoxShadow: "9px 12px 39px 2px rgba(0,0,0,0.75)",
            mozBoxShadow: "9px 12px 39px 2px rgba(0,0,0,0.75)",
            boxShadow: "9px 12px 39px 2px rgba(0,0,0,0.75)",
            background: "#04101C",
            zIndex: "100",
            border: "1px solid #114896",
            borderRadius: "10px",
          }}
        >
          <Stack spacing="20px" alignItems="center">
            <Typography
              fontFamily="Poppins"
              fontSize={{ lg: 50, md: 40, sm: 35, xs: 35 }}
              fontWeight={400}
              color="#fff"
              pt="30px"
            >
              Log in
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              mb="30px"
              width={{ lg: "80%", sm: "80%", md: "70%", xs: "90%" }}
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
          </Stack>
          <Stack
            width="95%"
            mt="30px"
            spacing={{ lg: "30px", md: "20px", sm: "15px", xs: "10px" }}
            p={{ lg: "0 60px", md: "0 30px", sm: "0 20px", xs: "0 10px" }}
          >
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlinedIcon
                      sx={{
                        color: "rgba(0,224,255,1)",
                        mb: "20px",
                        mr: "15px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                height: "60px",
                padding: "5px 0",

                "& .MuiInput-underline::before": {
                  borderBottomColor: "#A1A1A1",
                },
                "& .MuiInput-underline::after": {
                  borderBottomColor: "#A1A1A1",
                },

                "& .MuiInputLabel-standard": {
                  pl: "15px",
                  fontSize: 13,
                  color: "#A1A1A1",
                },
                "& .MuiInputBase-input": { color: "#A1A1A1" },
                "& .MuiInputBase-root:hover": {
                  borderBottomColor: "#A1A1A1", // Change to your desired color
                },
              }}
              variant="standard"
              label={t("email")}
            ></TextField>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: "#00E0FF", mb: "20px", mr: "5px" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                height: "60px",
                padding: "5px 0",

                "& .MuiInput-underline::before": {
                  borderBottomColor: "#A1A1A1",
                },
                "& .MuiInput-underline::after": {
                  borderBottomColor: "#A1A1A1",
                },

                "& .MuiInputLabel-standard": {
                  pl: "15px",
                  fontSize: 13,
                  color: "#A1A1A1",
                },
                "& .MuiInputBase-input": { color: "#A1A1A1" },
                "& .MuiInputBase-root:hover": {
                  borderBottomColor: "#A1A1A1", // Change to your desired color
                },
              }}
              variant="standard"
              label={t("password")}
            ></TextField>

            <Stack alignItems="center" pt="20px">
              <Button
                sx={{
                  color: "#00E0FF",
                  border: "2px solid #00E0FF",
                  borderRadius: "26px",
                  width: { lg: 213, md: 203, sm: 180, xs: 173 },
                  textTransform: "initial",
                  height: 60,
                  display: "flex",
                  gap: "10px",
                  fontSize: { lg: 18, md: 18, sm: 16, xs: 15 },
                  fontWeight: 600,
                  transition: "all ease 0.4s",

                  "&:hover": {
                    gap: "17px",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,224,255,1) 100%)",
                    color: "#114896",
                  },
                }}
                onClick={onSend}
              >
                {loading ? (
                  <Stack alignItems="center">
                    <CircularProgress sx={{ color: "#fff" }} />
                  </Stack>
                ) : (
                  t("send")
                )}
                <EastIcon />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
