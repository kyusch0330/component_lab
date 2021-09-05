import React, { useState } from "react";
import DataGenerator from "../DataGenerator/DataGenerator";
import "./BarChart.scss";

const BarChart = () => {
  const [dataList, setDataList] = useState(
    new Array(5).fill(0).map((data, index) => ({
      dataId: index,
      dataName: String(index),
      dataValue: data,
    }))
  );
  console.log(dataList);
  return (
    <div className="barChartContainer">
      <DataGenerator dataList={dataList} setDataList={setDataList} />
      <div className="chartContainer">
        {dataList.map((data) => (
          <div className="chartBox">
            <span className="dataValue">{data.dataValue}</span>
            <div className="chart">
              <div
                className="bar"
                style={{ width: `${data.dataValue}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
