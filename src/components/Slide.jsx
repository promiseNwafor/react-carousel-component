import React, { useState, useRef } from "react";
import { data } from "../utils/data";

function Slide() {
  const [active, setActive] = useState(0);
  const dataLength = data.length - 1;
  const ref = useRef();

  const prevSlide = () => {
    if (active === 0) {
      setActive(dataLength);
    } else {
      setActive(active - 1);
    }
  };

  const nextSlide = () => {
    if (active === dataLength) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <div className="">
      <center>
        <h1>Carousel slider</h1>
      </center>
      <div className="Slide" onTouchStart={prevSlide} onTouchEnd={nextSlide}>
        <div className="slide">
          <div onClick={prevSlide} className="btn left">
            {"<"}
          </div>
          <div
            className="overlay"
            onTouchStart={prevSlide}
            onTouchEnd={nextSlide}
            onDragEnd={nextSlide}
            onDragStart={prevSlide}
          ></div>
          {data.map((item, i) => {
            return (
              <div className="item" key={i}>
                <img
                  className={i === active && "active"}
                  src={item.source}
                  alt={item.title}
                />
                <div
                  className={i === active && "title"}
                  style={{ background: item.background }}
                >
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
          <div onClick={nextSlide} className="btn right">
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
