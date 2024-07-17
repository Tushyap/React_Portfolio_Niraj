import React from "react";
import { tokens } from "../theme";
import { Box, Typography, Grid, useTheme, IconButton } from "@mui/material";
import Lottie from "lottie-react";
import testimonialAnimation from "../assets/testimonialAnimation.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { GrReactjs } from "react-icons/gr";

const SkillsCard = ({ icon, title, subContent }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box marginTop="30px">
      <Accordion
        style={{
          margin: "10px",
          padding: "5px",
          background: colors.toggle[200],
          boxShadow: `3px 3px 3px ${colors.toggle[100]} , -3px -3px 3px ${colors.toggle[300]}`,
        }}
      >
        <AccordionSummary
          expandIcon={
            <IconButton
              size="medium"
              color={colors.grey[100]}
              sx={{
                ":hover": {
                  color: colors.blueAccent[500],
                },
              }}
              style={{
                display:"flex",
                alignItems:"center",
                borderRadius: "50%",
                background: colors.toggle[200],
                boxShadow: `3px 3px 3px ${colors.toggle[100]} , -3px -3px 3px ${colors.toggle[300]}`,
              }}
            >
              {icon}
            </IconButton>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <IconButton
                  size="medium"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500],
                    },
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <GrReactjs />
                </IconButton>
          <Typography variant="h4" color={colors.blueAccent[400]} style={{
                   marginLeft:'15px',
                   paddingTop:"8px",
                  }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            {subContent}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const SkillsComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const skillsData1 = [
    {
      id: 1,
      title: "Python",
      subContent: "Niraj Kumar Lather",
      icon: <ArrowDownwardIcon />,
    },
    {
      id: 2,
      title: "AWS",
      subContent: "tu Likh liyo apne according",
      icon: <ArrowDownwardIcon />,
    },
  ];

  const skillsData2 = [
    {
      id: 1,
      title: "React.JS",
      subContent: "Icon aur content change kr liyo khud se",
      icon: <ArrowDownwardIcon />,
    },
    {
      id: 2,
      title: "Github",
      subContent: "tu Likh liyo apne according",
      icon: <ArrowDownwardIcon />,
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft="15px"
      marginBottom="5px"
    >
      <Grid container width="95%" height="100%" marginTop="10px">
        <Grid item xs={12} md={12}>
          <Grid container spacing={1} marginTop="20px">
            <Grid item xs={12} md={9} marginTop="10px">
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                    marginBottom: "15px",
                  }}
                >
                  Skills
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.greenAccent[400],
                    fontWeight: "500",
                    marginBottom: "25px",
                  }}
                >
                  "Skills subheading - apne according chatgpt se likhwa lena "
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} marginTop="10px">
              <Box
                width="100%"
                sx={{ display: { xs: "none", md: "flex" } }}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <Lottie
                    animationData={testimonialAnimation}
                    style={{
                      width: "220px",
                      height: "220px",
                      padding: "8px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop="-250px"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {skillsData1.map((testData) => (
                <SkillsCard
                  key={testData.id}
                  icon={testData.icon}
                  title={testData.title}
                  subContent={testData.subContent}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              {skillsData2.map((testData) => (
                <SkillsCard
                  key={testData.id}
                  icon={testData.icon}
                  title={testData.title}
                  subContent={testData.subContent}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsComponent;
