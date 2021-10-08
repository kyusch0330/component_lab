import React from "react";
import { Link } from "react-router-dom";
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
  current,
  setCurrent,
}: Props) => {
  return (
    <div className={`pageMenuContainer ${!display && "closed"}`}>
      <div className="sliderMenu">
        {paths.map((path, pIndex) => (
          <Link
            key={pIndex}
            onClick={() => setCurrent(pIndex)}
            className={`menu ${current === pIndex && "selected"}`}
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
