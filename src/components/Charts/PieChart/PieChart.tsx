import React, { useState } from "react";
import DataGenerator from "../DataGenerator/DataGenerator";
import "./PieChart.scss";
const PieChart = () => {
  const [dataList, setDataList] = useState(
    new Array(5).fill(0).map((data, index) => ({
      dataId: index,
      dataName: String(index),
      dataValue: Number(data),
    }))
  );
  const colors = ["#ce4e4e", "#feae4e", "#4ece4e", "#4e4ece", "#ae4ede"];
  const total = dataList
    .map((data, index) => data.dataValue)
    .reduce((total, dataValue, index) => {
      return total + dataValue;
    });

  const degs = Array.from(Array(dataList.length), () => [0, 0]);
  degs[0][1] = Math.floor((dataList[0].dataValue / total) * 360);
  dataList
    .map((data) => data.dataValue)
    .reduce((acc, dataValue, index) => {
      degs[index][0] = Math.floor((acc / total) * 360);
      degs[index][1] = Math.floor(((acc + dataValue) / total) * 360);
      return acc + dataValue;
    });
  const chartStyle = `conic-gradient(${degs.map(
    (deg, index) =>
      `${colors[index]} ${deg[0] === 0 ? "" : `${deg[0]}deg`} ${
        deg[1] === 360 ? "" : `${deg[1]}deg`
      }`
  )})`;
  return (
    <div className="pieChartContainer">
      <DataGenerator dataList={dataList} setDataList={setDataList} />
      <div className="chartContainer">
        <div
          className="chart"
          style={{
            background: chartStyle,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PieChart;
