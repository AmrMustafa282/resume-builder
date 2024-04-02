import React from 'react'
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import Resume from "./components/Resume";

const Download = () => {
  const targetRef = useRef();

  return (
   <div>
    <button onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}>
     Download PDF
    </button>
    <div ref={targetRef} className="bg-gray-100 py-4">
     <Resume />
    </div>
   </div>
  );
}

export default Download