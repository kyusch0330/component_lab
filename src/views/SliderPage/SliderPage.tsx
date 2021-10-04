import React, { useState } from "react";
import { Route } from "react-router-dom";
import Slider from "components/Sliders/BasicSlider/Slider";
import VerticalSlider from "components/Sliders/VerticalSlider/VerticalSlider";
import CircularSlider from "components/Sliders/CircularSlider/CircularSlider";
import "./SliderPage.scss";
import PageMenu from "views/PageMenu/PageMenu";
import ScrollSlider from "components/Sliders/ScrollSlider/ScrollSlider";
const SliderPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [
    ["basic slider", "/slider"],
    ["vertical slider", "/slider/vertical"],
    ["circular slider", "/slider/circular"],
    ["scroll slider", "/slider/scroll"],
  ];
  const components = [Slider, VerticalSlider, CircularSlider, ScrollSlider];
  return (
    <div className="sliderPageContainer">
      <PageMenu
        display={display}
        setDisplay={setDisplay}
        paths={paths}
        current={current}
        setCurrent={setCurrent}
      />

      {paths.map((path, pIndex) => (
        <Route
          exact
          path={path[1]}
          component={components[pIndex]}
          key={pIndex}
        />
      ))}
    </div>
  );
};

export default SliderPage;
