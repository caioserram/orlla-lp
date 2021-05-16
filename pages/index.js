import Head from 'next/head'
import Image from 'next/image'
import FooterComponet from '../components/footer'
import HeaderComponent from '../components/header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent/>

      <main className={styles.main}>
      </main>

      <FooterComponet/>
    </div>
  )
}
