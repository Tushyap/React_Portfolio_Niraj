import { useState, useContext } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { ColorModeContext, tokens } from "../theme";
import { MenuItem } from "react-pro-sidebar";
import image from "../assets/Niraj Kumar Lathar.jpeg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
// import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { SidebarContext } from "../Context/sidebarContext";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggled, handleToggle } = useContext(SidebarContext);
  // eslint-disable-next-line 
  const [broken, setBroken] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box display="flex" sx={{ mt: 2, mb: 1 }}>
      <Sidebar
        onBackdropClick={handleToggle}
        toggled={toggled}
        customBreakPoint="900px"
        onBreakPoint={setBroken}
        collapsed={isCollapsed}
        backgroundColor={colors.toggle[200]}
        style={{
          border: `1px solid ${colors.toggle[200]}`,
          backgroundColor: colors.toggle[200],
          boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
        }}
      >
        <IconButton
          onClick={colorMode.toggleColorMode}
          size="large"
          color={colors.grey[100]}
          sx={{
            mt: 1,
            mb: 1,
            ":hover": {
              color: colors.blueAccent[500],
            },
          }}
          style={{
            margin: "5px 0 0 16px",
            borderRadius: "40%",
            background: colors.grey[700],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <Menu iconShape="square" backgroundColor={colors.toggle[200]}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={
              isCollapsed ? (
                <IconButton
                  size="small"
                  edge="end"
                  color={colors.grey[100]}
                  sx={{
                    mt: 1,
                    mb: 1,
                    ":hover": {
                      color: colors.blueAccent[500],
                    },
                  }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  style={{
                    borderRadius: "50%",
                    background: colors.grey[700],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <KeyboardArrowRightOutlinedIcon />
                </IconButton>
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              backgroundColor: colors.toggle[200],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                backgroundColor={colors.toggle[200]}
              >
                <Typography variant="h3" color={colors.grey[100]}></Typography>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  size="large"
                  edge="end"
                  color={colors.grey[100]}
                  sx={{
                    mr: 2,
                    mt: 1,
                    mb: 1,
                    ":hover": {
                      color: colors.blueAccent[500],
                    },
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.grey[700],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  {isCollapsed ? undefined : <KeyboardArrowLeftOutlinedIcon />}
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px" backgroundColor={colors.toggle[200]}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop="20px"
                height="150px"
              >
                <Box
                  height="130px"
                  width="130px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <img
                    alt="profile-user"
                    width="110px"
                    height="110px"
                    src={image}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
              </Box>
              <Box textAlign="center" backgroundColor={colors.toggle[200]}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Niraj
                </Typography>
                <Typography
                  marginTop="5px"
                  variant="h5"
                  color={colors.greenAccent[500]}
                >
                  Software Developer
                </Typography>
              </Box>
            </Box>
          )}
          <Box backgroundColor={colors.toggle[200]}>
            <MenuItem
              icon={<HomeOutlinedIcon />}
              component={<Link to="/" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Home</Typography>
            </MenuItem>
            <MenuItem
              icon={<ImportContactsOutlinedIcon />}
              component={<Link to="about" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">About</Typography>
            </MenuItem>
            <MenuItem
              icon={<WorkHistoryOutlinedIcon />}
              component={<Link to="experience" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Experience</Typography>
            </MenuItem>
            <MenuItem
              icon={<EngineeringOutlinedIcon />}
              component={<Link to="skills" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Skills</Typography>
            </MenuItem>
            <MenuItem
              icon={<SchoolOutlinedIcon />}
              component={<Link to="education" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Education</Typography>
            </MenuItem>

            <MenuItem
              icon={<FolderSpecialIcon />}
              component={<Link to="projects" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Projects</Typography>
            </MenuItem>
            {/* <MenuItem
              icon={<WorkspacePremiumOutlinedIcon />}
              component={<Link to="certificates" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Certificates</Typography>
            </MenuItem> */}
            {/* <MenuItem
              icon={<RateReviewOutlinedIcon/>}
              component={<Link to="testimonials" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Testimonials</Typography>
            </MenuItem> */}
            <MenuItem
              icon={<ContactPageOutlinedIcon />}
              component={<Link to="contacts" />}
              rootStyles={{
                color: colors.grey[100],
                "& .ps-menu-button:hover": {
                  color: colors.blueAccent[500],
                  backgroundColor: `${colors.toggle[200]} !important`,
                },
              }}
            >
              <Typography variant="h4">Contact</Typography>
            </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
      <Outlet />
    </Box>
  );
};

export default SidebarComponent;
