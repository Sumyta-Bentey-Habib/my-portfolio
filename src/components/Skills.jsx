import React from "react";
import { SiHtml5, SiCss3, SiPython,SiAdobeillustrator, SiExpress,SiMongodb,SiVercel,SiTailwindcss  } from "react-icons/si";
import { BiLogoNetlify, BiLogoFirebase } from "react-icons/bi";
import { FaReact,FaNode } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
const skills = [
  { name: "MongoDB", icon: <SiMongodb  className="w-8 h-8 text-green-600 " /> },
  { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-black" /> },
  { name: "React.js", icon: <FaReact className="w-8 h-8 text-blue-500" /> },
  { name: "Node.js", icon: <FaNode className="w-8 h-8 text-green-900" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-blue-300" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="w-8 h-8 text-blue-600" /> },
  { name: "Python", icon: <SiPython className="w-8 h-8 text-purple-900" /> },
  { name: "Netlify", icon: <BiLogoNetlify className="w-8 h-8 text-[#42b883]" /> },
  { name: "Vercel", icon: <SiVercel className="w-8 h-8 text-black" /> },
  { name: "Firebase", icon: < BiLogoFirebase className="w-8 h-8 text-orange-400" /> },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator  className="w-8 h-8 text-yellow-500" /> },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-base-200">
      <div className="max-w-5xl mx-auto text-center">
         <h2 className="text-5xl font-bold mb-12 text-primary flex items-center justify-center gap-4">
                  <LuGoal className="w-10 h-10" /> Tools of My Trade
                </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl shadow-md bg-base-100 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <p className="font-medium mb-2">{skill.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${Math.floor(Math.random() * (100 - 70 + 1) + 70)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;