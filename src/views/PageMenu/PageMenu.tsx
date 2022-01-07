import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ArrowImg } from "assets/right-arrow.svg";
import "./PageMenu.scss";

interface Props {
  display: boolean;
  setDisplay: Function;
  paths: string[][];
  current: number;
  setCurrent: Function;
}
const PageMenu = ({
  display,
  setDisplay,
  paths,
  current, //더 이상 쓰이지 않음
  setCurrent,
}: Props) => {
  const location = useLocation();
  return (
    <div className={`pageMenuContainer ${!display && "closed"}`}>
      <div className="sliderMenu">
        {paths.map((path, pIndex) => (
          <Link
            key={pIndex}
            onClick={() => setCurrent(pIndex)}
            className={`menu ${
              location.pathname.split("/")[
                location.pathname.split("/").length - 1
              ] === path[1].split("/")[path[1].split("/").length - 1] &&
              "selected"
            }`}
            to={path[1]}
          >
            {path[0]}
          </Link>
        ))}
      </div>
      <button className="toggleMenuBtn" onClick={() => setDisplay(!display)}>
        <ArrowImg />
      </button>
    </div>
  );
};

export default PageMenu;
