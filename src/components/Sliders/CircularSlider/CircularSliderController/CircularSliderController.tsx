import React from "react";

import { ReactComponent as ArrowImg } from "assets/right-arrow.svg";
import { ReactComponent as PlayImg } from "assets/play.svg";
import { ReactComponent as PauseImg } from "assets/pause.svg";
import "./CircularSliderController.scss";

interface Props {
  cardLen: number;
  paused: boolean;
  setPaused: Function;
  current: number;
  setCurrent: Function;
}

const CircularSliderController = ({
  cardLen,
  paused,
  setPaused,
  current,
  setCurrent,
}: Props) => {
  return (
    <div className="circular_sliderController">
      <button
        className="playPauseBtn"
        onClick={() => setPaused((paused: boolean) => !paused)}
      >
        {paused ? (
          <PlayImg width={20} height={20} />
        ) : (
          <PauseImg width={20} height={20} />
        )}
      </button>
      <div className="moveBtnContainer">
        {new Array(cardLen).fill(0).map((_, sIndex) => (
          <button
            key={sIndex}
            className={`moveBtn ${current === sIndex && "current"}`}
            onClick={() => setCurrent(sIndex)}
          />
        ))}
      </div>
      <div>
        <button
          className="moveToPrevBtn"
          onClick={() =>
            setCurrent((current: number) =>
              current ? current - 1 : cardLen - 1
            )
          }
        >
          <ArrowImg width={32} height={32} />
        </button>
        <button
          className="moveToNextBtn"
          onClick={() =>
            setCurrent((current: number) => (current + 1) % cardLen)
          }
        >
          <ArrowImg width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default CircularSliderController;
