import React, { useState, useRef } from "react";
import styles from "../styles/audioPlayer.module.scss";
import PropTypes from 'prop-types';
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";

const propTypes = {
  songUrl: PropTypes.string.isRequired,
};

function AudioPLayer({ songUrl }) {
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
      <audio ref={audioPlayer} src={songUrl} preload="metadata" />
      <button onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrowRoundedIcon />}
      </button>
    </div>
  );
}

AudioPLayer.propTypes = propTypes;

export default AudioPLayer;
