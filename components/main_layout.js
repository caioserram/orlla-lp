import HeaderComponent from "../components/header";
import WavesComponent from "./waves";
import Head from "next/head";
import styles from "./main_layout.module.scss";

export default function MainLayoutComponent(props) {
  return (
    <div>
      <Head>
        <title>Bem vindo a Orlla!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/orlla-logo-original.svg" />
      </Head>
      <div >
        <HeaderComponent />

        <main className={`container ${styles.custom_container} mt-3`}>
          {props.children}
        </main>

        <footer className={`fixed-bottom mb-3 ${styles.footer}`}>
          <div className={styles.footer_text}>
            {new Date().getFullYear()} - Orlla{" "}
          </div>
        </footer>
      </div>
    </div>
  );
}
