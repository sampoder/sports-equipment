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
        <title>Sports Equipment Lending</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <code className={styles.code}>Student Council 2020/21</code>
        <h1 className={styles.title} style={{ fontSize: "3em" }}>
          Sports Equipment Lending
        </h1>
        <p style={{ fontSize: "1.5em" }}>
          The Student Council has began a program of lending out sports
          equipment to students for one week at a time. Currently only footballs
          are available. You can sign up with this form.
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
          <a href="https://github.com/sampoder/sports-equipment">here</a>.
        </p>
      </main>
    </div>
  );
}
