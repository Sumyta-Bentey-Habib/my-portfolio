import React from "react";

const AboutMe = () => {
  return (
    <section className="py-24 px-6 flex justify-center">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg rounded-3xl shadow-xl p-12 max-w-3xl text-center">
        <h2 className="text-5xl font-bold mb-6 text-primary">So, Who am I?</h2>
        <p className="text-lg mb-5 text-gray-700 leading-relaxed">
          Hi! I’m <span className="font-bold">Sumyta Bentey Habib</span>, an aspiring <span className="font-bold">MERN Stack Developer</span>.
          I’ve been on my coding journey for over <span className="font-bold">6 months</span>, constantly learning and experimenting with modern web technologies.
        </p>
        <p className="text-lg mb-5 text-gray-700 leading-relaxed">
          I’m a naturally <span className="font-bold">adaptive</span> and curious learner who loves picking up new skills fast. Besides coding, I enjoy <span className="font-bold">crafting</span> — it keeps my creativity flowing and helps me see problems from unique angles.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Right now, I’m focused on building solid projects with React, Node.js, and MongoDB, and expanding my skills every day. I’m excited to grow, collaborate, and craft amazing things on the web!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
