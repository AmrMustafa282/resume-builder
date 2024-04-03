import React, { useEffect, useState } from "react";
import start from "./assets/start.jpg";
import { ModeToggle } from "./components/ToggleTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [formData, setFormData] = useState({});
  const [experienceArray, setExperienceArray] = useState([])
  const [projectsArray, setProjectsArray] = useState([]);
  

 const handelPersonalData = (personalData) => {
  setFormData({ ...formData, personal: personalData });
};
const handelSkills = (skills) => {
    setFormData({ ...formData, skills: skills });
  }
  
useEffect(() => {
  setFormData({ ...formData, experience: experienceArray });
}, [experienceArray])
  
useEffect(() => {
  setFormData({ ...formData, projects: projectsArray });
},[projectsArray])
console.log(formData)
 return (
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route
     path="/personal"
     element={<Personal handelPersonalData={handelPersonalData} />}
    />
    <Route path="/skills" element={<Skills handelSkills={handelSkills} />} />
    <Route
     path="/experience"
     element={<Experience setExperienceArray={setExperienceArray} />}
    />
    <Route
     path="/projects"
     element={<Projects setProjectsArray={setProjectsArray} />}
    />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
