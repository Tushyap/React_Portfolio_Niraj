import { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Tab,
  Tabs,
  Grid
} from "@mui/material";
import CustomTabPanel from "./CustomeTabs";
import { tokens } from "../theme";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

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
      <Grid container fluid width="90%" height="100%" marginTop="40px">
        <Grid item xs={12} md={12}>
          <Box>
            <Typography
              variant="h2"
              style={{
                fontWeight: "initial",
                letterSpacing: "1px",
                marginTop: "20px",
              }}
              color={colors.blueAccent[300]}
              paddingTop="10px"
              paddingLeft="10px"
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontWeight: "initial",
                fontStyle: "italic",
                marginTop: "30px",
              }}
              color={colors.grey[200]}
              paddingLeft="10px"
            >
              "As a passionate software engineer with over 2 years of industry experience, I thrive on transforming innovative concepts into tangible digital solutions. 
              My expertise lies in leveraging Python, AWS cloud services, and DevOps tools to architect, develop, and deploy cutting-edge applications.
              With a strong foundation in Python, I excel in crafting robust back-end systems using frameworks like Flask and Django. 
              <br></br>
              <br></br>
              My proficiency extends to AWS cloud services, where I architect scalable and resilient infrastructures using technologies such as AWS Lambda, EC2, S3, and DynamoDB.
              In the realm of DevOps, I am adept at streamlining the software development lifecycle by implementing CI/CD pipelines with tools like Jenkins, Docker, and Kubernetes. 
              This ensures rapid deployment, continuous integration, and seamless delivery of high-quality software products.
              <br></br>
              <br></br>
              Moreover, my experience with relational databases and NoSQL solutions like Amazon RDS and DynamoDB allows me to design efficient data storage and retrieval mechanisms, ensuring optimal performance for applications.
            </Typography>
          </Box>
          <Box marginTop="30px">
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                sx={{
                  bgcolor: colors.toggle[200],
                }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab
                  sx={{
                    bgcolor: colors.toggle[200],
                    color: colors.greenAccent[400],
                    fontSize: "18px",
                    textTransform: "capitalize",
                  }}
                  label="Experience"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    bgcolor: colors.toggle[200],
                    color: colors.greenAccent[400],
                    fontSize: "18px",
                    textTransform: "capitalize",
                    marginLeft: "10px",
                  }}
                  label="Education"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
            <Box sx={{ marginTop: "10px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  Associate Software Engineer
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "4px",
                  }}
                >
                  Consultadd Inc | Pune
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Full-Time | July, 2022
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  Associate Software Engineer Intern
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "4px",
                  }}
                >
                  Consultadd Inc | Remote
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Internship | Oct, 2021 - June, 2022
                </Typography>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  B.Tech - Rajasthan Technical University, Kota, Rajasthan
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "4px",
                  }}
                >
                  Arya College Of Engineering & Research Center, Jaipur, Rajasthan  |  CSE
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Full-Time | 2018 - 2022
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "10px",
                  }}
                >
                  CGPA : 9.08 / 10
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  Class XII - CBSE
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Kendriya Vidyalaya Hisar Cantt,
                  Hisar, Haryana
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Full-Time | 2017
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  PCM - 94%
                </Typography>
              </Box>
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
