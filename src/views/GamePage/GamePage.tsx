import Bank from "components/Game/Bank/Bank";
import Lotto from "components/Game/Lotto/Lotto";
import React, { useState } from "react";
import { Route } from "react-router";
import PageMenu from "views/PageMenu/PageMenu";
import "./GamePage.scss";

const GamePage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [
    ["lotto", "/game"],
    ["bank", "/game/bank"],
  ];
  const components = [Lotto, Bank];
  return (
    <div className="gamePageContainer">
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

export default GamePage;
