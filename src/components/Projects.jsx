import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

const Experience = ({ handelProjectsData ,data }) => {
 const navigate = useNavigate();
 const [formData, setformData] = useState({});
 const [items, setItems] = useState({});

 const tech = useRef(null);
 const name = useRef(null);
 const iOne = useRef(null);
 const iTwo = useRef(null);
 const iThree = useRef(null);
 const iFour = useRef(null);

  const handelSubmit = () => {
    formData.items = items;
    handelProjectsData({...data.projects, formData});
 };

 const clear = () => {
  tech.current.value = "";
  name.current.value = "";
  iOne.current.value = "";
  iTwo.current.value = "";
  iThree.current.value = "";
  iFour.current.value = "";
 };
 return (
  <>
   <div className="h-[90vh]  flex flex-col justify-center gap-12  mx-auto  container">
    <h1 className="text-center text-4xl font-bold">Profiessional Experience</h1>
    <div className="grid grid-cols-2 gap-8 w-full mb-6">
     <Input
      onChange={(e) =>
       setformData({ ...formData, projectName: e.target.value })
      }
      placeholder="Project Name"
      type="text"
      className="col-span-1 "
      ref={name}
     />
     <Input
      onChange={(e) =>
       setformData({ ...formData, techStack: e.target.value })
      }
      placeholder="Tech Stack (Python, Flask, React, PostgreSQL, Docker)"
      type="text"
      className="col-span-1 "
      ref={tech}
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
     <Button onClick={() => navigate("/skills")}>Next</Button>
    </div>
   </div>
  </>
 );
};

export default Experience;
