import React, { useState } from "react";
import start from "./assets/start.jpg";
import { ModeToggle } from "./components/ToggleTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Personal from "./components/Personal";
import Experience from "./components/Experience";

function App() {
 const [formData, setFormData] = useState({});

 const handelPersonalData = (personalData) => {
  setFormData({ ...formData, personal: personalData });
 };
 const handelExperiencelData = (experienceData) => {
  setFormData({ ...formData, experience: experienceData });
 };

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
    <Route
     path="/experience"
     element={<Experience handelExperiencelData={handelExperiencelData} />}
    />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
