import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SidebarComponent from './Components/SidebarComponent';
import Container from '@mui/material/Container';
import Home from './Components/Home';
import About from './Components/About';
import { SidebarContext} from './Context/sidebarContext';
import { useState } from 'react';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import SkillsComponent from './Components/SkillsComponent';

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };
  const passValue ={
    toggled, 
    handleToggle
  }
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SidebarContext.Provider value={passValue}>
        <CssBaseline />
        <Container maxWidth="xl">
          <div className="app">
              <Routes>
                <Route path="/" element={<SidebarComponent />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About/>} />
                  <Route path="experience" element={<Experience/>} />
                  <Route path="education" element={<Education/>} />
                  <Route path="skills" element={<Skills/>} />
                  <Route path="projects" element={<Projects/>} />
                  <Route path="certificates" element={<Certificates/>} />
                  <Route path="testimonials" element={<Testimonials/>} />
                  <Route path="contacts" element={<Contact/>} />
                  <Route path="skillsComp" element={<SkillsComponent/>} />
                </Route>
              </Routes>
              <Footer/>
          </div>
        </Container>
        </SidebarContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
