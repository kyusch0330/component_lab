import React, { useEffect, useState } from "react";
import "./MusicController.scss";
// import music_love from "assets/musice.mp3";

const MusicController = () => {
  const [currentMusicURL, setCurrentMusicURL] = useState("/love.mp3");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    else {
      const currentMusic = new Audio(currentMusicURL);
      console.log(currentMusic);
      currentMusic.setAttribute("crossorigin", "anonymous");
      currentMusic
        .play()
        .then(() => console.log("OK"))
        .catch((err) => console.log(err));
    }
    // // if (!currentMusic) {
    // //   alert("음악 없음");
    // // }
    // if (playing) {
    //   currentMusic.play();
    // } else {
    //   return;
    //   //currentMusic.pause();
    // }
  }, [playing]);

  return (
    <div className="musicControllerContainer">
      MUSIC CONTROLLER
      <div>
        <button onClick={() => setPlaying((playing) => !playing)}>
          {playing ? "stop" : "play"}
        </button>
      </div>
    </div>
  );
};

export default MusicController;
