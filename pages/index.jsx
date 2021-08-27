import styles from "../styles/Home.module.scss";
import Head from "next/head";
import NavBar from "./NavBar";

import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import MetaDataContainer from "./MetaDataContainer";

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
          <MetaDataContainer />
            <TopTracks />
            <TopArtists />
        </main>
        <footer className={styles.footer}>
          <a>© 2021 Created by Ellen Kwan</a>
        </footer>
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   const response = await searchAllItems('snoh');
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
