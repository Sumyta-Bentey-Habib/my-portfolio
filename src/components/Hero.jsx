import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/myimg/myimg.png";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:items-center">
        <img
          src={img}
          alt="Profile"
          className="w-40 sm:w-60 md:w-80 lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Sumyta Bentey Habib
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold my-2">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "React & Node.js Enthusiast",
                "CSE Undergraduate Student",
                "Tech Learner & Explorer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </h3>
          <p className="py-4 max-w-xl mx-auto lg:mx-0">
            Hello! I'm Sumyta, a dedicated full stack developer and a computer
            science undergraduate. I’m passionate about building scalable web
            applications, constantly learning new technologies, and turning
            ideas into reality.
          </p>
          <div className="flex justify-center lg:justify-start gap-2">
            <a
              href="https://github.com/Sumyta-Bentey-Habib"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:sumytabenteyhabib@gmail.com"
              className="btn btn-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumytabenteyhabib2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
