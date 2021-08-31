import styles from "../styles/Home.module.scss";
import React, { useEffect } from "react";
import { t } from "ttag";

import useSWR from "swr";
import fetcher from "../lib/fetcher";


function TopTracks() {
  const { data } = useSWR("/api/top_tracks", fetcher);
  const tracks = data?.tracks;

  useEffect((tracks) => {
    return tracks;
  }, []);

  if (!tracks) {
    return null;
  }

  return (
    <div className={styles.card}>
      <h3>Top Tracks</h3>

      {tracks.map((track, index) => {
        return (
          <div className={styles.grid} key={index}>
            <h3>{index >= 9 ? t`${index + 1}` : t`0${index + 1}`}</h3>
            <a href={track.song_url} target="_blank" className={styles.cover_art}>
              <img alt="AlbumCover" src={track.image} width="40" height="40"/>
            </a>
            <div className={styles.column_order}>
              <h2>{track.name}</h2>
              <p>{track.artist_name}</p>
            </div>
            <a href={track.preview} className={styles.lyrix}>
              Lyrix
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default TopTracks;
