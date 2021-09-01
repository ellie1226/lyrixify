import React, { useState, useRef } from "react";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import styles from "../styles/audioPlayer.module.scss";
import { FormatColorResetOutlined } from "@material-ui/icons";

function AudioPLayer({songUrl}) {
  const [isPlaying, setPlaying] = useState(false);
	const audioPlayer = useRef();

  function togglePlayPause() {
		const prevValue = isPlaying;
    setPlaying(!prevValue);
		if (!prevValue) {
			audioPlayer.current.play();
		} else {
			audioPlayer.current.pause();
		}
  }

  return (
    <div className={styles.audio_container}>
      <audio
				ref={audioPlayer}
				src={songUrl}
        preload="metadata"
      />
      <button onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrowRoundedIcon />}
      </button>
    </div>
  );
}

export default AudioPLayer;
