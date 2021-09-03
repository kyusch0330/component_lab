import React from "react";
import { useState } from "react";
import "./DragAndDrop.scss";
const DragAndDrop = () => {
  const [currentPos, setCurrentPos] = useState({ y: 0, x: 0 });
  const [dragging, setDragging] = useState(false);
  const nums = Array.from(Array(6), (_, index) => index);
  return (
    <div className="basicDNDContainer">
      <div>
        {currentPos.x},{currentPos.y}
      </div>
      {nums.map((num) => (
        <div
          className="box"
          key={num}
          draggable={dragging}
          onDrag={(e) => {
            setCurrentPos({ y: e.pageY, x: e.pageX });
          }}
          onDragEnd={(e) => {
            console.log("DRAGEND");
            setCurrentPos({ y: e.pageY, x: e.pageX });
            setDragging(false);
          }}
        >
          <div
            className="grabArea"
            onMouseDown={() => {
              console.log("DRAG START");
              setDragging(true);
            }}
          >
            =
          </div>
          <div className="numInfo">{num}</div>
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
