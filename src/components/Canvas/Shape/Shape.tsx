import React, { useEffect, useRef, useState } from "react";
import "./Shape.scss";
const Shape = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const ctxInit = canvas.current?.getContext("2d");
    if (!ctxInit) return;
    ctxInit.strokeStyle = "#101010";
    ctxInit.fillStyle = "#101010";
    // ctxInit.fillRect(0, 0, 100, 100);/
    ctxInit.lineWidth = 2;

    setCtx(ctxInit);
  }, []);
  const drawTriangle = () => {
    ctx?.beginPath();
    ctx?.moveTo(100, 30);
    ctx?.lineTo(30, 170); //선 끝 좌표
    ctx?.lineTo(170, 170); //선 끝 좌표
    ctx?.lineTo(100, 30); //선 끝 좌표
    ctx?.stroke(); //선 그리기
  };

  return (
    <div className="shapeContainer">
      <canvas
        id="shapeCanvas"
        width="200px"
        height="200px"
        ref={canvas}
      ></canvas>
      <button onClick={drawTriangle}>Triangle</button>
    </div>
  );
};

export default Shape;
