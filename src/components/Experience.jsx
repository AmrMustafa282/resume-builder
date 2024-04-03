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

const Experience = ({ handelExperiencesData, data }) => {
 const navigate = useNavigate();
 const [formData, setformData] = useState({});
 const [items, setItems] = useState({});

 const title = useRef(null);
 const name = useRef(null);
 const start = useRef(null);
 const end = useRef(null);
 const iOne = useRef(null);
 const iTwo = useRef(null);
 const iThree = useRef(null);
 const iFour = useRef(null);

 const handelSubmit = () => {
  formData.items = items;
   handelExperiencesData({ ...data.experience, formData });
   toast.success("Experience added .");
 };

 const clear = () => {
  title.current.value = "";
  name.current.value = "";
  start.current.value = "";
  end.current.value = "";
  iOne.current.value = "";
  iTwo.current.value = "";
  iThree.current.value = "";
  iFour.current.value = "";
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
       <BreadcrumbPage>Experience</BreadcrumbPage>
      </BreadcrumbItem>
     </BreadcrumbList>
    </Breadcrumb>
   </div>
   <div className="h-[90vh]  flex flex-col justify-center gap-12  mx-auto  container">
    <h1 className="text-center text-4xl font-bold">Profiessional Experience</h1>
    <div className="grid grid-cols-2 gap-8 w-full mb-6">
     <Input
      onChange={(e) =>
       setformData({ ...formData, positionTitle: e.target.value })
      }
      placeholder="Position Title"
      type="text"
      className="col-span-1 "
      ref={title}
     />
     <Input
      onChange={(e) =>
       setformData({ ...formData, companyName: e.target.value })
      }
      placeholder="Company Name"
      type="text"
      className="col-span-1 "
      ref={name}
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
      onChange={(e) => setItems({ ...items, one: e.target.value })}
      placeholder="work summary item"
      type="text"
      className="col-span-2 "
      ref={iOne}
     />
     <Input
      onChange={(e) => setItems({ ...items, two: e.target.value })}
      placeholder="work summary item"
      type="text"
      className="col-span-2 "
      ref={iTwo}
     />
     <Input
      onChange={(e) => setItems({ ...items, three: e.target.value })}
      placeholder="work summary item"
      type="text"
      className="col-span-2 "
      ref={iThree}
     />
     <Input
      onChange={(e) => setItems({ ...items, four: e.target.value })}
      placeholder="work summary item"
      type="text"
      className="col-span-2 "
      ref={iFour}
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
     <Button onClick={() => navigate("/projects")}>Next</Button>
    </div>
   </div>
  </>
 );
};

export default Experience;
