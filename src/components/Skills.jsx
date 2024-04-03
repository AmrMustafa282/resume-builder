import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Skills = ({ handelSkills ,data}) => {
 const navigate = useNavigate();
 const [formData, setformData] = useState({});
 const [languages, setLanguages] = useState(
  data.skills.languages ? data.skills.languages : []
 );
 const [frameworks, setFrameworks] = useState(data.skills.frameworks?data.skills.frameworks:[]);
 const [devtools, setDevtools] = useState(data.skills.devtools?data.skills.devtools:[]);
  const [libs, setLibs] = useState(data.skills.libs ?data.skills.libs:[]);

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
   toast.success("Skills saved.");

  //  setTimeout(() => {     
  //    navigate("/resume");
  //  },[2000])
 };

 return (
  <>
   <div className="container">
    <Breadcrumb>
     <BreadcrumbList>
      <BreadcrumbItem>
       <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
       <BreadcrumbLink href="/personal">Personal</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
       <BreadcrumbLink href="/education">Education</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
       <BreadcrumbLink href="/experience">Experience</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
       <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
       <BreadcrumbPage>Skills</BreadcrumbPage>
      </BreadcrumbItem>
     </BreadcrumbList>
    </Breadcrumb>
   </div>
   <div className="h-[90vh]  flex flex-col justify-center space-y-8  mx-auto mb-8 container">
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
       <span
        key={e}
        className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black"
       >
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
       <span
        key={e}
        className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black"
       >
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
       <span
        key={e}
        className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black"
       >
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
       <span
        key={e}
        className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded text-black"
       >
        {e}
       </span>
      ))}
    </div>
    <hr />
    <div className="flex justify-between gap-10">
     <Button
      className="w-full"
      variant="outline"
      onClick={() => {
       handelSkillsData();
      }}
     >
      Save
     </Button>
     <Button
      className="w-full"
      onClick={() => {
       navigate("/resume");
      }}
     >
      Finish
     </Button>
    </div>
   </div>
  </>
 );
};

export default Skills;
