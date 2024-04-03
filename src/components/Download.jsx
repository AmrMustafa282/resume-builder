import React from "react";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import Resume from "./Resume";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Download = ({ formData }) => {
 const targetRef = useRef();
  const navigate = useNavigate();
 return (
  <div className="container">
   <div className="flex justify-between ">
    <Button
     variant ='outline'
         onClick={() => {
           localStorage.removeItem('resume')
            navigate('/')
         }}
    >
      Start Over
    </Button>
    <Button
     className=" "
     onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
    >
     Download PDF
    </Button>
   </div>
   <div ref={targetRef} className="py-4 border my-8">
    <Resume formData={formData} />
   </div>
  </div>
 );
};

export default Download;
