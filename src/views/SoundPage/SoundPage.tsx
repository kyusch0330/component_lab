import React, { useState } from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./SoundPage.scss";
import PageMenu from "views/PageMenu/PageMenu";
import MusicController from "components/SoundComponents/MusicController/MusicController";
const SliderPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [["music", "/sound"]];
  const components = [MusicController];
  return (
    <div className="soundPageContainer">
      <PageMenu
        display={display}
        setDisplay={setDisplay}
        paths={paths}
        current={current}
        setCurrent={setCurrent}
      />

      {paths.map((path, pIndex) => (
        <Route exact path={path[1]} component={components[pIndex]} />
      ))}
    </div>
  );
};

export default SliderPage;
