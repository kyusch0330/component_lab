import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./VerticalSlider.scss";
import SliderController from "./VerticalSliderController/VerticalSliderController";

const Slider = () => {
  const colors = ["red", "orange", "green", "blue", "purple"];
  const [current, setCurrent] = useState(0);
  const currentSlide = useRef<null | HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % colors.length);
    }, 5000);
    return function clean() {
      clearInterval(interval);
    };
  }, [paused]);

  return (
    <div className="vertical_sliderContainer">
      <div className="sliderView">
        <div
          className="slider"
          style={{
            transform: `translateY(${current * -300}px)`,
            height: `${100 * colors.length}%`,
          }}
        >
          {colors.map((color, index) => (
            <div
              ref={current === index ? currentSlide : null}
              className={`slideCard ${color}`}
            />
          ))}
        </div>
        <SliderController
          cardLen={colors.length}
          paused={paused}
          setPaused={setPaused}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
};

export default Slider;
