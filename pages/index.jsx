import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>UnHinged</title>
          <meta name="description" content="Next App Shell" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a>Welcome to UnHinged!</a>
          </h1>

          <p className={styles.description}>
            Get started here{" "}
            <code className={styles.code}>:)</code>
          </p>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 20202 Created by Ellen Kwan
            <span className={styles.logo}>
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
