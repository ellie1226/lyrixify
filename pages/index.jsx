import styles from "../styles/Home.module.scss";
import Head from "next/head";
import NavBar from "../components/NavBar";

import TopTracks from "../components/TopTracks";
import TopArtists from "../components/TopArtists";
import MetaDataContainer from "../components/MetaDataContainer";

export default function Home() {

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
//   const response = await fetch('http://localhost:3000/api/top_tracks');
//   // const tracks = response.json();

//   console.log("getStaticProps catatatatatata", response);

//   return {
//     props: {
//       response,
//     },
//   };
// };
