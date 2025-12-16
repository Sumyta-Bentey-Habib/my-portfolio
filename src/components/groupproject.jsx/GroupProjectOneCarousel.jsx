import React, { useEffect, useState } from "react";
import ss1 from "../../assets/groupproject/ss1.png";
import ss2 from "../../assets/groupproject/ss2.png";
import ss3 from "../../assets/groupproject/ss3.png";
import ss4 from "../../assets/groupproject/ss4.png";
import ss5 from "../../assets/groupproject/ss5.png";

const images = [ss1, ss2, ss3, ss4, ss5];

const GroupProjectOneCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Quadra Screenshot ${i + 1}`}
            className="w-full flex-shrink-0 object-cover rounded-2xl"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === i
                ? "bg-purple-600 w-4"
                : "bg-purple-200 hover:bg-purple-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupProjectOneCarousel;
