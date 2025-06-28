import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import bgimg from "../assets/bg/bg.jpg";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Education from "../components/Education";
import MyProject from "../components/MyProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />

      {/* Sections with opaque backgrounds to hide bg image */}
      <div style={{ backgroundColor: "#fff" }}>
        <AboutMe />
        <Skills />
        <Education />
        <MyProject />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default HomeLayout;
