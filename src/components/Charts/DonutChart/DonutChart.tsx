import React, { useEffect, useState } from "react";
import DataGenerator from "../DataGenerator/DataGenerator";
import "./DonutChart.scss";
const DonutChart = () => {
  const [dataList, setDataList] = useState(
    new Array(5).fill(0).map((data, index) => ({
      dataId: index,
      dataName: String(index),
      dataValue: Number(data),
    }))
  );
  const [valueToDisplay, setValueToDisplay] = useState(
    new Array(dataList.length).fill(0)
  );

  useEffect(() => {
    setValueToDisplay(new Array(dataList.length).fill(0));
  }, [dataList]);

  useEffect(() => {
    if (
      valueToDisplay.every(
        (value, index) => value === dataList[index].dataValue
      )
    )
      return;
    else {
      setTimeout(
        () =>
          setValueToDisplay((valueToDisplay) =>
            valueToDisplay.map((value, index) =>
              value < dataList[index].dataValue ? value + 1 : value
            )
          ),
        12
      );
    }
  }, [valueToDisplay]);

  const colors = ["#ce4e4e", "#feae4e", "#4ece4e", "#4e4ece", "#ae4ede"];
  return (
    <div className="donutChartContainer">
      <DataGenerator dataList={dataList} setDataList={setDataList} />
      <div className="chartContainer">
        {valueToDisplay.map((value, index) => {
          return (
            <div
              key={dataList[index].dataId}
              className="chart"
              style={{
                color: colors[index],
                background: `conic-gradient(${colors[index]} ${Math.floor(
                  value * 3.6
                )}deg, #dfdfdf ${Math.floor(value * 3.6)}deg)`,
              }}
            >
              <div className="dataValue">{value}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonutChart;
