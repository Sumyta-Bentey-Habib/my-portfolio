import React from "react";
import { motion, useAnimation } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiAdobeillustrator,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { BiLogoNetlify, BiLogoFirebase } from "react-icons/bi";
import { FaReact, FaNode } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-black" />, level: 50 },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" />, level: 70 },
  { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-black" />, level: 70 },
  { name: "React.js", icon: <FaReact className="w-8 h-8 text-blue-500" />, level: 70 },
  { name: "Node.js", icon: <FaNode className="w-8 h-8 text-green-900" />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-blue-300" />, level: 88 },
  { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 text-orange-600" />, level: 95 },
  { name: "CSS3", icon: <SiCss3 className="w-8 h-8 text-blue-600" />, level: 92 },
  { name: "WordPress", icon: <SiWordpress className="w-8 h-8 text-blue-800" />, level: 60 },
  { name: "Netlify", icon: <BiLogoNetlify className="w-8 h-8 text-[#42b883]" />, level: 80 },
  { name: "Vercel", icon: <SiVercel className="w-8 h-8 text-black" />, level: 85 },
  { name: "Firebase", icon: <BiLogoFirebase className="w-8 h-8 text-orange-400" />, level: 78 },
  // { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="w-8 h-8 text-yellow-500" />, level: 70 },
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
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-base-100 cursor-pointer relative group hover:shadow-xl transition-transform"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <p className="font-semibold mb-2 text-gray-800">{skill.name}</p>

              {/* Animated Percentage */}
              <motion.span
                className="mb-1 text-sm font-medium text-gray-700"
                initial={{ count: 0 }}
                whileInView={{ count: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {skill.level}%
              </motion.span>

              {/* Gradient Skill Bar */}
              <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden relative">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-2 w-2 rounded-full bg-white/70 shadow-lg"
                  initial={{ x: 0 }}
                  animate={{ x: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut", repeat: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
