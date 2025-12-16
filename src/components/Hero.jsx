import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/myimg/myimg.png";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:items-center gap-10">

        {/* Image */}
        <img
          src={img}
          alt="Sumyta Bentey Habib"
          className="w-40 sm:w-60 md:w-80 lg:max-w-sm rounded-2xl shadow-2xl"
        />

        {/* Text */}
        <div className="text-center lg:text-left px-4 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hi, I’m <span className="text-purple-600">Sumyta</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            <Typewriter
              words={[
                "I build scalable web applications",
                "I focus on clean UI & real-time features",
                "I turn ideas into production-ready products",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Frontend-focused developer experienced with React, Next.js, and
            full-stack systems. I care about clean architecture, performance,
            and building user-friendly products that actually solve problems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href="#projects"
              className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
            >
              View Projects
            </a>

            <a
              href="mailto:sumytabenteyhabib@gmail.com"
              className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full px-6"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-3 mt-6">
            <a
              href="https://github.com/Sumyta-Bentey-Habib"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/sumytabenteyhabib/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:sumytabenteyhabib@gmail.com"
              className="btn btn-circle btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
