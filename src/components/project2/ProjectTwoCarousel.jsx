import React from "react";
import one from "../../assets/project2/one.png";
import two from "../../assets/project2/two.png";
import three from "../../assets/project2/three.png";
import four from "../../assets/project2/four.png";
import five from "../../assets/project2/five.png";

const ProjectTwoCarousel = () => {
  return (
    <div>
      <div className="carousel w-full rounded-xl overflow-hidden">
        <div id="project2-item1" className="carousel-item w-full">
          <img src={one} alt="Hobby Hood Screenshot 1" className="w-full object-cover" />
        </div>
        <div id="project2-item2" className="carousel-item w-full">
          <img src={two} alt="Hobby Hood Screenshot 2" className="w-full object-cover" />
        </div>
        <div id="project2-item3" className="carousel-item w-full">
          <img src={three} alt="Hobby Hood Screenshot 3" className="w-full object-cover" />
        </div>
        <div id="project2-item4" className="carousel-item w-full">
          <img src={four} alt="Hobby Hood Screenshot 4" className="w-full object-cover" />
        </div>
        <div id="project2-item5" className="carousel-item w-full">
          <img src={five} alt="Hobby Hood Screenshot 5" className="w-full object-cover" />
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#project2-item1" className="btn btn-xs">1</a>
        <a href="#project2-item2" className="btn btn-xs">2</a>
        <a href="#project2-item3" className="btn btn-xs">3</a>
        <a href="#project2-item4" className="btn btn-xs">4</a>
        <a href="#project2-item5" className="btn btn-xs">5</a>
      </div>
    </div>
  );
};

export default ProjectTwoCarousel;
