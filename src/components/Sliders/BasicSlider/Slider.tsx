import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Slider.scss";
import SliderController from "./SliderController/SliderController";

const Slider = () => {
  const colors = ["red", "orange", "green", "blue", "purple"];
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardWidth = document.querySelector(".slideCard")?.clientWidth; //슬라이드 한 장의 width
  console.log(cardWidth);

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
    <div className="sliderContainer">
      <div className="sliderView">
        <div
          className="slider"
          style={{
            transform: `translateX(${
              -1 * current * (cardWidth ? cardWidth : 1)
            }px)`,
            width: `${100 * colors.length}%`,
          }}
        >
          {colors.map((color, index) => (
            <div className={`slideCard ${color}`} />
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
