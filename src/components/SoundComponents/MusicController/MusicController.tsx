import React, { useEffect, useState } from "react";
import "./MusicController.scss";
import music_love from "../../../assets/love.mp3";
import music_jazzyFrenchy from "../../../assets/jazzyfrenchy.mp3";
import music_allthat from "../../../assets/allthat.mp3";
import music_thejazzpiano from "../../../assets/thejazzpiano.mp3";

import { ReactComponent as PlayImg } from "assets/play.svg";
import { ReactComponent as PauseImg } from "assets/pause.svg";
import { ReactComponent as RepeatImg } from "assets/repeat.svg";

const musics = [
  { id: "001", title: "Love", audio: new Audio(music_love) },
  { id: "002", title: "Jazzy Frenchy", audio: new Audio(music_jazzyFrenchy) },
  { id: "003", title: "All that", audio: new Audio(music_allthat) },
  {
    id: "004",
    title: "The jazz piano",
    audio: new Audio(music_thejazzpiano),
  },
];

const MusicController = () => {
  const [currentMusic, setCurrentMusic] = useState(musics[0]);
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [time, setTime] = useState(0);
  const [skipping, setSkipping] = useState(false);
  const [timeForSkip, setTimeForSkip] = useState(0);

  useEffect(() => {
    // if (playing) currentMusic.audio.play();
    return () => {
      // currentMusic.audio.pause();
      setTime(0);
    };
  }, [currentMusic]);

  useEffect(() => {
    if (playing) {
      currentMusic.audio.play();
    } else {
      console.log("1", currentMusic.audio.currentTime);
      currentMusic.audio.pause();
      console.log("2", currentMusic.audio.currentTime);
      return;
    }
    const timeFlow = playing
      ? setInterval(() => {
          if (currentMusic.audio.ended) setPlaying(false);
          setTime(Math.round(currentMusic.audio.currentTime));
        }, 1000)
      : null;
    return () => {
      if (timeFlow) clearInterval(timeFlow);
    };
  }, [currentMusic, playing]);

  useEffect(() => {
    currentMusic.audio.loop = loop;
  }, [loop]);

  const setTimeFromTimeForSkip = () => {
    setSkipping(false);
    setTime(timeForSkip);
    currentMusic.audio.currentTime = timeForSkip;
  };

  return (
    <div
      className="musicControllerContainer"
      onMouseMove={(e) => {
        if (!skipping) return;
        const progressBarContainer = document
          .getElementsByClassName("progressBarContainer")[0]
          .getBoundingClientRect();
        const left = e.clientX - progressBarContainer.left;
        if (left < 0) return;
        const timePoint =
          (left / progressBarContainer.width) * currentMusic.audio.duration;
        if (timePoint < 0 || timePoint > currentMusic.audio.duration) return;
        setTimeForSkip(timePoint);
      }}
      onMouseUp={() => {
        setTimeFromTimeForSkip();
      }}
      onMouseLeave={() => {
        setSkipping(false);
      }}
      onTouchMove={(e) => {
        if (!skipping) return;
        // const left = e.touches[0].clientX - e.currentTarget.offsetLeft;
        const progressBarContainer = document
          .getElementsByClassName("progressBarContainer")[0]
          .getBoundingClientRect();
        const left = e.touches[0].clientX - progressBarContainer.left;
        if (left < 0) return;
        const timePoint =
          (left / progressBarContainer.width) * currentMusic.audio.duration;
        if (timePoint < 0 || timePoint > currentMusic.audio.duration) return;
        setTimeForSkip(timePoint);
      }}
    >
      <div className="musicListMenu">
        <h3>Music Menu : &nbsp;</h3>
        {musics.map((music, index) => (
          <button
            key={music.id}
            className="musicItem"
            onClick={() => {
              setPlaying(true);
              setCurrentMusic(musics[index]);
            }}
          >
            {music.title}
          </button>
        ))}
      </div>
      <div className="musicController">
        <h3>Music Controller</h3>
        <h4>🎵 {currentMusic.title} 🎵</h4>
        {playing ? (
          <PauseImg
            onClick={() => setPlaying(false)}
            className="playPauseBtn"
          />
        ) : (
          <PlayImg onClick={() => setPlaying(true)} className="playPauseBtn" />
        )}
        <div className="playOptionContainer">
          <RepeatImg
            fill={loop ? "black" : "gray"}
            onClick={() => {
              setLoop((loop) => !loop);
            }}
          />
        </div>
        <div
          className="progressBarContainer"
          onClick={(e) => {
            const timePoint =
              ((e.clientX - e.currentTarget.offsetLeft) /
                e.currentTarget.offsetWidth) *
              currentMusic.audio.duration;
            if (timePoint < 0 || timePoint > currentMusic.audio.duration)
              return;
            currentMusic.audio.currentTime = timePoint;
            setTime(timePoint);
          }}
        >
          <div
            className="progressBar"
            style={{
              width: skipping
                ? `${(timeForSkip / currentMusic.audio.duration) * 100}%`
                : `${
                    (time /
                      (isNaN(currentMusic.audio.duration)
                        ? 1
                        : currentMusic.audio.duration)) *
                    100
                  }%`,
            }}
          ></div>
          <div
            className="progressBar_head"
            style={{
              left: skipping
                ? `${(timeForSkip / currentMusic.audio.duration) * 100 - 2}%`
                : `${
                    (time /
                      (isNaN(currentMusic.audio.duration)
                        ? 1
                        : currentMusic.audio.duration)) *
                      100 -
                    2
                  }%`,
            }}
            onMouseDown={() => {
              setSkipping(true);
            }}
            onTouchStart={() => {
              setSkipping(true);
            }}
            onTouchEnd={() => {
              setTimeFromTimeForSkip();
            }}
          ></div>
        </div>
        <span className="playTime">
          {("0" + Math.floor(time / 60).toString()).slice(-2) +
            ":" +
            ("0" + Math.floor(time % 60).toString()).slice(-2)}
        </span>
      </div>
    </div>
  );
};

export default MusicController;
