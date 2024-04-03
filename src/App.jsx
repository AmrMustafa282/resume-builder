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
import Download from "./components/Download";
import Educations from "./components/Education";

function App() {
 const [formData, setFormData] = useState(() => {
  if (localStorage.getItem("resume"))
   return JSON.parse(localStorage.getItem("resume"));
  return {
   personal: {},
   projects: [],
   experience: [],
   education: [],
   skills: {},
  };
 });

 const handelPersonalData = (personalData) => {
  setFormData({ ...formData, personal: personalData });
 };
 const handelSkills = (skills) => {
  setFormData({ ...formData, skills: skills });
 };
 const handelEducationData = (education) => {
  setFormData({
   ...formData,
   education: [...formData.education, education],
  });
 };

 const handelProjectsData = (projectsData) => {
  setFormData({ ...formData, projects: [...formData.projects, projectsData] });
 };
 const handelExperiencesData = (experienceData) => {
  setFormData({
   ...formData,
   experience: [...formData.experience, experienceData],
  });
 };

 useEffect(() => {
  localStorage.setItem("resume", JSON.stringify(formData));
 }, [formData]);

 console.log(formData);

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
     element={
      <Experience
       handelExperiencesData={handelExperiencesData}
       data={formData}
      />
     }
    />
    <Route
     path="/education"
     element={
      <Educations
       handelEducationData={handelEducationData}
       data={formData}
      />
     }
    />
    <Route
     path="/projects"
     element={
      <Projects handelProjectsData={handelProjectsData} data={formData} />
     }
    />
    <Route path="/resume" element={<Download formData={formData} />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
