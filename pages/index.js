import Head from 'next/head'
import FooterComponet from '../components/footer'
import HeaderComponent from '../components/header'
import WavesComponent from '../components/waves'
import styles from '../styles/Home.module.scss'
import AboutComponent from '../components/about'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bem vindo a Orlla!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/orlla-logo-original.svg" />
      </Head>

      <HeaderComponent/>

      <main className={styles.main}>
        <AboutComponent></AboutComponent>
        <WavesComponent></WavesComponent>
      </main>

      <FooterComponet/>
    </div>
  )
}
