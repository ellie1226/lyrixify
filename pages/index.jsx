import styles from "../styles/Home.module.scss";
import Head from "next/head";
import NavBar from "./NavBar";
import { searchAllItems } from "../lib/spotify";

export default function Home({data}) {

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
            <a>Welcome to UnHinged!</a>
          </h1>

          <p className={styles.description}>
            Get started here <code className={styles.code}>:)</code>
          </p>
        </main>

        <footer className={styles.footer}>
          <a
          >
            © 2021 Created by Ellen Kwan
          </a>
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
