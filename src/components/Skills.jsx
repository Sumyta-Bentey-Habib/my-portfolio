import React from "react";
import {
  Database,
  Server,
  Code,
  Cpu,
  Layers,
  Cloud,
  UploadCloud,
  Brush,
} from "lucide-react";

const skills = [
  { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
  { name: "Express.js", icon: <Server className="w-8 h-8" /> },
  { name: "React.js", icon: <Code className="w-8 h-8" /> },
  { name: "Node.js", icon: <Cpu className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <Layers className="w-8 h-8" /> },
  { name: "Netlify", icon: <Cloud className="w-8 h-8" /> },
  { name: "Vercel", icon: <UploadCloud className="w-8 h-8" /> },
  { name: "Firebase", icon: <Database className="w-8 h-8" /> },
  { name: "Adobe Illustrator", icon: <Brush className="w-8 h-8" /> },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-base-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl shadow-md bg-base-100 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
