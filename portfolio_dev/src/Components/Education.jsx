import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import { tokens } from "../theme";
import bgImg from "../assets/graduation.png";

const Education = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center",
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft="15px"
      marginBottom="15px"
    >
      <Grid
        container
        width="95%"
        height="100%"
        marginTop="50px"
        style={bgStyle}
      >
        <Grid item xs={12} md={12}>
          <Typography
            variant="h1"
            sx={{
              color: colors.blueAccent[400],
              fontWeight: "500",
            }}
          >
            Education
          </Typography>
          <Box marginTop="30px">
            <Typography
              variant="h2"
              sx={{
                color: colors.grey[100],
                fontWeight: "500",
              }}
            >
              B.Tech - Rajasthan Technical University, Kota, Rajasthan
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: colors.grey[100],
                marginTop: "6px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Arya College Of Engineering & Research Center, Jaipur, Rajasthan  |  CSE
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Full-Time | 2018 - 2022
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "10px",
              }}
            >
              CGPA : 9.08 / 10
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              variant="h2"
              sx={{
                color: colors.grey[100],
                fontWeight: "500",
              }}
            >
              Class XII - CBSE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: colors.grey[100],
                marginTop: "6px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Kendriya Vidyalaya Hisar Cantt, Hisar, Haryana
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Full-Time | 2017
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              PCM - 94%
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: colors.grey[100],
                fontWeight: "500",
              }}
            >
              Class X - CBSE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: colors.grey[100],
                marginTop: "6px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Kendriya Vidyalaya Hisar Cantt, Hisar, Haryana
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Full-Time | 2015
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              CGPA : 9.0 / 10
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
