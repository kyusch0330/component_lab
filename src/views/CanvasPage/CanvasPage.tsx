import Paint from "components/Canvas/Paint/Paint";
import Shape from "components/Canvas/Shape/Shape";
import React, { useState } from "react";
import { Route } from "react-router";
import PageMenu from "views/PageMenu/PageMenu";
import "./CanvasPage.scss";

const CanvasPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [
    ["paint", "/canvas"],
    ["shape", "/canvas/shape"],
  ];

  const components = [Paint, Shape];
  return (
    <div className="canvasPageContainer">
      <PageMenu
        display={display}
        setDisplay={setDisplay}
        paths={paths}
        current={current}
        setCurrent={setCurrent}
      />
      {paths.map((path, pIndex) => (
        <Route
          key={pIndex}
          exact
          path={path[1]}
          component={components[pIndex]}
        />
      ))}
    </div>
  );
};

export default CanvasPage;
