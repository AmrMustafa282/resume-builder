import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

const Skills = ({ handelSkills }) => {
 const navigate = useNavigate();
 const [formData, setformData] = useState({});
 const [languages, setLanguages] = useState([]);
 const [frameworks, setFrameworks] = useState([]);
 const [devtools, setDevtools] = useState([]);
 const [libs, setLibs] = useState([]);

 const lang = useRef(null);
 const fram = useRef(null);
 const devtool = useRef(null);
 const lib = useRef(null);

 const handelSkillsData = () => {
  formData.languages = languages;
  formData.frameworks = frameworks;
  formData.devtools = devtools;
  formData.libs = libs;
   handelSkills(formData);
   setTimeout(() => {     
     navigate("/resume");
   },[2000])
 };

 return (
  <>
   <div className="h-[90vh]  flex flex-col justify-center space-y-8  mx-auto  container">
    <h1 className="text-center text-4xl font-bold">TECHNICAL SKILLS</h1>
    <div className="grid grid-cols-3 gap-8 w-full">
     <Input
      placeholder="Languages: Java, Python, Rust"
      type="text"
      className="col-span-2 "
      ref={lang}
     />
     <Button
      variant="outline"
      onClick={() => {
       setLanguages((prev) => [...prev, lang.current.value]);
       lang.current.select();
      }}
     >
      Add
     </Button>
    </div>
    <div className="flex flex-wrap px-4 ">
     {languages &&
      languages.map((e) => (
       <span key={e} className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black">
        {e}
       </span>
      ))}
    </div>
    <hr />
    <div className="grid grid-cols-3 gap-8 w-full">
     <Input
      placeholder="Frameworks: Next, Express, Flutter"
      type="text"
      className="col-span-2 "
      ref={fram}
     />
     <Button
      variant="outline"
      onClick={() => {
       setFrameworks((prev) => [...prev, fram.current.value]);
       fram.current.select();
      }}
     >
      Add
     </Button>
    </div>
    <div className="flex flex-wrap px-4 ">
     {frameworks &&
      frameworks.map((e) => (
       <span key={e} className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black">
        {e}
       </span>
      ))}
    </div>
    <hr />
    <div className="grid grid-cols-3 gap-8 w-full">
     <Input
      placeholder="DevTools: Git, Docker, AWS"
      type="text"
      className="col-span-2 "
      ref={devtool}
     />
     <Button
      variant="outline"
      onClick={() => {
       setDevtools((prev) => [...prev, devtool.current.value]);
       devtool.current.select();
      }}
     >
      Add
     </Button>
    </div>
    <div className="flex flex-wrap px-4 ">
     {devtools &&
      devtools.map((e) => (
       <span key={e} className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black">
        {e}
       </span>
      ))}
    </div>
    <hr />
    <div className="grid grid-cols-3 gap-8 w-full">
     <Input
      placeholder="Libraries: Shadcn/ui, Pandas, NumPy "
      type="text"
      className="col-span-2 "
      ref={lib}
     />
     <Button
      variant="outline"
      onClick={() => {
       setLibs((prev) => [...prev, lib.current.value]);
       lib.current.select();
      }}
     >
      Add
     </Button>
    </div>
    <div className="flex flex-wrap px-4 ">
     {libs &&
      libs.map((e) => (
       <span key={e} className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black">
        {e}
       </span>
      ))}
    </div>
    <hr />
    <Button
     className="mt-12"
     onClick={() => {
      handelSkillsData();
      
     }}
    >
     Finish
    </Button>
   </div>
  </>
 );
};

export default Skills;
