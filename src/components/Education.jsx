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
const Educations = ({ handelEducationData, data }) => {
 const navigate = useNavigate();
 const [formData, setformData] = useState({});

 const university = useRef(null);
 const location = useRef(null);
 const start = useRef(null);
 const end = useRef(null);
 const degree = useRef(null);


 const handelSubmit = () => {
   handelEducationData({ ...data.education, formData });
   toast.success("Education added .");
 };

 const clear = () => {
  university.current.value = "";
  location.current.value = "";
  start.current.value = "";
  end.current.value = "";
  degree.current.value = "";

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
       <BreadcrumbPage>Education</BreadcrumbPage>
      </BreadcrumbItem>
     </BreadcrumbList>
    </Breadcrumb>
   </div>
   <div className="h-[90vh]  flex flex-col justify-center gap-12  mx-auto  container">
    <h1 className="text-center text-4xl font-bold">Education</h1>
    <div className="grid grid-cols-2 gap-8 w-full mb-6">
     <Input
      onChange={(e) => setformData({ ...formData, university: e.target.value })}
      placeholder="University"
      type="text"
      className="col-span-1 "
      ref={university}
     />
     <Input
      onChange={(e) => setformData({ ...formData, location: e.target.value })}
      placeholder="Location"
      type="text"
      className="col-span-1 "
      ref={location}
     />
     <Input
      onChange={(e) => setformData({ ...formData, startDate: e.target.value })}
      placeholder="Start Date"
      type="text"
      className="col-span-1 "
      ref={start}
     />
     <Input
      onChange={(e) => setformData({ ...formData, endDate: e.target.value })}
      placeholder="End Date"
      type="text"
      className="col-span-1 "
      ref={end}
     />
     <Input
      onChange={(e) => setformData({ ...formData, degree: e.target.value })}
      placeholder="Degree"
      type="text"
      className="col-span-2 "
      ref={degree}
     />
    </div>

    <div className="grid grid-cols-2 gap-32">
     <Button
      onClick={() => {
       handelSubmit();
       clear();
      }}
      variant="outline"
     >
      Add
     </Button>
     <Button onClick={() => navigate("/experience")}>Next</Button>
    </div>
   </div>
  </>
 );
};

export default Educations;
