import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Resume({ formData }) {
 // const [skills, setSkills] = useState(["javascript"]);
 const { personal, experience, projects, skills } = formData;
 return (
  <div className="container mx-auto px-4 py-8">
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
     <span className="w-full h-[2px] bg-gray-500 block my-1"></span>
     <div className="space-y-2 px-4">
      <div className="my-1">
       <div className="flex justify-between">
        <h3 className="font-bold">Southwestern University</h3>
        <p>Georgetown, TX</p>
       </div>
       <div className="flex justify-between">
        <p>Bachelor of Arts in Computer Science, Minor in Business</p>
        <p>Aug. 2018 - May 2021</p>
       </div>
      </div>
      <div>
       <div className="flex justify-between">
        <h3 className="font-bold">Blinn College</h3>
        <p>Bryan, TX</p>
       </div>
       <div className="flex justify-between">
        <p>Associate's in Liberal Arts</p>
        <p>Aug. 2014 - May 2018</p>
       </div>
      </div>
     </div>
    </section>
    {experience && (
     <section className="mb-8">
      <h2 className="text-2xl font-bold text-start">Experience</h2>
      <span className="w-full h-[2px] bg-gray-500 block my-1"></span>
      <div className="px-4">
       {experience.map((e) => (
        <div className="mb-4 ">
         <div className="flex justify-between">
          <h3 className="font-bold">{e.positionTitle}</h3>
          <p>
           {e.startDate} - {e.endDate}
          </p>
         </div>
         <p className="text-start">{e.companyName}</p>
         <ul className="list-disc pl-12 text-start ">
          {Object.entries(e.items).map(([key, value]) => (
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
      <span className="w-full h-[2px] bg-gray-500 block my-1"></span>
      <div className="px-4 text-start">
       {projects.map((e) => (
        <div className="mb-4">
         <div className="flex justify-between">
          <h3 className="font-bold">
           {e.projectName}
           <span className="font-normal">
            | Python, Flask, React, PostgreSQL, Docker
           </span>
          </h3>
          <p>June 2020 -Present</p>
         </div>
         <ul className="list-disc pl-12">
          <li>Implemented user authentication and authorization</li>
          <li>
           Utilized data visualization libraries to create interactive charts
           and graphs
          </li>
         </ul>
        </div>
       ))}
      </div>
     </section>
    )}
    <section className="mb-8">
     <h2 className="text-2xl font-bold text-start">Skills</h2>
     <span className="w-full h-[2px] bg-gray-500 block my-1"></span>
     <div className="flex flex-wrap px-4 mt-3">
      {/* {skills &&
       skills.map((skill) => (
        <span className="px-2 py-1 mr-2 mb-2 bg-gray-200 rounded">{skill}</span>
       ))} */}
     </div>
    </section>
   </div>
  </div>
 );
}

export default Resume;
