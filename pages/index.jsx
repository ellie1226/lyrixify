import styles from "../styles/Home.module.scss";
import Head from "next/head";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

// import { searchAllItems } from '../lib/spotify';

export default function Home({ data }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Lyrixify</title>
          <meta name="description" content="Next App Shell" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a>Welcome to Lyrixify!</a>
          </h1>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Top Tracks</h2>
              <span className={styles.content}>
                <h2>01</h2>
                <a href="#" className="cover_art">
                  square
                </a>
                <div className={styles.column_order}>
                  <h3>Song</h3>
                  <p>Artist</p>
                </div>
                <p>Get Lyrixs</p>
              </span>
              <span className={styles.content}>
                <h2>02</h2>
                <a href="#" className="cover_art">
                  square
                </a>
                <div className={styles.column_order}>
                  <h3>Song</h3>
                  <p>Artist</p>
                </div>
                <p>Get Lyrixs</p>
              </span>
            </div>
          </div>
          <div className={styles.horizontal_container}>
            <h2>Top Artists</h2>
            <div className={styles.horizontal_list}>
              <div className={styles.column}>
                <a href="#">Cover Art
                <h3>Artist</h3>
                <p>Meta Data</p>
                </a>
              </div>
              <div className={styles.column}>
                <a href="#">Cover Art
                <h3>Artist</h3>
                <p>Meta Data</p>
                </a>
              </div>
              <div className={styles.column}>
                <a href="#">Cover Art
                <h3>Artist</h3>
                <p>Meta Data</p>
                </a>
              </div>
            </div> 
          </div>
        </main>
        <footer className={styles.footer}>
          <a>© 2021 Created by Ellen Kwan</a>
        </footer>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await searchAllItems('snoh');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
