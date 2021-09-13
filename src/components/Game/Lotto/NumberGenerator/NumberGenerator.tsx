import React, { useEffect, useState } from "react";
import "./NumberGenerator.scss";

interface Props {
  isValidNums: boolean;
  setNumberList: Function;
}

const NumberGenerator = ({ setNumberList, isValidNums }: Props) => {
  const [tempNumberList, setTempNumberList] = useState(new Array(7).fill(0));
  const [generating, setGenerating] = useState(false);
  const genRandomData = () => {
    if (generating || !isValidNums) return;
    setGenerating(true);
    // setTimeout(() => setGenerating(false), 3500);
  };
  useEffect(() => {
    if (!generating) {
      fixData();
      return;
    }
    setTempNumberList(new Array(7).fill(0));
    const s = new Set();
    const interval = setInterval(() => {
      while (true) {
        const randomNum = (Math.ceil(Math.random() * 1000) % 45) + 1;
        if (!s.has(randomNum)) {
          s.add(randomNum);
          break;
        }
      }
      setTempNumberList(Array.from(s));
      if (s.size === 7) setGenerating(false);
    }, 300);
    return function clear() {
      clearInterval(interval);
    };
  }, [generating]);
  const fixData = () => {
    setNumberList(tempNumberList.slice());
  };
  return (
    <div className="numberGeneratorContainer">
      <ul className="numberList">
        {tempNumberList.map((num, index) => {
          if (num === 0) return;
          let color = "";
          if (num < 11) {
            color = "#feae4e";
          } else if (num < 21) {
            color = "#4e4ece";
          } else if (num < 31) {
            color = "#ce4e4e";
          } else if (num < 41) {
            color = "#aeaeae";
          } else {
            color = "#4ece4e";
          }
          return (
            <>
              {index === 6 ? <li style={{ fontSize: "1.5em" }}>+</li> : ""}
              <li
                key={index}
                style={{
                  background: `radial-gradient(circle farthest-side at 5%, #eeeeee ,${color})`, //background: linear-gradient(to bottom right, blue, pink);
                  color: "white",
                }}
              >
                {num}
              </li>
            </>
          );
        })}
      </ul>
      <button
        className={
          generating
            ? "generateBtn gen"
            : "generateBtn" + (isValidNums ? "" : " notValid")
        }
        onClick={() => {
          genRandomData();
        }}
      >
        Try
      </button>
      {isValidNums ? "" : <span>Wrong format.</span>}
    </div>
  );
};

export default NumberGenerator;
