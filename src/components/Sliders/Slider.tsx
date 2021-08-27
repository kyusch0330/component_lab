import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Slider.scss";
const Slider = () => {
  const colors = ["red", "green", "blue"];
  const [current, setCurrent] = useState(0);
  const currentSlide = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % 3);
    }, 5000);
    return function clean() {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    currentSlide.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [current]);
  return (
    <div className="sliderContainer">
      <div className="sliderView">
        <div className="slider">
          {colors.map((color, index) => (
            <div
              ref={current === index ? currentSlide : null}
              className={`slideCard ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
