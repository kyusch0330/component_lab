import React, { useState } from "react";
import "./Paint.scss";
import { ReactComponent as BrushImg } from "assets/brush.svg";
import { ReactComponent as FillImg } from "assets/fill.svg";
import { ReactComponent as SaveImg } from "assets/save.svg";

const Paint = () => {
  const colors = [
    { colorName: "black", colorValue: "#1e1e1e" },
    { colorName: "gray", colorValue: "#aeaeae" },
    { colorName: "white", colorValue: "#ffffff" },
    { colorName: "red", colorValue: "#ce4e4e" },
    { colorName: "orange", colorValue: "#feae4e" },
    { colorName: "yellow", colorValue: "#eede1e" },
    { colorName: "green", colorValue: "#4ece4e" },
    { colorName: "blue", colorValue: "#4e4ece" },
    { colorName: "purple", colorValue: "#ae4ede" },
  ];
  const brushSizes = [1, 2, 3, 4, 5];

  const [paintMode, setPaintMode] = useState(0);
  // 0: brush, 1: fill
  const [color, setColor] = useState(colors[0]);
  const [brushSize, setBrushSize] = useState(1);

  return (
    <div className="paintContainer">
      <canvas id="jsPaintCanvas" className="paintCanvas"></canvas>
      <div className="controls">
        <div className="controls__brushSizes">
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
          />
          {brushSizes.map((size) => {
            const viewSize = `${size * 5 + 5}px`;
            return (
              <div
                className={`controls__brushSize${
                  brushSize === size ? " selected" : ""
                }`}
                style={{
                  width: viewSize,
                  height: viewSize,
                }}
              ></div>
            );
          })}
        </div>
        <div className="controls__menu">
          <button
            className={`paintModeBtn${paintMode === 0 ? " selected" : ""}`}
            onClick={() => setPaintMode(0)}
          >
            <BrushImg />
          </button>
          <button
            className={`paintModeBtn${paintMode === 1 ? " selected" : ""}`}
            onClick={() => setPaintMode(1)}
          >
            <FillImg />
          </button>
          <button id="saveBtn">
            <SaveImg />
          </button>
        </div>
        <div id="jsColors" className="controls__colors">
          {colors.map((color) => (
            <div
              className="controls__color"
              style={{ background: color.colorValue }}
              onClick={() => setColor(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paint;
