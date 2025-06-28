import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import bgimg from "../assets/bg/bg.jpg";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Education from "../components/Education";
import MyProject from "../components/MyProject";


const HomeLayout = () => {
  return (
    <div>
      <div
       style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}>
      <Navbar></Navbar>
      <Hero></Hero>
      </div>  
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <MyProject></MyProject>
      
    </div>
  );
};

export default HomeLayout;
