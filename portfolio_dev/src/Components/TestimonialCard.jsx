import React from "react";
import { tokens } from "../theme";
import { Box, Typography, Grid, useTheme, Rating } from "@mui/material";

const TestimonialCard = ({ image, name, post, companyName, quote }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid
      item
      xs={12}
      md={5}
      margin="10px"
      borderRadius="10px"
      sx={{
        padding: "10px",
        background: colors.toggle[200],
        boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginTop="20px"
        marginLeft="10px"
      >
          <img
            src={image}
            alt="Img1"
            style={{
              width: "100px",
              height: "100px",
              padding:"6px",
              borderRadius: "50%",
              background: colors.toggle[200],
              boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
            }}
          />
        <Box marginLeft="20px">
          <Typography variant="h4" color={colors.blueAccent[400]}>
            {name}
          </Typography>
          <Typography variant="h5" color={colors.grey[200]}>
            {post}
          </Typography>
          <Typography variant="h6" color={colors.greenAccent[500]}>
            {companyName}
          </Typography>
        </Box>
      </Box>
      <Box
        marginTop="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyItems="center"
      >
        <Typography
          variant="h5"
          textAlign="center"
          padding="10px"
          color={colors.grey[300]}
        >
          {quote}
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
      </Box>
    </Grid>
  );
};

export default TestimonialCard;
