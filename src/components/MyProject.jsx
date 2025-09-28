import React from 'react';
import ProjectOneCard from "./project1/ProjectOneCard";
import ProjectTwoCard from "./project2/ProjectTwoCard";
import ProjectThreeCard from "./project3/ProjectThreeCard";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectFourCard from './project4/ProjectFourCard';

const MyProject = () => {
  return (
    <section className="py-24 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-primary flex items-center justify-center gap-4">
          <FaProjectDiagram className="w-10 h-10" />Ideas Brought to Life
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectFourCard/>
          <ProjectOneCard />
          <ProjectTwoCard />
  

        </div>
      </div>
    </section>
  );
};

export default MyProject;
