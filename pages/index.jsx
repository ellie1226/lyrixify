import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.scss";
import TopTracks from "../components/TopTracks";
import TopArtistsAndAlbums from "../components/TopArtistsAndAlbums";
import MetaDataContainer from "../components/MetaDataContainer";

function Home() {
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
          <TopArtistsAndAlbums />
        </main>
        <footer className={styles.footer}>
          <a>© 2021 Created by Ellen Kwan</a>
        </footer>
      </div>
    </>
  );
}

// TODO: Add in Static Props
// export const getStaticProps = async () => {
//   return {
//     props: {
//       response,
//     },
//   };
// };

export default Home;
