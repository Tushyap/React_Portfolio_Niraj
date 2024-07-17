import React from "react";
import { tokens } from "../theme";
import {
  Box,
  Typography,
  useTheme,
  Chip,
  Button,
  Grid,
  Accordion,
  // AccordionDetails,
  AccordionSummary,
  // List,
  // ListItem,
  // ListItemText,
  IconButton,
} from "@mui/material";
// import { IoEye } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import { TbPoint } from "react-icons/tb";

const ProjectCard = ({
  // img,
  description,
  title,
  skills,
  // url,
  codeUrl,
  // keyPoints,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "10px",
        borderRadius: "20px",
        backgroundColor: colors.toggle[200],
        boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
      }}
      marginTop="40px"
    >
      <Grid item xs={12} md={4} paddingRight="16px">
        <Box
          sx={{
            padding: "16px",
            borderRadius: "4px",
            backgroundColor: colors.toggle[200],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
          }}
        >
          {/* <Box>
            <img
              src={img}
              alt="img"
              width="100%"
              height="70%"
              style={{ borderRadius: "10px", objectFit: "contain" }}
            />
          </Box> */}
          <Typography
            color={colors.blueAccent[400]}
            gutterBottom
            variant="h3"
            marginTop="20px"
            marginBottom="20px"
          >
            {title}
          </Typography>
          <Box
            sx={{
              marginBottom: "10px",
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: colors.blueAccent[500],
                textDecoration: "none",
                backgroundColor: colors.toggle[200],
              }}
            >
              <Button
                startIcon={<IoEye />}
                sx={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "10px",
                  color: colors.blueAccent[500],
                  backgroundColor: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  ":hover": {
                    color: colors.greenAccent[500],
                  },
                }}
              >
                View
              </Button>
            </a> */}
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: colors.blueAccent[500],
                textDecoration: "none",
                backgroundColor: colors.toggle[200],
              }}
            >
              <Button
                startIcon={<IoCodeSlash />}
                sx={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "10px",
                  color: colors.blueAccent[500],
                  backgroundColor: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  ":hover": {
                    color: colors.greenAccent[500],
                  },
                }}
              >
                Code
              </Button>
            </a>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={8} paddingRight="16px">
        <Box
          sx={{
            padding: "16px",
            borderRadius: "4px",
            backgroundColor: colors.toggle[200],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
          }}
        >
          <Typography
            variant="h3"
            marginBottom="10px"
            color={colors.blueAccent[400]}
          >
            Tech Stack:
          </Typography>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              color="secondary"
              sx={{ margin: "2px" }}
            />
          ))}
          <Typography
            variant="h3"
            marginTop="10px"
            color={colors.blueAccent[400]}
          >
            Features & Functionality
          </Typography>
          <Box marginTop="10px">
            <Accordion
              sx={{
                backgroundImage: "none",
                background: colors.toggle[200],
              }}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton
                    size="large"
                    color={colors.grey[100]}
                    sx={{
                      ":hover": {
                        color: colors.blueAccent[500],
                      },
                    }}
                    style={{
                      borderRadius: "50%",
                      background: colors.toggle[200],
                      boxShadow: `3px 3px 3px ${colors.toggle[100]} , -3px -3px 3px ${colors.toggle[300]}`,
                    }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                }
                aria-controls="panel1-content"
                id="panel1-header"
                color={colors.grey[200]}
              >
                <Typography variant="h5" color={colors.grey[200]}>
                  {description}
                </Typography>
              </AccordionSummary>
              {/* <AccordionDetails>
                <List>
                  {keyPoints.map((keyPoint, index) => {
                    return (
                      <ListItem
                        key={index}
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
                          {keyPoint}
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails> */}
            </Accordion>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
