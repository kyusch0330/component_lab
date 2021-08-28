import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Slider from "components/Sliders/BasicSlider/Slider";
import "./SliderPage.scss";
const SliderPage = () => {
  return (
    <div className="sliderPageContainer">
      <div className="sliderMenu">slider menu</div>
      <Router>
        <Switch>
          <Route exact path="/slider" component={Slider} />
        </Switch>
      </Router>
    </div>
  );
};

export default SliderPage;
