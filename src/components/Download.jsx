import React from "react";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import Resume from "./Resume";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
 AlertDialog,
 AlertDialogAction,
 AlertDialogCancel,
 AlertDialogContent,
 AlertDialogDescription,
 AlertDialogFooter,
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Download = ({ formData }) => {
 const targetRef = useRef();
 const navigate = useNavigate();
 return (
  <div className="container">
   <div className="mb-4">
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
       <BreadcrumbLink href="/skills">Skills</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
       <BreadcrumbPage>Resume</BreadcrumbPage>
      </BreadcrumbItem>
     </BreadcrumbList>
    </Breadcrumb>
   </div>
   <div className="flex justify-between ">
    <Button
     variant="outline"
     onClick={() => {
      localStorage.removeItem("resume");
      navigate("/");
     }}
    >
     Start Over
    </Button>
    {/* <Button
     className=" "
     onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
    >
     Download PDF
    </Button> */}
    <AlertDialog>
     <AlertDialogTrigger>
      <Button>Download PDF</Button>
     </AlertDialogTrigger>
     <AlertDialogContent>
      <AlertDialogHeader>
       <AlertDialogTitle>Before download!</AlertDialogTitle>
       <AlertDialogDescription>
        Make sure you are on light mood, download with dark mood will give bad result .
       </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
       <AlertDialogCancel>Cancel</AlertDialogCancel>
       <AlertDialogAction
        onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
       >
        Continue
       </AlertDialogAction>
      </AlertDialogFooter>
     </AlertDialogContent>
    </AlertDialog>
   </div>
   <div ref={targetRef} className="py-4 border my-8">
    <Resume formData={formData} />
   </div>
  </div>
 );
};

export default Download;
