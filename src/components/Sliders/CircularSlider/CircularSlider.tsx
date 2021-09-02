import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./CircularSlider.scss";
import SliderController from "./CircularSliderController/CircularSliderController";

const CircularSlider = () => {
  const colors = ["red", "orange", "green", "blue", "purple"];
  const [current, setCurrent] = useState(0);
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
    <div className="circular_sliderContainer">
      <div className="sliderView">
        <div className="slider">
          {colors.map((color, index) => (
            <div
              className={`slideCard ${color}`}
              style={{
                zIndex:
                  colors.length +
                  (index > current ? -1 * index : index - current),
                top:
                  index > current
                    ? 20 + 20 * (index - current) + "px"
                    : 20 + -20 * (index - current) + "px",
              }}
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

export default CircularSlider;
