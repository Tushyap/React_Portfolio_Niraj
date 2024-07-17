import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";
import Lottie from "lottie-react";
import robotAnimation from "../assets/Robot2Animation.json";
const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: colors.toggle[200],
        boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h6"
        textAlign="center"
        color={colors.greenAccent[400]}
      >
        Handcrafted & Developed by me &copy; 2024. All rights reserved.
      </Typography>
      <Lottie
        animationData={robotAnimation}
        style={{
          width: "65px",
          height: "65px",
          padding: "8px",
          marginLeft:"10px",
        }}
      />
    </Box>
  );
};

export default Footer;
