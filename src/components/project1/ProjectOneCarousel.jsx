import React from "react";
import one from "../../assets/project1/one.png";
import two from "../../assets/project1/two.png";
import three from "../../assets/project1/three.png";
import four from "../../assets/project1/four.png";
import five from "../../assets/project1/five.png";

const ProjectOneCarousel = () => {
  return (
    <div>
      <div className="carousel w-full rounded-xl overflow-hidden">
        <div id="project1-item1" className="carousel-item w-full">
          <img src={one} alt="GoAthlete Screenshot 1" className="w-full object-cover" />
        </div>
        <div id="project1-item2" className="carousel-item w-full">
          <img src={two} alt="GoAthlete Screenshot 2" className="w-full object-cover" />
        </div>
        <div id="project1-item3" className="carousel-item w-full">
          <img src={three} alt="GoAthlete Screenshot 3" className="w-full object-cover" />
        </div>
        <div id="project1-item4" className="carousel-item w-full">
          <img src={four} alt="GoAthlete Screenshot 4" className="w-full object-cover" />
        </div>
        <div id="project1-item5" className="carousel-item w-full">
          <img src={five} alt="GoAthlete Screenshot 5" className="w-full object-cover" />
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#project1-item1" className="btn btn-xs">1</a>
        <a href="#project1-item2" className="btn btn-xs">2</a>
        <a href="#project1-item3" className="btn btn-xs">3</a>
        <a href="#project1-item4" className="btn btn-xs">4</a>
        <a href="#project1-item5" className="btn btn-xs">5</a>
      </div>
    </div>
  );
};

export default ProjectOneCarousel;
