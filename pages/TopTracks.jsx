import styles from '../styles/Home.module.scss';
import React from 'react';
import { t } from 'ttag';

const dummyObject = [
  {
    artist: 'Snoh Aalegra',
    song: 'I Want You Around',
  },
  {
    artist: 'Usher Raymond',
    song: 'Nice and Slow',
  },
  {
    artist: 'Tones and I',
    song: 'Dance Monkey',
  },
  {
    artist: 'Dua Lipa',
    song: `Don't Start Now`,
  },
  {
    artist: 'Tones and I',
    song: 'Dance Monkey',
  },
  {
    artist: 'Dua Lipa',
    song: `Don't Start Now`,
  },
  {
    artist: 'Dua Lipa',
    song: `Don't Start Now`,
  },
  {
    artist: 'Tones and I',
    song: 'Dance Monkey',
  },
  {
    artist: 'Dua Lipa',
    song: `Don't Start Now`,
  },
];

export default function TopTracks() {
  return (
    <div className={styles.card}>
      <h3>Top Tracks</h3>

      {dummyObject.length
        ? dummyObject.map((track, index) => {
            return (
              <div className={styles.grid} key={index}>
                <h3>{t`0${index + 1}`}</h3>
                <a href='#' className={styles.cover_art}></a>
                <div className={styles.column_order}>
                  <h2>{track.song}</h2>
                  <p>{track.artist}</p>
                </div>
                <a href='#' className={styles.lyrix}>
                  Lyrix
                </a>
              </div>
            );
          })
        : null}
    </div>
  );
}
