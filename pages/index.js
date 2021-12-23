import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
<Navbar/>
      <Head>
        <title>Pizza Restaurant in Ho Chi Minh City</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
<Footer/>
    </div>
  );
}
