import React from "react";
import ProjectThreeCarousel from "./ProjectThreeCarousel";
import { Github, ExternalLink, Info } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  
} from "react-icons/si";

const ProjectThreeCard = () => {
  return (
    <div className="card bg-base-100 w-full max-w-md shadow-md hover:shadow-xl transition mx-auto my-10">
      <figure className="px-6 pt-6">
        <ProjectThreeCarousel />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">Doc Talk</h2>
        <p className="mb-4">
          DocTalk is a smart healthcare web app that helps patients easily find doctors, check their availability,
          and book appointments seamlessly. Your health, organized in one place.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    <SiReact /> React
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    <SiNodedotjs /> Node.js
                  </span>
                 
                  <span className="inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    <SiTailwindcss /> Tailwind CSS
                  </span>
                  
                </div>
                </div>

        <div className="card-actions justify-center flex flex-wrap gap-2">
          <a
            href="https://bouncy-crow.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2"
          >
            <ExternalLink size={18} /> Live Site
          </a>
          <a
            href="https://github.com/Sumyta-Bentey-Habib/Doc-Talk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral flex items-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>

          {/* Modal Trigger */}
          <label htmlFor="doctalk-modal" className="btn btn-accent flex items-center gap-2">
            <Info size={18} /> Challenges
          </label>
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id="doctalk-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Challenges & Solutions</h3>
          <p className="mb-2">
            In DocTalk, I faced challenges designing a doctor availability system and appointment slots.
            Building an intuitive calendar and real-time updates was tricky.
          </p>
          <p className="mb-4">
            I solved it using React state management and conditional rendering,
            and ensured a smooth user experience with Tailwind CSS.
          </p>
          <div className="modal-action">
            <label htmlFor="doctalk-modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectThreeCard;
