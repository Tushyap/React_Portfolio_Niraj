import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  Grid,
  ListItemText,
} from "@mui/material";
import { TbPoint } from "react-icons/tb";
import { tokens } from "../theme";

const Experience = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const consultadd = [
  "Created Python scripts to totally automate AWS services which includes web servers, ELB, database, EC2, S3 bucket and application configuration, this script creates stacks, single servers, or joins web servers to stacks and its testing is done.",
  "Worked on ETL Migration services by developing and deploying AWS Lambda functions for generating a serverless data pipeline which can be written to Glue Catalog and can be queried from Athena.",
  "Developed the new functionality and features as per the requirement.",
  "Troubleshoot and fixed bugs and issues to ensure smooth operation of the applications.",];

  const cintern = [
    "Developed views and templates with Python and Django’s view controllers and templating language to create a user-friendly website interface.",
    "Used Python panda’s module to read CSV files to obtain data and store the data in data structures provided in the NumPy module.",
    "Develop the new functionality and features as per the requirement also maintain the documentation.",
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
      marginBottom="15px"
    >
      <Grid container width="95%" height="100%" marginTop="40px">
        <Grid item xs={12} md={12}>
            <Typography
              variant="h1"
              sx={{
                color: colors.blueAccent[400],
                fontWeight: "500",
              }}
              marginBottom="40px"
            >
              Experience
            </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="40px"
            sx={{
              flexGrow: 1,
              display: { sm: "block", lg: "flex" },
            }}
          >
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
              Consultadd Inc, Pune
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: colors.grey[200],
                marginTop: "6px",
              }}
            >
              Full Time | July 2022
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[400],
                marginTop: "10px",
                fontWeight: "500",
              }}
            >
              Key Responsibilities
            </Typography>
            <List>
              {consultadd.map((responsibility) => {
                return (
                  <ListItem
                    key={responsibility}
                    sx={{
                      paddingBottom: "0px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingTop: "5px",
                    }}
                  >
                    <TbPoint
                      style={{
                        minWidth: "20px",
                        color: colors.greenAccent[300],
                      }}
                    />
                    <ListItemText
                      sx={{ color: colors.grey[200] }}
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "initial",
                        letterSpacing: 0,
                      }}
                    >
                      {responsibility}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="20px"
            sx={{
              flexGrow: 1,
              display: { sm: "block", lg: "flex" },
            }}
          >
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
              Consultadd Inc, Remote
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: colors.grey[200],
                marginTop: "6px",
              }}
            >
              Internship | Oct 2021 - June 2022
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[400],
                marginTop: "10px",
                fontWeight: "500",
              }}
            >
              Key Responsibilities
            </Typography>
            <List>
              {cintern.map((responsibility) => {
                return (
                  <ListItem
                    key={responsibility}
                    sx={{
                      paddingBottom: "0px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingTop: "5px",
                    }}
                  >
                    <TbPoint
                      style={{
                        minWidth: "20px",
                        color: colors.greenAccent[300],
                      }}
                    />
                    <ListItemText
                      sx={{ color: colors.grey[200] }}
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "initial",
                        letterSpacing: 0,
                      }}
                    >
                      {responsibility}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
