import React, { useEffect, useState } from "react";
import DataGenerator from "../DataGenerator/DataGenerator";
import "./PieChart.scss";

const colors = ["#ce4e4e", "#feae4e", "#4ece4e", "#4e4ece", "#ae4ede"];

const PieChart = () => {
  const [dataList, setDataList] = useState(
    new Array(5).fill(0).map((data, index) => ({
      dataId: index,
      dataName: String(index),
      dataValue: Number(data),
    }))
  );
  const [degs, setDegs] = useState(
    Array.from(Array(dataList.length), () => [0, 0])
  );
  // const [chartStyle, setChartStyle] = useState("");
  const [infoPos, setInfoPos] = useState(
    Array.from(Array(dataList.length), () => [0, 0])
  );
  useEffect(() => {
    const total = dataList
      .map((data, index) => data.dataValue)
      .reduce((total, dataValue, index) => {
        return total + dataValue;
      });
    const newDegs = degs.slice();
    newDegs[0][1] = Math.floor((dataList[0].dataValue / total) * 360);
    dataList
      .map((data) => data.dataValue)
      .reduce((acc, dataValue, index) => {
        newDegs[index][0] = Math.floor((acc / total) * 360);
        newDegs[index][1] = Math.floor(((acc + dataValue) / total) * 360);
        return acc + dataValue;
      });
    setDegs(newDegs);
  }, [dataList]);

  const isEmpty = dataList.every((data) => data.dataValue === 0);
  const isPosEmpty = infoPos.every((pos) => pos[0] === 0 && pos[1] === 0);
  // console.log(dataList);
  useEffect(() => {
    if (isEmpty) return;
    const newInfoPos = infoPos.slice();
    degs.forEach((degPair, index) => {
      const mid = Math.floor((degPair[0] + degPair[1]) / 2);
      const midRadian = (mid * Math.PI) / 180;
      const info_x = Math.sin(midRadian);
      const info_y = Math.cos(midRadian);
      const chartEl = document.getElementsByClassName("chart")[0];
      const mid_x = chartEl.clientWidth / 2;
      const mid_y = chartEl.clientHeight / 2;
      newInfoPos[index][0] = mid_x + mid_x * info_x * 0.8 - 10;
      newInfoPos[index][1] = mid_y - mid_y * info_y * 0.8 - 10;
    });
    setInfoPos(newInfoPos);
  }, [degs]);

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
            background: isEmpty ? "none" : chartStyle,
          }}
        >
          <>
            {!isPosEmpty &&
              dataList.map((data, index) => {
                return (
                  <div
                    className="dataInfo"
                    key={index}
                    style={{
                      position: "absolute",
                      left: infoPos[index][0],
                      top: infoPos[index][1],
                    }}
                  >
                    {data.dataValue}
                  </div>
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
