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
    }, 3000);
    return function clean() {
      clearInterval(interval);
    };
  }, [paused]);

  console.log("--- current:", current);
  return (
    <div className="circular_sliderContainer">
      <div className="sliderView">
        <div className="slider">
          {colors.map((color, index) => {
            const len = colors.length;
            const range = Math.floor(colors.length / 2);
            const start = current - range;
            const end = current + range;
            const reIndex =
              index < start
                ? len + index
                : index > end
                ? 0 - (len - index)
                : index;
            const isBigger = reIndex >= current;
            const diff = Math.abs(current - reIndex);
            return (
              <div
                className={`slideCard ${color}`}
                style={{
                  zIndex: len - diff,
                  top: isBigger
                    ? `${60 + 30 * diff}px`
                    : `${60 + -30 * diff}px`,
                  width: `${100 - diff * 10}%`,
                }}
              />
            );
          })}
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
