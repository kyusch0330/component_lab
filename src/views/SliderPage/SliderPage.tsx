import React, { useState } from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Slider from "components/Sliders/BasicSlider/Slider";
import VerticalSlider from "components/Sliders/VerticalSlider/VerticalSlider";
import { ReactComponent as ArrowImg } from "assets/right-arrow.svg";
import "./SliderPage.scss";
const SliderPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [
    ["basic slider", "/slider"],
    ["vertical slider", "/slider/vertical"],
  ];
  const components = [Slider, VerticalSlider];
  return (
    <div className="sliderPageContainer">
      <div className={`sliderMenuContainer ${!display && "closed"}`}>
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
        <button
          className="toggleMenuBtn"
          onClick={() => setDisplay((display) => !display)}
        >
          <ArrowImg width={20} height={20} />
        </button>
      </div>
      {paths.map((path, pIndex) => (
        <Route exact path={path[1]} component={components[pIndex]} />
      ))}
    </div>
  );
};

export default SliderPage;
