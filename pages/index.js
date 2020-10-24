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
        <title>School Equipment Lending</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <code className={styles.code}>Student Council 2020/21</code>
        <h1 className={styles.title} style={{ fontSize: "3em" }}>
          School Equipment Lending
        </h1>
        <p style={{ fontSize: "1.5em" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore.
        </p>
        <form action="/api/lend">
          <input
            type="text"
            className={styles.card}
            style={{
              width: "87%",
              fontSize: "1.5em",
              background: "none",
              padding: "10px",
              color: "white",
            }}
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email to begin."
          />
          <input
            className={styles.card}
            style={{
              fontSize: "1.5em",
              background: "none",
              padding: "10px",
              color: "white",
            }}
            type="submit"
            value="→"
          />
        </form>
        <p>
          Built by Sam Poder, open sourced{" "}
          <a href="https://github.com/sampoder/playlist-wizard">here</a>.
        </p>
      </main>
    </div>
  );
}
