import { Box, Container, Typography, useTheme, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { tokens } from "../theme";
import Lottie from "lottie-react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { PiGithubLogo } from "react-icons/pi";
import { PiPhoneCall } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import webAnimation from "../assets/webAnimation.json";
import Resume from "../assets/resume_niraj.pdf";
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
// import Certificates from './Certificates';
import Contact from './Contact';
import { makeStyles } from '@mui/styles';
import { keyframes } from "@mui/material";

const keyframe = new keyframes({
  0: {
    transform: [{ rotate: '0deg' }],
  },
  45: {
    transform: [{ rotate: '100deg' }],
  },
  100: {
    transform: [{ rotate: '45deg' }],
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1200px',
    margin: '50 auto',
    padding: '20px',
    gap: "20px"
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  contentItem: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
    },
  },
}));

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigateTo = useNavigate();
  const classes = useStyles();

  return (
    <Container fluid
      scroll-behaviour="smooth" 
      className={classes.container}
    >
      <Box
      >
        <Box
          sx={{ flexGrow: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.container}
          marginBottom="100px"
         
          animationData={keyframe}
          >
          <Grid container width="90%" height="100%" marginTop="80px">
            <Grid item xs={12} md={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h3"
                    style={{
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      marginTop: "20px",
                    }}
                    color={colors.greenAccent[400]}
                    paddingTop="10px"
                    paddingLeft="20px"
                  >
                    Hi! I'm
                  </Typography>
                  <Typography
                    variant="h1"
                    style={{ fontWeight: "bold", marginTop: "5px" }}
                    color={colors.blueAccent[400]}
                    paddingLeft="20px"
                  >
                    Niraj Kumar Lathar
                  </Typography>
                  <Typography
                    variant="h2"
                    style={{ fontWeight: "bold", marginTop: "5px" }}
                    color={colors.grey[200]}
                    paddingLeft="20px"
                  >
                    Crafting Digital Innovations: Bridging Creativity and Code in the Cloud!
                  </Typography>
                </Box>
                <Box
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Lottie
                    animationData={webAnimation}
                    style={{
                      width: "280px",
                      height: "280px",
                      padding: "8px",
                      borderRadius: "50%",
                      backgroundColor: colors.toggle[200],
                      boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                    }}
                  />
                </Box>
              </Box>

              <Grid item marginTop="20px">
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "initial",
                    fontStyle: "italic",
                    marginTop: "30px",
                  }}
                  color={colors.grey[200]}
                  padding="20px"
                >
                  "As a passionate software engineer with over 2 years of industry experience, 
                  I thrive on transforming innovative concepts into tangible digital solutions. 
                  My expertise lies in leveraging Python, AWS cloud services, and DevOps tools 
                  to architect, develop, and deploy cutting-edge web applications."
                </Typography>
                <Box
                  sx={{ flexGrow: 1 }}
                  margin="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="20px"
                >
                  <a
                    href={Resume}
                    download="Niraj Kumar - SDE"
                    style={{
                      color: colors.blueAccent[500],
                      textDecoration: "none",
                      backgroundColor: colors.toggle[200],
                    }}
                  >
                    <Button
                      endIcon={<FileDownloadOutlinedIcon />}
                      sx={{
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        borderRadius: "20px",
                        width: "210px",
                        color: colors.blueAccent[500],
                        backgroundColor: colors.toggle[200],
                        boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                        ":hover": {
                          color: colors.greenAccent[500],
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          ":hover": {
                            color: colors.greenAccent[500],
                          },
                        }}
                        variant="h4"
                        fontWeight="initial"
                      >
                        Download CV
                      </Typography>
                    </Button>
                  </a>
                </Box>
              </Grid>
              <Box
                sx={{ flexGrow: 1 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  padding="10px"
                  width="400px"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  style={{
                    color: colors.blueAccent[500],
                    borderRadius: "20px",
                    backgroundColor: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <a
                    href="https://github.com/defeall"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      size="large"
                      sx={{
                        borderRadius: "50%",
                        margin: "8px",
                        background: colors.grey[700],
                        color: colors.blueAccent[500],
                        boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                        ":hover": {
                          color: colors.greenAccent[500],
                        },
                      }}
                    >
                      <PiGithubLogo />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/niraj-kumar-lathar-4506a2138"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      size="large"
                      sx={{
                        borderRadius: "50%",
                        margin: "8px",
                        background: colors.grey[700],
                        color: colors.blueAccent[500],
                        boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                        ":hover": {
                          color: colors.greenAccent[500],
                        },
                      }}
                    >
                      <PiLinkedinLogo />
                    </IconButton>
                  </a>
                  <IconButton
                    size="large"
                    onClick={()=> navigateTo("/contacts")}
                    sx={{
                      borderRadius: "50%",
                      margin: "8px",
                      color: colors.blueAccent[500],
                      background: colors.grey[700],
                      boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                      ":hover": {
                        color: colors.greenAccent[500],
                      },
                    }}
                  >
                    <PiPhoneCall />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ flexGrow: 2 }}
          display="relative"
          justifyContent="center"
          alignItems="center"
          className={classes.container}
          marginBottom="100px"
        >
          <Experience />
        </Box>
        <Box 
          sx={{ flexGrow: 2 }}
          display="relative"
          justifyContent="center"
          alignItems="center"
          className={classes.container}
          marginBottom="100px"
        >
          <Skills />
        </Box>
        <Box 
          sx={{ flexGrow: 2 }}
          display="relative"
          justifyContent="center"
          alignItems="center"
          className={classes.container}
          marginBottom="100px"
        >
          <Projects />
        </Box>
        {/* <Box className={classes.contentItem}>
          <Certificates />
        </Box> */}
        <Box 
          sx={{ flexGrow: 2 }}
          display="relative"
          justifyContent="center"
          alignItems="center"
          className={classes.container}
          marginBottom="100px"
        >
          <Contact />
        </Box>
      </Box>
    </Container>  
  );
};

export default Home;
