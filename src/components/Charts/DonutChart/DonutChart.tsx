import React, { useState } from "react";
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

  const colors = ["#ce4e4e", "#feae4e", "#4ece4e", "#4e4ece", "#ae4ede"];
  return (
    <div className="donutChartContainer">
      <DataGenerator dataList={dataList} setDataList={setDataList} />
      <div className="chartContainer">
        {dataList.map((data, index) => {
          return (
            <div
              key={data.dataId}
              className="chart"
              style={{
                color: colors[index],
                background: `conic-gradient(${colors[index]} ${Math.floor(
                  data.dataValue * 3.6
                )}deg, #dfdfdf ${Math.floor(data.dataValue * 3.6)}deg)`,
              }}
            >
              <div className="dataValue">{data.dataValue}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonutChart;
