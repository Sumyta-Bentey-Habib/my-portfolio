import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import bgimg from "../assets/bg/bg.png";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
// import Education from "../components/Education";
import MyProject from "../components/MyProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CollapsibleSidebar from "../components/CollapsibleSidebar";
// import Experience from "../components/Experience";
import Timeline from "../components/Timeline";

const HomeLayout = () => {
  return (
    <>
   
        <CollapsibleSidebar>
        <Navbar></Navbar>
        <section
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Hero />
        </section>

        <div style={{ backgroundColor: "#fff" }}>
          <section id="about">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          {/* <section id="education">
            <Education />
          </section> */}
          {/* <section id="experience">
            <Experience />
          </section> */}
          <section id="my-journey">
            <Timeline></Timeline>
          </section>
          <section id="projects">
            <MyProject />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </CollapsibleSidebar>
      
      
    </>
  );
};

export default HomeLayout;
