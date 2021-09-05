import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SliderPage from "views/SliderPage/SliderPage";
import DragAndDropPage from "views/DragAndDropPage/DragAndDropPage";
import Navigation from "../views/Navigation/Navigation";
import "./Routes.scss";
import ChartPage from "views/ChartPage/ChartPage";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
