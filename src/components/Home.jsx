import React from 'react'
import start from './../assets/start.jpg'
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
   return (
     <>
   <div className="h-[90vh]  flex items-center  mx-auto  container">
    <div className=" md:flex border rounded-lg ">
     <div className="flex-1 ">
       <img src={start} alt="start" className=""/>
     </div>
     <div className="flex-[1/2]   flex flex-col justify-around p-10 md:py-0 md:px-12 ">
      <h1 className=" text-4xl md:text-4xl lg:text-6xl pb-4 md:pb-0">
       Start Building <br />
       Your Resume <br /> Now
      </h1>
             <Button onClick={()=> navigate('/personal')}> Start </Button>
     </div>
    </div>
   </div>
    </>
  );
}

export default Home