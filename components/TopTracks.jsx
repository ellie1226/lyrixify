import styles from "../styles/Home.module.scss";
import React, { useEffect, useState } from "react";
import { t } from "ttag";
import useSWR from "swr";

import AudioPLayer from "./AudioPlayer";
import fetcher from "../lib/fetcher";

function TopTracks() {
  const [isSelected, setSelected] = useState({
    activeTrackIndex: null,
    activeState: false,
  });

  const { data } = useSWR("/api/top_tracks", fetcher);
  const tracks = data?.tracks;
  console.log("data", tracks);

  function toggleActive(index) {
    setSelected({
      ...isSelected,
      activeTrackIndex: index,
      activeState: !isSelected.activeState,
    });
  }

  function toggleActiveStyles(index) {
    if (isSelected.activeTrackIndex == index) {
      return `${styles.background} ${styles.highlight}`;
    } else {
      return `${styles.background}`;
    }
  }

  useEffect((tracks) => {
    return tracks;
  }, []);

  function toggleAudioPlayer(index, preview) {
    if (isSelected.activeTrackIndex == index) {
      return <AudioPLayer songUrl={preview} />;
    } else {
      return <h3>{index >= 9 ? t`${index + 1}` : t`0${index + 1}`}</h3>;
    }
  }

  if (!tracks) return null;

  return (
    <div className={styles.card}>
      <h3>Top Tracks</h3>
      <br />

      {tracks.map((track, index) => {
        return (
          <div className={toggleActiveStyles(index)} key={index}>
            <div className={styles.grid} onClick={() => toggleActive(index)}>
              {toggleAudioPlayer(index, track.preview)}
              <a
                href={track.song_url}
                target="_blank"
                className={styles.cover_art}
              >
                <img
                  alt="AlbumCover"
                  src={track.image}
                  width="40"
                  height="40"
                />
              </a>
              <div className={styles.column_order}>
                <h2>{track.name}</h2>
                <p>{track.artist_name}</p>
              </div>
              <a href={track.preview} className={styles.lyrix}>
                Lyrix
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopTracks;
