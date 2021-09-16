import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SliderPage from "views/SliderPage/SliderPage";
import DragAndDropPage from "views/DragAndDropPage/DragAndDropPage";
import Navigation from "../views/Navigation/Navigation";
import "./Routes.scss";
import ChartPage from "views/ChartPage/ChartPage";
import SoundPage from "views/SoundPage/SoundPage";
import GamePage from "views/GamePage/GamePage";
import CanvasPage from "views/CanvasPage/CanvasPage";

const Routes = () => {
  return (
    <Router>
      <div className="mainContainer" style={{ height: window.innerHeight }}>
        <Navigation />
        <div className="displayContainer">
          <Switch>
            <Route path="/slider" component={SliderPage} />
            <Route path="/drag-and-drop" component={DragAndDropPage} />
            <Route path="/chart" component={ChartPage} />
            <Route path="/sound" component={SoundPage} />
            <Route path="/game" component={GamePage} />
            <Route path="/canvas" component={CanvasPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
