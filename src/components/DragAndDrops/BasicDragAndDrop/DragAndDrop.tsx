import React from "react";
import { useState } from "react";
import "./DragAndDrop.scss";
import { ReactComponent as DotsImg } from "assets/dots.svg";

const DragAndDrop = () => {
  const [infos, setInfos] = useState(
    Array.from(Array(6), (_, index) => ({
      num: index,
      order: index,
    }))
  );
  const [currentPos, setCurrentPos] = useState({ y: 0, x: 0 });
  const [selected, setSelected] = useState(-1);
  const [target, setTarget] = useState(-1);
  const [dragging, setDragging] = useState(false);
  const changeElements = () => {
    const sIndex = infos.findIndex((info) => info.num === selected);
    const sOrder = Number(infos[sIndex].order);
    const tOrder = Number(infos.find((info) => info.num === target)?.order);
    const isTargetBehind = tOrder > sOrder;

    if (isTargetBehind) {
      setInfos(
        infos.map((info, index) => {
          if (index === sIndex) return { ...info, order: tOrder };
          if (info.order > sOrder && info.order <= tOrder) {
            return { ...info, order: info.order - 1 };
          } else return { ...info };
        })
      );
    } else {
      setInfos(
        infos.map((info, index) => {
          if (index === sIndex) return { ...info, order: tOrder };
          if (info.order < sOrder && info.order >= tOrder) {
            return { ...info, order: info.order + 1 };
          } else return { ...info };
        })
      );
    }
  };

  return (
    <div
      className="basicDNDContainer"
      style={{ cursor: `${dragging ? "grabbing" : "initial"}` }}
      onMouseUp={() => {
        if (!dragging) return;
        console.log("DRAGEND");
        setSelected(-1);
        setDragging(false);
      }}
      onMouseMove={(e) => {
        if (!dragging) return;
        setCurrentPos({ y: e.clientY, x: e.clientX });
      }}
    >
      {infos.map((info, index) => (
        <div
          className="boxContainer"
          style={{ order: info.order }}
          onMouseEnter={() => {
            if (!dragging) return;
            setTarget(info.num);
          }}
          onMouseLeave={() => {
            if (!dragging) return;
            setTarget(-1);
          }}
          onMouseUp={() => {
            if (!dragging) return;
            changeElements();
            setDragging(false);
          }}
        >
          <div
            className="box"
            key={info.num}
            style={{
              position: `${selected === info.num ? "fixed" : "relative"}`,
              top: `${selected === info.num ? currentPos.y : 0}px`,
              left: `${selected === info.num ? currentPos.x : 0}px`,
            }}
          >
            <div
              className="grabArea"
              onMouseDown={(e) => {
                console.log("DRAG START");
                setDragging(true);
                setSelected(info.num);
                setCurrentPos({ y: e.clientY, x: e.clientX });
              }}
            >
              <DotsImg />
            </div>
            <div className="numInfo">{info.num}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
