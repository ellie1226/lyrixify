import styles from "../styles/Home.module.scss";
import React from "react";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

// TODO: add tooltip to display full album name

function TopArtistsAndAlbums() {
  const { data } = useSWR("/api/top_artists_albums", fetcher);
  const albums = data?.albums;

  function shortenName(name) {
    if (name.length > 11) {
      const shortName = `${name.slice(0, 11)} [..]`;
      return shortName;
    } else {
      return name;
    }
  }

  if (!albums) return null;

  return (
    <div className={styles.horizontal_container}>
      <h3>Top Albums</h3>

      {albums.map((artist) => {
        return (
          <div className={styles.horizontal_list} key={artist.id}>
            <a href={artist.spotify_url} target="_blank">
              <img
                alt="Album Cover"
                src={artist.image}
                width="80"
                height="80"
              />
            </a>
            <h4>{shortenName(artist.name)}</h4>
            <p>{artist.artist_name[0]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TopArtistsAndAlbums;
