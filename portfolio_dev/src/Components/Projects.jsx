import React, {useState, useEffect} from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
// import adminImg from "../assets/Admin Dashboard.jpg";
// import Project1Img from "../assets/portfolioPic.png";
// import Edify from "../assets/edify.png";
// import iChanakya from "../assets/iChanakya.png";
import Lottie from "lottie-react";
import robotAnimation from "../assets/RobotAnimation.json";
import axios from 'axios';

// const projectDetails = [
//   {
//     id: 1,
//     img: Project1Img,
//     title: "Tushyap - Portfolio",
//     url: "https://tushyap-bari-portfolio.netlify.app/",
//     codeUrl: "https://github.com/Tushyap/Portfolio_Tushyap",
//     description:
//       "Explore my world of creativity through this dynamic portfolio project! Crafted with passion and expertise, this website is powered by ReactJS, adorned with Material UI for a sleek aesthetic, and fueled by the seamless email handling of EmailJS. For an extra layer of security and authentication, I've integrated Auth0 to ensure a trustworthy and personalized experience. Let's embark on a journey through the realms of design and technology.",
//     keyPoints: [
//       "Responsive Design: Marvel at the responsiveness that adapts gracefully to any device, ensuring an immersive experience whether you're on a desktop, tablet, or smartphone.",
//       "Modern UI with Material Design: Indulge in the modern and visually appealing user interface, designed with the principles of Material Design. Each element is carefully curated to provide an intuitive and delightful experience.",
//       "Interactive Components: Engage with interactive components that bring this portfolio to life. From smooth animations to interactive project displays, every detail is crafted to captivate visitors.",
//       "Skills Section: Discover my skills showcased through visually appealing icons. Whether it's ReactJS, Material UI, or other tools, my proficiency is laid out for you to see.",
//       "Contact Form with EmailJS & Auth0 Integration: Connect with me effortlessly using the integrated contact form. Powered by EmailJS for secure email communication and Auth0 for robust user authentication, your interactions are not only seamless but also trustworthy.",
//       "Smooth Navigation: Navigate seamlessly through the portfolio, experiencing a user-friendly interface that allows you to explore my projects, skills, and contact information effortlessly.",
//       "Code Quality: Admire the commitment to clean and maintainable code, showcasing my proficiency in writing efficient and effective ReactJS code.",
//       "Version Control: Rest easy knowing that this project is managed with Git, ensuring version control, collaboration, and the ability to continuously refine and enhance.",
//       " Social Media Integration: Connect with me beyond the portfolio! Explore my social media links and stay updated on the latest projects, thoughts, and inspirations.",
//     ],
//     skills: [
//       "React.JS",
//       "JavaScript",
//       "Auth0",
//       "MUI",
//       "EmailJS",
//       "React-Pro-Sidebar",
//       "React-Hook-Form",
//       "React-Router_Dom",
//       "Git",
//       "Github",
//       "Netlify",
//       "BootStrap",
//     ],
//   },
//   {
//     id: 2,
//     img: adminImg,
//     title: "Admin Dashboard ... Still WIP",
//     url: "https://tushyap-dashboard.netlify.app/",
//     codeUrl: "https://github.com/Tushyap/admin_dashboard",
//     description:
//       "Elevate your administrative tasks with our cutting-edge Admin Dashboard built using React, Material-UI, and React Pro Sidebar. This robust and intuitive solution empowers users to manage and monitor various aspects of their application or system effortlessly.",
//     keyPoints: [
//       "React Framework: Leverage the power of React for a dynamic and responsive user interface.",
//       "Material-UI Design: The Admin Dashboard boasts a sleek and modern design language with Material-UI components. This not only enhances the aesthetic appeal but also ensures consistency and usability throughout the application.",
//       "React Pro Sidebar Integration: Benefit from the advanced features offered by React Pro Sidebar. Its customizable and feature-rich sidebar enhances navigation and allows users to access crucial information with ease.",
//       "Data Visualization: Utilize powerful charts and graphs to transform complex data into actionable insights. Our Admin Dashboard includes interactive visualizations that enable users to analyze trends, make informed decisions, and track performance effortlessly.",
//       "User Authentication and Authorization: Implement secure user authentication and authorization mechanisms to control access levels and protect sensitive information. Ensure that only authorized personnel can access specific functionalities within the dashboard.",
//       "Cross-Browser Compatibility: Ensure a consistent experience across various web browsers, making the Admin Dashboard accessible to a wider audience.",
//       "API Integration: Seamlessly integrate with external APIs to fetch and display real-time data. This enables users to have a comprehensive view of their application or system directly within the dashboard.",
//     ],
//     skills: [
//       "React.JS",
//       "JavaScript",
//       "React-Router-Dom",
//       "React Pro Sidebar",
//       "MUI",
//       "Git",
//       "Github",
//     ],
//   },
//   {
//     id: 3,
//     img: Edify,
//     title: "Edify - Training App",
//     url: "https://edify-app.netlify.app/",
//     codeUrl: "https://github.com/Tushyap/edify_app",
//     description:
//       "I have worked on this app with two other teammates from Turkey....Our web application is a cutting-edge platform designed to offer a seamless and enriching learning experience for users seeking a variety of courses. Leveraging the power of ReactJS for the front end, ExpressJS and NodeJS for the backend, and MongoDB for data storage, our platform provides a robust and scalable solution for both course providers and learners.",
//     keyPoints: [
//       "Backend is not hosted yet...",
//       "ReactJS for Dynamic User Interfaces: Utilize the power of ReactJS to create dynamic and interactive user interfaces.",
//       "ExpressJS and NodeJS Backend: Leverage the ExpressJS framework on top of NodeJS for building a scalable and efficient backend.Handle server-side logic, routing, and API integrations to ensure seamless communication between the frontend and backend.",
//       "MongoDB for Data Storage: Implement MongoDB as the database solution for storing and managing course content, user profiles, and other relevant data.",
//       "Authentication with JWT: Ensure that only authorized users can access certain features, enroll in courses, and track their progress.",
//       "Responsive Design with Bootstrap: Optimize the user interface for various devices, including desktops, tablets, and smartphones.",
//       "User & Admin Profiles and Social Features: Create user profiles with personalized dashboards.",
//       "Payment Integration: Integrated payment gateways to facilitate the purchase of premium courses.",
//     ],
//     skills: [
//       "MERN Stack",
//       "React.JS",
//       "JavaScript",
//       "Bootstrap",
//       "MUI",
//       "JWT",
//       "Razorpay",
//       "Restfyl APIs",
//       "API Integration",
//     ],
//   },
//   {
//     id: 4,
//     img: iChanakya,
//     title: "iChanakya",
//     url: "https://ichanakya.netlify.app/",
//     codeUrl: "https://github.com/Tushyap/iChanakya",
//     description:
//       "iChanakya, a static website I designed and developed using HTML and CSS. iChanakya is dedicated to offering expertise in strategic Political Communication, Constituency Profiling and Management, Campaign Management, Digital Media Management, and Content Placement Strategy. The website serves as a hub for individuals and organizations seeking professional services in the realm of political strategy and communication. Through clean and intuitive design, I ensured that visitors can easily navigate and access information about iChanakya's diverse offerings.",
//     keyPoints: [
//       "This project allowed me to not only demonstrate my proficiency in front-end development but also to apply my understanding of strategic communication principles to the digital landscape.",
//       "Strategic Political Communication: Expertise in developing and implementing effective political communication strategies.",
//       "Constituency Profiling and Management: Offering services for comprehensive analysis and management of political constituencies.",
//       "Campaign Management: Providing solutions for planning and executing successful political campaigns.",
//       "Polling & Political Data Analysis: Utilizing data analysis techniques for informed decision-making in the political arena.",
//     ],
//     skills: [
//       "Html5",
//       "CSS3",
//       "Bootstrap",
//       ],
//   },
// ];

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [projectDetails, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kdaez5gm2h.execute-api.us-east-1.amazonaws.com/dev/rds-data-access?x-api-key=uGQKWTElPT70o60nCIQhX7qkLtIjeIPv2AiOGcZh');
        
        if (response.status === 200) {
          const apiResponse = response.data;

          // Convert the body to an array of dictionaries
          const formattedBody = apiResponse.body.map(item => ({
            id: item[0],
            title: item[1],
            codeUrl: item[2],
            description: item[3],
            skills: item[4].split(', ')
            // keyPoints: item[5]
          }));

          setData(formattedBody);
        } else {
          console.error('Error fetching data: ', response.status);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  console.log("acss", projectDetails.length);
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
      <Grid container width="90%" height="100%" marginTop="10px">
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
                  Projects
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.greenAccent[400],
                    fontWeight: "500",
                    marginBottom: "25px",
                  }}
                >
                  "Explore, Engage, Elevate: Unveiling My Digital Odyssey in the
                  Project Gallery."
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} marginTop="10px">
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Lottie
                  animationData={robotAnimation}
                  style={{
                    width: "200px",
                    height: "200px",
                    padding: "8px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {projectDetails.length>0 ? (projectDetails.map(project => (
              <Box key={project.id}>
                <ProjectCard
                  // img={project.img}
                  title={project.title}
                  // url={project.url}
                  codeUrl={project.codeUrl}
                  skills={project.skills}
                  description={project.description}
                  // keyPoints={project.keyPoints}
                />
              </Box>
            ))):(<p> Loading Data...</p>)}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
