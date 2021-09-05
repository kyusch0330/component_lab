import React, { useEffect, useState } from "react";
import "./DataGenerator.scss";

interface Data {
  dataId: number;
  dataName: string;
  dataValue: number;
}
interface Props {
  dataList: Data[];
  setDataList: Function;
}

const DataGenerator = ({ dataList, setDataList }: Props) => {
  const [tempDataList, setTempDataList] = useState(dataList.slice());
  const [generating, setGenerating] = useState(false);
  const genRandomData = () => {
    if (generating) return;
    setGenerating(true);
    setTimeout(() => setGenerating(false), 800);
  };
  useEffect(() => {
    if (!generating) {
      fixData();
      return;
    }
    const interval = setInterval(
      () =>
        setTempDataList(
          tempDataList.map((data) => ({
            ...data,
            dataValue: Math.floor(Math.random() * 100),
          }))
        ),
      50
    );
    return function clear() {
      clearInterval(interval);
    };
  }, [generating]);
  const fixData = () => {
    setDataList(
      dataList.map((data, index) => ({
        ...data,
        dataValue: tempDataList[index].dataValue,
      }))
    );
  };
  return (
    <div className="dataGeneratorContainer">
      <ul className="dataList">
        {tempDataList.map((data) => (
          <li key={data.dataId}>{data.dataValue}</li>
        ))}
      </ul>
      <button
        className={generating ? "generateBtn gen" : "generateBtn"}
        onClick={() => {
          genRandomData();
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default DataGenerator;
