import React, { useState } from "react";
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

const Personal = ({ handelPersonalData, data }) => {
 const navigate = useNavigate();
 const [formData, setformData] = useState({});

 // console.log(formData?true: false)

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
       <BreadcrumbPage>Personal</BreadcrumbPage>
      </BreadcrumbItem>
     </BreadcrumbList>
    </Breadcrumb>
   </div>
   <div className="h-[90vh]  flex flex-col justify-center gap-12  mx-auto  container">
    <h1 className="text-center text-4xl font-bold">Personal Details</h1>
    <div className="grid grid-cols-2 gap-8 w-full">
     <Input
      onChange={(e) => setformData({ ...formData, fullName: e.target.value })}
      placeholder="Full Name"
      type="text"
      className="col-span-1 "
      defaultValue={data.personal.fullName}
     />
     <Input
      onChange={(e) => setformData({ ...formData, jobTitle: e.target.value })}
      placeholder="Job Title"
      type="text"
      className="col-span-1 "
      defaultValue={data.personal.jobTitle}
     />
     <Input
      onChange={(e) => setformData({ ...formData, phone: e.target.value })}
      placeholder="123-456-7890"
      type="number"
      className="col-span-1 "
      defaultValue={data.personal.phone}
     />
     <Input
      onChange={(e) => setformData({ ...formData, email: e.target.value })}
      placeholder="Email (jake@su.edu)"
      type="email"
      className="col-span-1 "
      defaultValue={data.personal.email}
     />
     <Input
      onChange={(e) => setformData({ ...formData, linkedIn: e.target.value })}
      placeholder="Linked-in (linkedin.com/in/jake)"
      type="text"
      className="col-span-1 "
      defaultValue={data.personal.linkedIn}
     />
     <Input
      onChange={(e) => setformData({ ...formData, github: e.target.value })}
      placeholder="Github (github.com/jake)"
      type="text"
      className="col-span-1 "
      defaultValue={data.personal.github}
     />
    </div>
    <div className="flex justify-between gap-10">
     <Button
      className="w-full"
      variant="outline"
      onClick={() => {
       handelPersonalData(formData);
       toast.success("Personal data saved.");
      }}
     >
      Save
     </Button>
     <Button
      className="w-full"
      onClick={() => {
       navigate("/education");
      }}
     >
      Next
     </Button>
    </div>
   </div>
  </>
 );
};

export default Personal;
