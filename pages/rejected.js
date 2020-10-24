import Head from "next/head";
import styles from "../styles/Home.module.css";

const handleClick = async (song, artist) => {
  // Call your backend to create the Checkout Session
  const response = await fetch(
    "https://couch.camp/api/pay/?name=example&nae=example" + amount,
    {
      method: "POST",
    }
  );
};

const getValue = (value) => () => {
  handleClick(value, artist);
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>School Playlist Wizard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ backgroundColor: "#f04747" }}>
        <code className={styles.code}>Student Council 2020/21</code>
        <h1 className={styles.title} style={{ fontSize: "3em" }}>
          Sorry, one item at a time.
        </h1>
        <p style={{ fontSize: "1.5em" }}>
          We have limited stock and want to share the joy of sport with everyone.
        </p>
        <p>
          Built by Sam Poder, open sourced{" "}
          <a href="https://github.com/sampoder/sports-equipment">here</a>.
        </p>
      </main>
    </div>
  );
}
