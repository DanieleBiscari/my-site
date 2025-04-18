import React, { useEffect, useState } from "react";


import AboutChiSono from "../components/AboutChiSono";
import AboutPassioni from "../components/AboutPassioni";
import AboutObiettivi from "../components/AboutObiettivi";
import AboutFooter from "../components/AboutFooter";
import Spinner from "../components/Spinner"

const About = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false)
    }, 1200)
  },[])

  return (
    <main className="flex justify-center items-center relative">
      <div className="bg-slate-50 backdrop-blur-md bg-opacity-50 w-[80%] p-10 flex justify-center flex-col gap-28 my-10 rounded-[3rem]">
        {loading && <Spinner></Spinner>}
        <AboutChiSono></AboutChiSono>
        <AboutPassioni></AboutPassioni>  
        <AboutObiettivi></AboutObiettivi>
        <AboutFooter></AboutFooter>
      </div>
    </main>
  );
};

export default About;
