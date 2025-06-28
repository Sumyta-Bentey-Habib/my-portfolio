import React from "react";
import one from "../../assets/project3/one.png";
import two from "../../assets/project3/two.png";
import three from "../../assets/project3/three.png";
import four from "../../assets/project3/four.png";

const ProjectThreeCarousel = () => {
  return (
    <div>
      <div className="carousel w-full rounded-xl overflow-hidden">
        <div id="project3-item1" className="carousel-item w-full">
          <img src={one} alt="Doc Talk Screenshot 1" className="w-full object-cover" />
        </div>
        <div id="project3-item2" className="carousel-item w-full">
          <img src={two} alt="Doc Talk Screenshot 2" className="w-full object-cover" />
        </div>
        <div id="project3-item3" className="carousel-item w-full">
          <img src={three} alt="Doc Talk Screenshot 3" className="w-full object-cover" />
        </div>
        <div id="project3-item4" className="carousel-item w-full">
          <img src={four} alt="Doc Talk Screenshot 4" className="w-full object-cover" />
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#project3-item1" className="btn btn-xs">1</a>
        <a href="#project3-item2" className="btn btn-xs">2</a>
        <a href="#project3-item3" className="btn btn-xs">3</a>
        <a href="#project3-item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default ProjectThreeCarousel;
