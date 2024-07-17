import React, { useState } from "react";
import { tokens } from "../theme";
import Carousel from "react-bootstrap/Carousel";
import { GrSend } from "react-icons/gr";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Button,
} from "@mui/material";

import Tushyap from "../assets/quitetude.jpg";
import EceraExp from "../assets/certificates/eceraExp.jpg";
import EceraApr from "../assets/certificates/eceraApr.jpg";
import EceraComp from "../assets/certificates/eceraComp.jpg";
import CNDsa from "../assets/certificates/CNDSA.jpg";
import CNJava from "../assets/certificates/CNJava.jpg";
import ReactHackerRank from "../assets/certificates/React.jpg";
import SQLBasic from "../assets/certificates/SQLB.jpg";
import SQLIntermediate from "../assets/certificates/SQLI.jpg";
import UdemyHtml from "../assets/certificates/udemyHtml.jpg";
import UdemyJS from "../assets/certificates/jsUdemy.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Certificates = () => {
  const [index, setIndex] = useState(0);
  const { isAuthenticated } = useAuth0();
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const certificatesData = [
    Tushyap,
    EceraExp,
    EceraComp,
    CNDsa,
    CNJava,
    UdemyJS,
    SQLIntermediate,
    ReactHackerRank,
    SQLBasic,
    EceraApr,
    UdemyHtml,
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
      <Grid container width="90%" height="100%" marginTop="40px">
        <Grid item xs={12} md={12}>
          <Typography
            variant="h2"
            sx={{
              color: colors.blueAccent[400],
              fontWeight: "500",
            }}
          >
            Certificates & Achievements
          </Typography>
          <Box
            marginTop="25px"
            marginBottom="25px"
            sx={{
              flexGrow: 1,
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              data-bs-theme="dark"
              style={{
                width: "80%",
                borderRadius: "20px",
                background: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} ,-4px -5px 6px ${colors.toggle[300]}`,
              }}
            >
              {certificatesData.map((item) => (
                <Carousel.Item key={item}>
                  <Box
                    margin="6px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="340px"
                  >
                    <img
                      src={item}
                      alt="img"
                      width="90%"
                      height="100%"
                      style={{
                        borderRadius: "10px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Carousel.Item>
              ))}
            </Carousel>
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: colors.grey[100],
              marginTop: "40px",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            Note : If you want to verify official documents,In order to protect
            the crucial information and to facilitate the completion of required
            details & documentation.I would request you to Login just to
            authenticate your identity...
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="60px"
          >
            {" "}
            <Button
              endIcon={<GrSend />}
              disabled={!isAuthenticated}
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "20px",
                paddingRight: "18px",
                borderRadius: "18px",
                fontSize: "18px",
                color: colors.blueAccent[500],
                backgroundColor: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                ":hover": {
                  color: colors.greenAccent[500],
                  backgroundColor: colors.toggle[200],
                },
              }}
            >
              <Link
                to="https://drive.google.com/drive/folders/1s4OBu2vCjnU0Ahn2Hy6lGzb3SdVfKTtx"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
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
                  View Required Documents
                </Typography>
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Certificates;
