import React, { useEffect, useRef } from "react";
import { tokens } from "../theme";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Grid,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contactAnimation.json";
import { GrSend } from "react-icons/gr";
import { PiGithubLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful, isDirty, isSubmitting },
  } = useForm();

  const formData = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_g2ydg2d",
        "template_wua4jvx",
        formData.current,
        "Vit48p_BZBpUiVhI5"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputStyle = {
    width: "100%",
    backgroundImage: "none",
    border: "none",
    display: "block",
    padding: "10px 18px",
    color: colors.grey[200],
    marginTop: "10px",
    fontSize: "16px",
    outline: "none",
    borderRadius: "8px",
    background: colors.toggle[200],
    boxShadow: `4px 4px 5px ${colors.toggle[100]} , -4px -4px 5px ${colors.toggle[300]}`,
  };

  const inputLableStyle = {
    display: "flex",
    fontSize: "18px",
    marginTop: "15px",
    color: colors.grey[200],
  };

  const onSubmit = (data) => {
    console.log("Form Submitted !!!!!!!", data);
    sendEmail();
  };

  const onError = (errors) => {
    console.log("Form Error", errors);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
      <Grid container width="90%" height="100%" marginTop="20px">
        <Grid item xs={12} md={12} marginTop="10px">
          <Typography
            variant="h2"
            sx={{
              color: colors.blueAccent[400],
              fontWeight: "500",
            }}
          >
            Contact Info...
          </Typography>
          <Grid container spacing={1} marginTop="20px">
            <Grid item xs={12} md={6} marginTop="10px">
              <Box
                sx={{
                  flexGrow: 1,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="90%"
                marginTop="40px"
              >
                <Box
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} ,-4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <Lottie
                    animationData={contactAnimation}
                    style={{
                      width: "340px",
                      height: "340px",
                    }}
                    loop="5"
                  />
                </Box>
              </Box>
              <Box
                padding="12px 6px"
                width="90%"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                marginTop="50px"
                style={{
                  color: colors.blueAccent[500],
                  borderRadius: "20px",
                  flexGrow: "1",
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
            </Box>
            </Grid>
            <Grid item xs={12} md={6} marginTop="10px">
              <Box
                sx={{
                  flexGrow: 1,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      color: colors.greenAccent[400],
                      fontWeight: "500",
                      marginTop: "5px",
                    }}
                  >
                    Love to hear from you, Get in touch👋
                  </Typography>
                  <Box
                    sx={{
                      flexGrow: 1,
                    }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="10px"
                  >
                    <form
                      onSubmit={handleSubmit(onSubmit, onError)}
                      style={{ width: "100%" }}
                      ref={formData}
                      noValidate
                    >
                      <label htmlFor="fname" style={inputLableStyle}>
                        Full Name :
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        {...register("fname", {
                          required: {
                            value: true,
                            message: "Your name is required*",
                          },
                        })}
                        style={inputStyle}
                        placeholder="Name"
                      />
                      {errors.fname && (
                        <span
                          style={{
                            marginTop: "15px",
                            color: colors.redAccent[500],
                          }}
                        >
                          {errors.fname.message}
                        </span>
                      )}

                      <label htmlFor="email" style={inputLableStyle}>
                        Email :
                      </label>

                      <input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Your email is required*",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please Enter Valid Email",
                          },
                        })}
                        id="email"
                        style={inputStyle}
                        placeholder="abc@gmail.com"
                      />
                      {errors.email && (
                        <span
                          style={{
                            marginTop: "15px",
                            color: colors.redAccent[500],
                          }}
                        >
                          {errors.email?.message}
                        </span>
                      )}

                      <label htmlFor="phone" style={inputLableStyle}>
                        Phone :
                      </label>
                      <input
                        type="text"
                        name="phone"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Your number is required*",
                          },
                          pattern: {
                            value:
                              /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/,
                            message: "Please Enter Your Valid Number",
                          },
                        })}
                        id="phone"
                        style={inputStyle}
                        placeholder="+91 1234567890"
                      />
                      {errors.phone && (
                        <span
                          style={{
                            marginTop: "15px",
                            color: colors.redAccent[500],
                          }}
                        >
                          {errors.phone.message}
                        </span>
                      )}

                      <label htmlFor="message" style={inputLableStyle}>
                        Message:
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows="5"
                        name="message"
                        cols="10"
                        style={inputStyle}
                        placeholder="Got a question, suggestion, feedback, appreciation, build a project or just want to say hello? Your thoughts matter. I'm just a message away, eager to hear what you have to say."
                      ></textarea>
                      <Box
                        sx={{
                          flexGrow: 1,
                        }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginTop="25px"
                        width="90%"
                      >
                        <Button
                          type="submit"
                          disabled={!isDirty || isSubmitting}
                          endIcon={<GrSend />}
                          sx={{
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            borderRadius: "20px",
                            width: "160px",
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
                            Send
                          </Typography>
                        </Button>
                      </Box>
                    </form>
                    <DevTool control={control} />
                    <Snackbar
                      open={open}
                      autoHideDuration={5000}
                      onClose={handleClose}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: "100%", fontSize: "18px" }}
                      >
                        Thank you! Your message recieved...
                        Will be in touch shortly 🙂
                      </Alert>
                    </Snackbar>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
