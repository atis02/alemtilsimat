import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TabletAndroidOutlinedIcon from "@mui/icons-material/TabletAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Contacts = () => {
  return (
    <Box
      sx={{
        pr: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        pl: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        mb: "50px",
      }}
    >
      <Stack
        minHeight="90vh"
        direction={{ lg: "row", sm: "row", md: "row", xs: "column" }}
        justifyContent="center"
        alignItems="center"
        spacing={{ lg: 25, md: 20, sm: 15, xs: 5 }}
      >
        <Stack width={{ lg: 455, md: 440, sm: 400, xs: "100%" }}>
          <Typography
            color="#fff"
            fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 40, md: 34, sm: 28, xs: 25 }}
            lineHeight={{
              lg: "76px",
              md: "56px",
              sm: "46px",
              xs: "36px",
            }}
            className="main-title"
            textAlign="center"
          >
            Контакты
          </Typography>
          <Typography
            color="#DDDDDD"
            mb="30px"
            fontFamily="Montserrat"
            fontWeight={400}
            fontSize={{ lg: 13, md: 13, sm: 13, xs: 12 }}
            textAlign="center"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 24, md: 20, sm: 18, xs: 16 }}
            className="main-title"
            textAlign="center"
          >
            Адрес
          </Typography>
          <Typography
            color="#DDDDDD"
            mb="30px"
            fontFamily="Montserrat"
            fontWeight={400}
            fontSize={{ lg: 13, md: 13, sm: 13, xs: 12 }}
            textAlign="center"
          >
            Ашхабад, Проспект Гарашсызлык 49/1
          </Typography>
          <Typography
            color="#fff"
            fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 24, md: 20, sm: 18, xs: 16 }}
            className="main-title"
            textAlign="center"
          >
            Номер
          </Typography>
          <Typography
            color="#DDDDDD"
            fontFamily="Montserrat"
            fontWeight={400}
            fontSize={{ lg: 13, md: 13, sm: 13, xs: 12 }}
            textAlign="center"
          >
            <a
              href="tel: (+993 12) 48 66 40"
              style={{ textDecoration: "none", color: "#DDDDDD" }}
            >
              Офис: (+993 12) 48 66 40
            </a>
          </Typography>
          <Typography
            color="#DDDDDD"
            mb="30px"
            fontFamily="Montserrat"
            fontWeight={400}
            fontSize={{ lg: 13, md: 13, sm: 13, xs: 12 }}
            textAlign="center"
          >
            <a
              href="tel: +99362042189"
              style={{ textDecoration: "none", color: "#DDDDDD" }}
            >
              Мобильный: (+993) 62 04 21 89
            </a>
          </Typography>
        </Stack>

        <Stack
          width={{ lg: 500, md: 500, sm: 500, xs: "100%" }}
          height={550}
          alignItems="center"
          sx={{
            webkitBoxShadow: "9px 12px 39px 2px rgba(0,0,0,0.75)",
            mozBoxShadow: "9px 12px 39px 2px rgba(0,0,0,0.75)",
            boxShadow: "9px 12px 39px 2px rgba(0,0,0,0.75)",
            background: "#04101C",
            zIndex: "100",
          }}
        >
          <Typography
            color="#fff"
            fontFamily="Montserrat"
            fontWeight={600}
            fontSize={{ lg: 40, md: 34, sm: 28, xs: 25 }}
            lineHeight={{
              lg: "76px",
              md: "56px",
              sm: "46px",
              xs: "36px",
            }}
            className="main-title"
            textAlign="center"
            mt="30px"
          >
            Напишите нам
          </Typography>
          <Stack width="90%" mt="30px" spacing="20px">
            <TextField
              autoComplete={false}
              sx={{
                "& .MuiInput-underline::before": {
                  borderBottomColor: "#A1A1A1",
                },
                "& .MuiInput-underline::after": {
                  borderBottomColor: "#A1A1A1",
                },

                "& .MuiInputLabel-standard": {
                  color: "#A1A1A1",
                },
                "& .MuiInputBase-input": { color: "#A1A1A1" },
                "& .MuiInputBase-root:hover": {
                  borderBottomColor: "#A1A1A1", // Change to your desired color
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineOutlinedIcon
                      sx={{ color: "rgba(0,224,255,1)" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              label="Имя"
            ></TextField>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TabletAndroidOutlinedIcon
                      sx={{ color: "rgba(0,224,255,1)" }}
                    />
                  </InputAdornment>
                ),
              }}
              autoComplete={false}
              sx={{
                "& .MuiInput-underline::before": {
                  borderBottomColor: "#A1A1A1",
                },
                "& .MuiInput-underline::after": {
                  borderBottomColor: "#A1A1A1",
                },

                "& .MuiInputLabel-standard": {
                  color: "#A1A1A1",
                },
                "& .MuiInputBase-input": { color: "#A1A1A1" },
                "& .MuiInputBase-root:hover": {
                  borderBottomColor: "#A1A1A1", // Change to your desired color
                },
              }}
              variant="standard"
              label="Телефонный номер"
            ></TextField>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlinedIcon sx={{ color: "rgba(0,224,255,1)" }} />
                  </InputAdornment>
                ),
              }}
              autoComplete={false}
              sx={{
                "& .MuiInput-underline::before": {
                  borderBottomColor: "#A1A1A1",
                },
                "& .MuiInput-underline::after": {
                  borderBottomColor: "#A1A1A1",
                },

                "& .MuiInputLabel-standard": {
                  color: "#A1A1A1",
                },
                "& .MuiInputBase-input": { color: "#A1A1A1" },
                "& .MuiInputBase-root:hover": {
                  borderBottomColor: "#A1A1A1", // Change to your desired color
                },
              }}
              variant="standard"
              label="Э-почта"
            ></TextField>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src="/images/writeIcon.png"
                      style={{ wdith: 24, height: 24 }}
                      alt=""
                    />
                  </InputAdornment>
                ),
              }}
              autoComplete={false}
              sx={{
                "& .MuiInput-underline::before": {
                  borderBottomColor: "#A1A1A1",
                },
                "& .MuiInput-underline::after": {
                  borderBottomColor: "#A1A1A1",
                },

                "& .MuiInputLabel-standard": {
                  color: "#A1A1A1",
                },
                "& .MuiInputBase-input": { color: "#A1A1A1" },
                "& .MuiInputBase-root:hover": {
                  borderBottomColor: "#A1A1A1", // Change to your desired color
                },
              }}
              variant="standard"
              label="Сообщение"
            ></TextField>
            <Stack alignItems="center" pt="50px">
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
              >
                Отправить
                <EastIcon />
              </Button>
            </Stack>
          </Stack>
        </Stack>
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
      <Stack
        maxHeight={{ lg: 270, md: 250, sm: 230, xs: 180 }}
        maxWidth={{ lg: 280, md: 260, sm: 250, xs: 200 }}
        top={{ lg: 0, md: 0, sm: 0, xs: "200px" }}
        position="absolute"
        right="0"
      >
        <img
          src="/images/MainPageImages/Vector 14.png"
          style={{ width: "100%", height: "auto" }}
          alt=""
        />
      </Stack>
    </Box>
  );
};

export default Contacts;
