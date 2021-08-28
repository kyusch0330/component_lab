import React, { useState } from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Slider from "components/Sliders/BasicSlider/Slider";
import VerticalSlider from "components/Sliders/VerticalSlider/VerticalSlider";
import "./SliderPage.scss";
const SliderPage = () => {
  const [current, setCurrent] = useState(0);
  const paths = [
    ["basic slider", "/slider"],
    ["vertical slider", "/slider/vertical"],
  ];
  const components = [Slider, VerticalSlider];
  return (
    <div className="sliderPageContainer">
      <div className="sliderMenuContainer">
        <div className="sliderMenu">
          {paths.map((path, pIndex) => (
            <Link
              key={pIndex}
              onClick={() => setCurrent(pIndex)}
              className={`menu ${current === pIndex && "selected"}`}
              to={path[1]}
            >
              {path[0]}
            </Link>
          ))}
        </div>
      </div>
      {paths.map((path, pIndex) => (
        <Route exact path={path[1]} component={components[pIndex]} />
      ))}
    </div>
  );
};

export default SliderPage;
