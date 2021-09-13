import React, { useEffect, useState } from "react";
import "./MusicController.scss";
import music_love from "../../../assets/love.mp3";
import music_jazzyFrenchy from "../../../assets/jazzyfrenchy.mp3";
import music_allthat from "../../../assets/allthat.mp3";
import music_thejazzpiano from "../../../assets/thejazzpiano.mp3";

import { ReactComponent as PlayImg } from "assets/play.svg";
import { ReactComponent as PauseImg } from "assets/pause.svg";
import { ReactComponent as RepeatImg } from "assets/repeat.svg";

const MusicController = () => {
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
  const [currentMusic, setCurrentMusic] = useState(musics[0]);
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [time, setTime] = useState(0);

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
    }
    const timeFlow = playing
      ? setInterval(() => {
          if (currentMusic.audio.ended) setPlaying(false);
          setTime(Math.round(currentMusic.audio.currentTime));
        }, 1000)
      : null;
    return () => {
      currentMusic.audio.pause();
      if (timeFlow) clearInterval(timeFlow);
    };
  }, [currentMusic, playing]);

  useEffect(() => {
    currentMusic.audio.loop = loop;
  }, [loop]);

  return (
    <div className="musicControllerContainer">
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
          style={{
            width: "100%",
            height: "10px",
            border: "1px solid",
            background: "gray",
            position: "relative",
          }}
          onClick={(e) => {
            const timePoint =
              ((e.clientX - e.currentTarget.offsetLeft) /
                e.currentTarget.offsetWidth) *
              currentMusic.audio.duration;
            currentMusic.audio.currentTime = timePoint;
            setTime(timePoint);
          }}
        >
          <div
            style={{
              width: `${(time / currentMusic.audio.duration) * 100}%`,
              height: "100%",
              background: "black",
            }}
          ></div>
          <div
            style={{
              width: "10px",
              height: "10px",
              background: "white",
              position: "absolute",
              top: 0,
              left: `${(time / currentMusic.audio.duration) * 100 - 2}%`,
              border: "1px solid",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <span>
          {("0" + Math.floor(time / 60).toString()).slice(-2) +
            ":" +
            ("0" + Math.floor(time % 60).toString()).slice(-2)}
        </span>
      </div>
    </div>
  );
};

export default MusicController;
