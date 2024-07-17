import React from "react";
import { tokens } from "../theme";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import Lottie from "lottie-react";
import testimonialAnimation from "../assets/testimonialAnimation.json";
import TestimonialCard from "./TestimonialCard";
import nirajImage from "../assets/Testimonial/NirajImage.jpg";
import saurabhImage from "../assets/Testimonial/SaurabhImage.jpg";
import rajniImage from "../assets/Testimonial/RajniImg.jpg";

const Testimonials = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const testimonialData = [
    {
      id: 1,
      image: nirajImage,
      name: "Niraj Kumar Lather",
      post: "SDE-1",
      companyName: "Consultadd Inc.",
      quote:
        "Working with Tushyap has been an absolute pleasure. His technical expertise specially in Full Stack web development is truly remarkable, and his ability to seamlessly navigate through complex coding challenges is a testament to his deep understanding of these technologies. He is not only good at React but also an incredibly hardworking individual who consistently goes above and beyond to deliver high-quality solutions, with his technical expertise in other fields as well. His dedication to the project, coupled with innovative problem-solving skills, is an impressive skill needed for any project. I highly recommend Tushyap for any project requiring relevant expertise development.",
    },
    {
      id: 2,
      image: saurabhImage,
      name: "Saurabh Pandey",
      post: "Software Engineer",
      companyName: "GlobalLogic - A Hitachi Group Company",
      quote:
        "I've had the pleasure of closely working with Tushyap over the past 1.5 years, and it's been an exceptional experience. He is a standout professional, particularly in the realm of React development. Their proficiency in React is nothing short of impressive. He has consistently demonstrated a deep understanding of React's intricacies, and their ability to translate complex requirements into elegant and efficient React components is commendable. Beyond technical expertise, Tushyap is a reliable team player, seamlessly collaborating with cross-functional teams, providing valuable insights, and actively contributing to the success of our projects. Their positive attitude and willingness to go the extra mile make them a joy to work with.",
    },
    {
      id: 3,
      image: rajniImage,
      name: "Rajni Garg",
      post: "Salesforce Developer",
      companyName: "Appsavio Software Private Ltd.",
      quote:
        "Tushyap is a consummate professional with an outstanding proficiency in Web development. His technical prowess extends beyond these stacks, showcasing a comprehensive understanding of diverse technologies. Tushyap's dedication to projects is evident in his tireless work ethic, consistently surpassing expectations. His problem-solving skills, marked by innovation and efficiency, make him an invaluable asset in any professional setting. Tushyap's expertise extends beyond the boundaries of his core specialties, reflecting a versatile and adaptable approach to his work. In the realm of technology, Tushyap stands out as a reliable and resourceful professional, capable of navigating the complexities of modern development landscapes. His impressive track record and commitment to excellence make him a go-to choice for projects demanding precision, expertise, and a results-driven mindset.",
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
      marginBottom="15px"
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
                  Testimonials
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.greenAccent[400],
                    fontWeight: "500",
                    marginBottom: "25px",
                  }}
                >
                  "Voices of Trust: Where Experiences Speak Louder Than Words!"
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
          marginTop="20px"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {testimonialData.map((testData) => (
            <TestimonialCard
              key={testData.id}
              image={testData.image}
              name={testData.name}
              post={testData.post}
              companyName={testData.companyName}
              quote={testData.quote}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
