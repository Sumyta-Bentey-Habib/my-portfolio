import React from "react";

const AboutMe = () => {
  return (
    <section className="py-20 px-4 flex justify-center">
      <div className=" bg-secondary/10 backdrop-blur-md rounded-3xl shadow-md p-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
        <p className="text-lg mb-6 text-gray-800">
          Hi! I’m <span className="font-semibold">Sumyta Bentey Habib</span>, an aspiring{" "}
          <span className="font-semibold">MERN Stack Developer</span>.  
          I’ve been on my coding journey for over <span className="font-semibold">6 months</span>, 
          constantly learning and experimenting with modern web technologies.
        </p>
        <p className="text-lg mb-6 text-gray-800">
          I’m a naturally <span className="font-semibold">adaptive</span> and curious learner who loves picking up new skills fast.
          Besides coding, I enjoy <span className="font-semibold">crafting</span> — it keeps my creativity flowing and helps me see problems from unique angles.
        </p>
        <p className="text-lg mb-8 text-gray-800">
          Right now, I’m focused on building solid projects with React, Node.js, and MongoDB, 
          and expanding my skills every day. I’m excited to grow, collaborate, and craft amazing things on the web!
        </p>
        
      </div>
    </section>
  );
};

export default AboutMe;
