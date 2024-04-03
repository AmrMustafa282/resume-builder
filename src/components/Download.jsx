import React from 'react'
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import Resume from './Resume';
import { Button } from './ui/button';


const Download = ({formData}) => {
  const targetRef = useRef();

  return (
   <div className="container">
    <Button
     className=" block ml-auto"
     onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
    >
     Download PDF
    </Button>
    <div ref={targetRef} className="py-4 border mt-8">
        <Resume formData={formData} />
    </div>
   </div>
  );
}

export default Download