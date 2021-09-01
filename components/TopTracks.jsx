import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import AudioPLayer from "./AudioPlayer";
import fetcher from "../lib/fetcher";
import useSWR from "swr";
import { t } from "ttag";

function TopTracks() {
  const [isSelected, setSelected] = useState({
    activeTrackIndex: 0,
    activeState: false,
  });

  const { data } = useSWR("/api/top_tracks", fetcher);
  const tracks = data?.tracks;

  useEffect((tracks) => {
    return tracks;
  }, []);

  function toggleActiveRow(index) {
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
          <div className={toggleActiveStyles(index)} key={track.id}>
            <div className={styles.grid} onClick={() => toggleActiveRow(index)}>
              {toggleAudioPlayer(index, track.preview)}
              <a
                href={track.song_spotify_url}
                target="_blank"
              >
                <img
                  alt="Album Cover"
                  src={track.image}
                  width="40"
                  height="40"
                />
              </a>
              <div className={styles.column_order}>
                <h2>{t`${track.name}`}</h2>
                <p>{t`${track.artist_name}`}</p>
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
