import "./Navigation.scss";
import ComponentItem from "./Sections/ComponentItem";
import { ReactComponent as ArrowImg } from "assets/right-arrow.svg";
import { ReactComponent as SliderImg } from "assets/slider.svg";
import { ReactComponent as DragImg } from "assets/drag.svg";
import { ReactComponent as ChartImg } from "assets/chart.svg";
import { ReactComponent as SoundImg } from "assets/sound.svg";
import { ReactComponent as GameImg } from "assets/game.svg";
import { ReactComponent as CanvasImg } from "assets/canvas.svg";
import { useState } from "react";

const Navigation = () => {
  const [display, setDisplay] = useState(true);

  return (
    <nav className={`navigationContainer ${display ? "display" : "closed"}`}>
      <button
        className="navToggleButton"
        onClick={() => setDisplay((display) => !display)}
      >
        <ArrowImg width={20} height={20} />
      </button>
      <div className="componentList">
        <ComponentItem name="Drag & Drop" path="/drag-and-drop">
          <DragImg width={32} height={32} />
        </ComponentItem>
        <ComponentItem name="Slider" path="/slider">
          <SliderImg width={32} height={32} />
        </ComponentItem>
        <ComponentItem name="Chart" path="/chart">
          <ChartImg width={32} height={32} />
        </ComponentItem>
        <ComponentItem name="Sound" path="/sound">
          <SoundImg width={32} height={32} />
        </ComponentItem>
        <ComponentItem name="Game" path="/game">
          <GameImg width={32} height={32} />
        </ComponentItem>
        <ComponentItem name="Canvas" path="/canvas">
          <CanvasImg width={32} height={32} />
        </ComponentItem>
      </div>
    </nav>
  );
};

export default Navigation;
