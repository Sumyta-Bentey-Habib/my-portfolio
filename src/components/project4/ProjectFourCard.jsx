import React from "react";
import { Github, ExternalLink, Info } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiStripe,
} from "react-icons/si";
import ProjectFourCarousel from "./ProjectFourCarousel";

const techStack = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiStripe />, name: "Stripe" },
];

const ProjectFourCard = () => {
  return (
    <div className="bg-white w-full max-w-2xl shadow-xl rounded-3xl border border-gray-200 hover:shadow-2xl transition mx-auto my-10">
      {/* Carousel */}
      <figure className="px-6 pt-6">
        <ProjectFourCarousel />
      </figure>

      {/* Card Content */}
      <div className="card-body items-center text-center px-8 pb-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-3">Studify</h2>
        <p className="mb-6 text-gray-800 leading-relaxed">
          <strong>Studify</strong> is a role-based educational platform built for
          modern learning environments. Students can register and explore courses,
          while admins manage user roles, oversee activity, and control access.  
          It also includes a <strong>Stripe-powered payment demo</strong> for course
          subscriptions, providing real-world payment integration experience.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition"
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://studify-749d1.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2 px-5"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Studify"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Client
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Studify-Server"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full flex items-center gap-2 px-5"
          >
            <Github size={18} /> Server
          </a>

          {/* Modal Trigger */}
          <label
            htmlFor="studify-modal"
            className="btn bg-purple-400 hover:bg-purple-500 text-white rounded-full flex items-center gap-2 px-5"
          >
            <Info size={18} /> Challenges
          </label>
        </div>
      </div>

      {/* Challenges Modal */}
      <input type="checkbox" id="studify-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white rounded-2xl max-w-lg">
          <h3 className="font-bold text-xl mb-3 text-purple-700">
            Challenges & Solutions
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Implementing secure role-based user access for admins & students.</li>
            <li>Designing a clean, user-friendly dashboard for management.</li>
            <li>Integrating Stripe checkout for real-world payment simulation.</li>
            <li>Deploying and connecting client/server seamlessly with Firebase & Vercel.</li>
          </ul>
          <div className="modal-action">
            <label htmlFor="studify-modal" className="btn bg-purple-600 text-white rounded-full">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFourCard;
