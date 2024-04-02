import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

const Experience = ({ handelExperiencelData }) => {
 const navigate = useNavigate();
 const [formData, setformData] = useState({});
 const [items, setItems] = useState([]);

 const handelItems = (items) => {
  setformData({ ...formData, items: items });
 };
 console.log(items)
 return (
  <>
   <div className="h-[90vh]  flex flex-col justify-center gap-12  mx-auto  container">
    <h1 className="text-center text-4xl font-bold">Profiessional Experience</h1>
    <div className="grid grid-cols-2 gap-8 w-full">
     <Input
      onChange={(e) =>
       setformData({ ...formData, positionTitle: e.target.value })
      }
      placeholder="Position Title"
      type="text"
      className="col-span-1 "
     />
     <Input
      onChange={(e) =>
       setformData({ ...formData, companyName: e.target.value })
      }
      placeholder="Company Name"
      type="text"
      className="col-span-1 "
     />
     <Input
      onChange={(e) => setformData({ ...formData, startDate: e.target.value })}
      placeholder="Start Date"
      type="date"
      className="col-span-1 "
     />
     <Input
      onChange={(e) => setformData({ ...formData, endDate: e.target.value })}
      placeholder="End Date"
      type="date"
      className="col-span-1 "
     />
     <Input
      onChange={(e) => setItems(...items, e.target.value)}
      placeholder="work summary item"
      type="text"
      className="col-span-2 "
     />
     <Input
      onChange={(e) => setItems(...items, e.target.value)}
      placeholder="work summary item"
      type="text"
      className="col-span-2 "
     />
     <Input
      onChange={(e) => setItems(...items, e.target.value)}
      placeholder="work summary item"
      type="text"
      className="col-span-2 "
     />
    </div>
    <Button
     onClick={() => {
      handelItems(items);
      handelExperiencelData(formData);
      navigate("/experience");
     }}
    >
     Next
    </Button>
   </div>
  </>
 );
};

export default Experience;
