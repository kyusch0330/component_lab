import React, { useState } from "react";
import { Route } from "react-router-dom";
import PageMenu from "views/PageMenu/PageMenu";
import DragAndDrop from "components/DragAndDrops/BasicDragAndDrop/DragAndDrop";
import "./DragAndDropPage.scss";

const DragAndDropPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [
    ["basic D&D", "/drag-and-drop"],
    ["drag and put in", "/drag-and-drop/drag-and-put-in"],
  ];

  const components = [DragAndDrop, DragAndDrop];
  return (
    <div className="dragAndDropPageContainer">
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

export default DragAndDropPage;
