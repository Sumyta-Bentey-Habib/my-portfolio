import React from "react";

const AboutMe = () => {
  return (
    <section className="py-24 px-6 flex justify-center">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg rounded-3xl shadow-xl p-12 max-w-3xl text-center">
        <h2 className="text-5xl font-bold mb-8 text-primary">
  So, Who Am I?
        </h2>

        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          I’m <span className="font-semibold">Sumyta Bentey Habib</span>, a
          frontend-focused full-stack developer who enjoys building clean,
          scalable web applications with real-world features.
        </p>

        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          I primarily work with <span className="font-semibold">React, Next.js,
          Node.js, and MongoDB</span>, and I care deeply about UI structure,
          component reusability, and performance. I don’t just make things work —
          I focus on making them maintainable and user-friendly.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          I’ve worked on both solo and team-based projects, including a
          real-time social media platform where collaboration, code reviews,
          and architectural decisions mattered as much as writing code itself.
          My goal is to grow as a developer by building meaningful products,
          learning from feedback, and solving real problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
