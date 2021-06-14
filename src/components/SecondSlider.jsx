import React, {useRef} from 'react'
import { data } from "../utils/data";


function SecondSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dataLength = data.length - 1;
  const slideRef = useRef(null);



  const nextSlide = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: 300,
        top: 0,
        behavior: "smooth",
      });
    }
    activeIndex < dataLength
      ? setActiveIndex(activeIndex + 1)
      : setActiveIndex(0);
  };

  const prevSlide = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: -300,
        top: 0,
        behavior: "smooth",
      });
    }
    activeIndex > 0
      ? setActiveIndex(activeIndex - 1)
      : setActiveIndex(dataLength);
  };

  return (
    <div className="secondSlider">
      <h1>Hello Promise</h1>
      <button onClick={prevSlide}>Prev</button>
      <div className="secondSlide" ref={slideRef}>
        {/* <div className="focus"> */}
          {data.map((slider, i) => {
            return (
              <div className="" key={i}>
                <img
                  // className={i === active && "active"}
                  src={slider.source}
                  alt={slider.title}
                />
              </div>
            );
          })}
        {/* </div> */}
      </div>
      <div className="slides">
        <div className="prev">
          {/* {data[activeIndex > 0 ? activeIndex - 1 : dataLength]} */}
        </div>
        {/* <div className="focus">{data[activeIndex].source}</div> */}

        {/* {
          data[activeIndex < dataLength ? activeIndex + 1 : 0]
        } */}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default SecondSlider
