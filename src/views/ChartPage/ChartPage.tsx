import React, { useState } from "react";
import { Route } from "react-router-dom";
import PageMenu from "views/PageMenu/PageMenu";
import BarChart from "components/Charts/BarChart/BarChart";
import "./ChartPage.scss";
import PieChart from "components/Charts/PieChart/PieChart";

const ChartPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [
    ["bar chart", "/chart"],
    ["pie chart", "/chart/pie-chart"],
  ];

  const components = [BarChart, PieChart];
  return (
    <div className="chartPageContainer">
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

export default ChartPage;
