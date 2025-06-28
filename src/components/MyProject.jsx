import React from 'react';
import ProjectOneCard from "./project1/ProjectOneCard";
import ProjectTwoCard from "./project2/ProjectTwoCard";
import ProjectThreeCard from "./project3/ProjectThreeCard";

const MyProject = () => {
    return (
        <div>
            <section className="py-20 px-4 bg-base-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary">My Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectOneCard></ProjectOneCard>
          <ProjectTwoCard></ProjectTwoCard>
          <ProjectThreeCard></ProjectThreeCard>
        </div>
      </div>
    </section>
        </div>
    );
};

export default MyProject;