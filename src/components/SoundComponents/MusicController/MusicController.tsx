import React, { useEffect, useState } from "react";
import "./MusicController.scss";
import music_love from "../../../assets/love.mp3";
import music_jazzyFrenchy from "../../../assets/jazzyfrenchy.mp3";
import music_allthat from "../../../assets/allthat.mp3";
import music_thejazzpiano from "../../../assets/thejazzpiano.mp3";

import { ReactComponent as PlayImg } from "assets/play.svg";
import { ReactComponent as PauseImg } from "assets/pause.svg";

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

  useEffect(() => {
    currentMusic.audio.play();
    return () => {
      currentMusic.audio.pause();
    };
  }, [currentMusic]);

  useEffect(() => {
    if (!playing) {
      currentMusic.audio.pause();
    } else {
      currentMusic.audio.play();
    }
  }, [playing]);

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
      </div>
    </div>
  );
};

export default MusicController;
