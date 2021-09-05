import React from "react";
import { useState } from "react";
import "./DragAndDrop.scss";
import { ReactComponent as DotsImg } from "assets/dots.svg";

const DragAndDrop = () => {
  const [infos, setInfos] = useState(
    Array.from(Array(6), (_, index) => ({
      num: index, //num은 id 역할
      order: index,
    }))
  );
  const [currentPos, setCurrentPos] = useState({ y: 0, x: 0 });
  const [selected, setSelected] = useState(-1);
  // const [target, setTarget] = useState(-1); // for touch device
  const [dragging, setDragging] = useState(false);
  const changeElements = (select: number, target: number) => {
    const sIndex = infos.findIndex((info) => info.num === select);
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
        setSelected(-1);
        setDragging(false);
      }}
      onTouchEnd={() => {
        if (!dragging) return;
        setSelected(-1);
        setDragging(false);
      }}
      onMouseMove={(e) => {
        if (!dragging) return;
        setCurrentPos({ y: e.clientY, x: e.clientX });
      }}
      onTouchMove={(e) => {
        if (!dragging) return;
        setCurrentPos({ y: e.touches[0].clientY, x: e.touches[0].clientX });
      }}
    >
      {infos.map((info, index) => (
        <div
          key={info.num}
          className="boxContainer"
          style={{ order: info.order }}
          onMouseEnter={(e) => {
            if (!dragging) return;
            changeElements(selected, info.num);
          }}
          onMouseUp={() => {
            if (!dragging) return;
            changeElements(selected, info.num);
            setDragging(false);
          }}
          onTouchMove={(e) => {
            if (!dragging) return;
            const el = document.elementFromPoint(
              Number(e.touches[0].pageX),
              Number(e.touches[0].pageY)
            );
            if (!el || typeof el.className !== "string") return;
            const classNames = el.className.split("_");
            if (classNames[0] !== "box") return; //***
            const targetOrder = Number(window.getComputedStyle(el).order); //***
            const targetInfo = infos.find((info) => info.order === targetOrder);
            if (targetInfo) changeElements(selected, targetInfo.num);
          }}
          onTouchEnd={(e) => {
            if (!dragging) return;
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
              order: info.order, // 터치 동작시 order를 구하기 위함
            }}
          >
            <div
              className="box_grabArea"
              style={{
                order: info.order, // 터치 동작시 order를 구하기 위함
              }}
              onMouseDown={(e) => {
                setDragging(true);
                setSelected(info.num);
                setCurrentPos({ y: e.clientY, x: e.clientX });
              }}
              onTouchStart={(e) => {
                setDragging(true);
                setSelected(info.num);
                setCurrentPos({
                  y: e.touches[0].clientY,
                  x: e.touches[0].clientX,
                });
              }}
            >
              <DotsImg />
            </div>
            <div
              style={{
                order: info.order, // 터치 동작시 order를 구하기 위함
              }}
              className="box_numInfo"
            >
              {info.num}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
