import React from "react";
import { FaProjectDiagram, FaUser, FaUsers } from "react-icons/fa";
import ProjectFourCard from "./project4/ProjectFourCard";
import ProjectFiveCard from "./project5/ProjectFiveCard";
import ProjectSixCard from "./project6/ProjectSixCard";
import GroupProjectOneCard from "../components/groupproject.jsx/GroupProjectOneCard";

const MyProject = () => {
  return (
    <section className="py-24 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-16 text-primary flex items-center justify-center gap-4">
          <FaProjectDiagram className="w-10 h-10" />
          Ideas Brought to Life
        </h2>

        {/* Group Projects */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <FaUsers className="text-primary" />
            Group Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quadra - Full Width */}
            <div className="md:col-span-3">
              <GroupProjectOneCard badge="Group Project" badgeColor="indigo" />
            </div>
          </div>
        </div>
        {/* Personal Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <FaUser className="text-primary" />
            Personal Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Project */}
            <div className="md:col-span-2">
              <ProjectFourCard badge="Featured" badgeColor="purple" />
            </div>

            {/* Other Projects */}
            <ProjectFiveCard badge="Personal" badgeColor="purple" />
            <ProjectSixCard badge="Personal" badgeColor="purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
