import styles from "../styles/Home.module.scss";
import React from "react";

const dummyObject = [
  {
    artist: "Snoh Aalegra",
    followers: "1000 plays",
  },
  {
    artist: "Usher Ray",
    followers: "1000 plays",
  },
  {
    artist: "Tones and I",
    followers: "1000 plays",
  },
  {
    artist: "Dua Lipa",
    followers: `1000 plays`,
  },
  {
    artist: "Tones and I",
    followers: "1000 plays",
  },
  {
    artist: "Dua Lipa",
    followers: `1000 plays`,
  },
  {
    artist: "Dua Lipa",
    followers: `1000 plays`,
  },
];

function TopArtists() {
  return (
    <div className={styles.horizontal_container}>
      <h3>Top Artists</h3>

      {dummyObject.length
        ? dummyObject.map((artist, index) => {
            return (
              <div className={styles.horizontal_list} key={index}>
                <a href="#" className={styles.cover}></a>
                <h4>{artist.artist}</h4>
                <p>{artist.followers}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default TopArtists;
