import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import bgimg from "../assets/bg/bg.jpg";

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
    </div>
  );
};

export default HomeLayout;
