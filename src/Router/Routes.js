import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SliderPage from "views/SliderPage/SliderPage";
import DragAndDrop from "../components/DragAndDrops/DragAndDrop";
import Navigation from "../views/Navigation/Navigation";
import "./Routes.scss";

const Routes = () => {
  return (
    <Router>
      <div className="mainContainer">
        <Navigation />
        <div className="displayContainer">
          <Switch>
            <Route path="/slider" component={SliderPage} />
            <Route path="/drag-and-drop" component={DragAndDrop} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
