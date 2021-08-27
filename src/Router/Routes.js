import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DragAndDrop from "../components/DragAndDrops/DragAndDrop";
import Slider from "../components/Sliders/Slider";
import Navigation from "../views/Navigation/Navigation";
import "./Routes.scss";

const Routes = () => {
  return (
    <Router>
      <div className="mainContainer">
        <Navigation />
        <div className="displayContainer">
          <Switch>
            <Route exact path="/slider" component={Slider} />
            <Route exact path="/drag-and-drop" component={DragAndDrop} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
