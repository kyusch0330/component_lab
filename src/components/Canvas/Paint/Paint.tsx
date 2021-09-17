import React, { useEffect, useRef, useState } from "react";
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
    { colorName: "pink", colorValue: "#fe9e9e" },
    { colorName: "darkred", colorValue: "#8e2e2e" },
    { colorName: "brown", colorValue: "#8e5e1e" },
    { colorName: "darkgreen", colorValue: "#2e6e2e" },
    { colorName: "cyan", colorValue: "#1eaeae" },
    { colorName: "skyblue", colorValue: "#6eaefe" },
    { colorName: "navy", colorValue: "#1e1e6e" },
  ];
  const brushSizes = [1, 2, 3, 4, 5, 6];

  const [paintMode, setPaintMode] = useState(0);
  // 0: brush, 1: fill
  const [color, setColor] = useState(colors[0]);
  const [brushSize, setBrushSize] = useState(1);
  const [painting, setPainting] = useState(false);

  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const ctxInit = canvas.current?.getContext("2d");
    if (!ctxInit) return;
    ctxInit.strokeStyle = colors[0].colorValue;
    ctxInit.fillStyle = colors[0].colorValue;
    ctxInit.lineWidth = brushSizes[0];

    setCtx(ctxInit);
  }, []);

  useEffect(() => {
    if (!ctx) return;
    ctx.strokeStyle = color.colorValue;
    ctx.fillStyle = color.colorValue;
  }, [color]);

  useEffect(() => {
    if (!ctx) return;
    ctx.lineWidth = brushSize;
  }, [brushSize]);

  const handleBrushMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    if (!painting) {
      ctx?.beginPath(); //경로 생성
      ctx?.moveTo(x, y); //선 시작 좌표
    } else {
      ctx?.lineTo(x, y); //선 끝 좌표
      ctx?.stroke(); //선 그리기
    }
  };

  const handleBrushTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const x = e.touches[0].clientX - Number(canvas.current?.offsetLeft);
    const y =
      e.touches[0].pageY -
      Number(canvas.current?.offsetTop) +
      document.getElementsByClassName("paintContainer")[0].scrollTop;
    ctx?.beginPath(); //경로 생성
    ctx?.moveTo(x, y); //선 시작 좌표
  };
  const handleBrushTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const x = e.touches[0].clientX - Number(canvas.current?.offsetLeft);
    const y =
      e.touches[0].pageY -
      Number(canvas.current?.offsetTop) +
      document.getElementsByClassName("paintContainer")[0].scrollTop;
    ctx?.lineTo(x, y); //선 끝 좌표
    ctx?.stroke(); //선 그리기
  };

  return (
    <div
      className="paintContainer"
      style={{ overflow: painting ? "hidden" : "scroll" }}
    >
      <canvas
        id="jsPaintCanvas"
        ref={canvas}
        className="paintCanvas"
        width={300} //css와 별개로 크기를 지정해줘야 함
        height={400}
        onMouseMove={(e) => paintMode === 0 && handleBrushMove(e)}
        onMouseDown={(e) => paintMode === 0 && setPainting(true)}
        onMouseUp={(e) => paintMode === 0 && setPainting(false)}
        onMouseLeave={(e) => paintMode === 0 && setPainting(false)}
        onTouchStart={(e) => paintMode === 0 && handleBrushTouchStart(e)}
        onTouchMove={(e) => {
          paintMode === 0 && handleBrushTouchMove(e);
        }}
        onTouchEnd={(e) => paintMode === 0 && setPainting(false)}
        onClick={(e) => {
          if (paintMode === 1) {
            ctx?.fillRect(0, 0, 300, 400);
          }
        }}
      ></canvas>
      <div className="controls">
        <div className="controls__brushSizes">
          <input
            type="range"
            min="1"
            max={brushSizes[brushSizes.length - 1]}
            step="1"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
          />
          {brushSizes.map((size) => {
            const viewSize = `${size * 2 + 10}px`;
            return (
              <div
                className={`controls__brushSize${
                  brushSize === size ? " selected" : ""
                }`}
                style={{
                  width: viewSize,
                  height: viewSize,
                }}
                onClick={(e) => setBrushSize(size)}
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
