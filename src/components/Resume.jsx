import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Resume({ formData }) {
 // const [skills, setSkills] = useState(["javascript"]);
 const { personal, experience, projects, skills, education } = formData;
 return (
  <div className="container mx-auto px-4 py-8 ">
   {personal && (
    <header className="flex flex-col items-center mb-8">
     <h1 className="text-3xl font-bold mb-2">{personal.fullName}</h1>
     <p className="text-lg text-gray-700">{personal.jobTitle}</p>
     <div className="flex items-end gap-2 space-y-1">
      <span className="text-gray-500">
       <div className="flex items-center gap-1">{personal.phone}</div>
      </span>
      <span className="text-gray-400">|</span>
      <a href="mailto:jake@su.edu" className="text-gray-500 hover:underline">
       <div className="flex items-center gap-1">{personal.email}</div>
      </a>
      <span className="text-gray-400">|</span>
      <a
       href="https://www.linkedin.com/in/jake"
       className="text-gray-500 hover:underline"
      >
       <div className="flex items-center gap-1">{personal.linkedIn}</div>
      </a>
      <span className="text-gray-400">|</span>
      <a
       href="https://github.com/jake"
       className="text-gray-500 hover:underline"
      >
       <div className="flex items-center gap-1">{personal.github}</div>
      </a>
     </div>
    </header>
   )}
   <div className="px-12">
    <section className="mb-8">
     <h2 className="text-2xl font-bold text-start">Education</h2>
     <hr className="mt-4 "></hr>
     <div className="space-y-4 px-4">
      {education.map((e) => (
       <div className="my-1">
        <div className="flex justify-between">
         <h3 className="font-bold">{e.formData.university}</h3>
         <p>{e.formData.location}</p>
        </div>
        <div className="flex justify-between">
         <p>{e.formData.degree}</p>
         <p>
          {e.formData.startDate} - {e.formData.endDate}
         </p>
        </div>
       </div>
      ))}
     </div>
    </section>
    {experience && (
     <section className="mb-8">
      <h2 className="text-2xl font-bold text-start">Experience</h2>
      <hr className="mt-4 "></hr>
      <div className="px-4">
       {experience.map((e) => (
        <div key={e} className="mb-4 ">
         <div className="flex justify-between">
          <h3 className="font-bold">{e.formData.positionTitle}</h3>
          <p>
           {e.formData.startDate} - {e.formData.endDate}
          </p>
         </div>
         <p className="text-start">{e.formData.companyName}</p>
         <ul className="list-disc pl-12 text-start ">
          {Object.entries(e.formData.items).map(([key, value]) => (
           <li key={key}>{value}</li>
          ))}
         </ul>
        </div>
       ))}
      </div>
     </section>
    )}
    {projects && (
     <section className="mb-8">
      <h2 className="text-2xl font-bold text-start">Projects</h2>
      <hr className="mt-4 "></hr>
      <div className="px-4 text-start">
       {projects.map((e) => (
        <div key={e} className="mb-4">
         <div className="flex justify-between">
          <h3 className="font-bold">
           {e.formData.projectName}
           <span className="font-normal">| {e.formData.techStack}</span>
          </h3>
         </div>
         <ul className="list-disc pl-12 text-start ">
          {Object.entries(e.formData.items).map(([key, value]) => (
           <li key={key}>{value}</li>
          ))}
         </ul>
        </div>
       ))}
      </div>
     </section>
    )}
    <section className="mb-8">
     <h2 className="text-2xl font-bold text-start">Skills</h2>
     <hr className="mt-4 "></hr>
     <div className="flex flex-wrap px-4 mt-3">
      <h1 className="font-bold"> Languages: </h1>
      <span className="w-2" />{" "}
      {skills.languages && <p>{skills.languages.join(" ,")}</p>}
     </div>
     <div className="flex flex-wrap px-4 mt-3">
      <h1 className="font-bold"> Frameworks: </h1>
      <span className="w-2" />{" "}
      {skills.frameworks && <p>{skills.frameworks.join(" ,")}</p>}
     </div>
     <div className="flex flex-wrap px-4 mt-3">
      <h1 className="font-bold"> Developer Tools: </h1>
      <span className="w-2" />{" "}
      {skills.devtools && <p>{skills.devtools.join(" ,")}</p>}
     </div>
     <div className="flex flex-wrap px-4 mt-3">
      <h1 className="font-bold"> Libraries: </h1> <span className="w-2" />{" "}
      {skills.libs && <p>{skills.libs.join(" ,")}</p>}
     </div>
    </section>
   </div>
  </div>
 );
}

export default Resume;
