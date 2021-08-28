import React from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Slider from "components/Sliders/BasicSlider/Slider";
import VerticalSlider from "components/Sliders/VerticalSlider/VerticalSlider";
import "./SliderPage.scss";
const SliderPage = () => {
  return (
    <div className="sliderPageContainer">
      <div className="sliderMenuContainer">
        <div className="sliderMenu">
          <Link to="/slider">basic slider</Link>
          <Link to="/slider/vertical">vertical slider</Link>
        </div>
      </div>
      <Route exact path="/slider" component={Slider} />
      <Route exact path="/slider/vertical" component={VerticalSlider} />
    </div>
  );
};

export default SliderPage;
