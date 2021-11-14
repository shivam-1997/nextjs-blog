import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Run by Shivam Poddar</title>
        <meta name="description" content="Run poem Shivam Poddar" />
        <link rel="icon" href="/android.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          🏃‍♂️{' '}
        </h1>

        <p>
          <br/>Run 
          <br/>Coz time is.
          <br/>Run
          <br/>Coz someone else is.
          <br/>Run
          <br/>Coz dreams should not stay dreams.
          <br/>Run
          <br/>Coz there is no other way to succeed.
          <br/>Run
          <br/>Coz nevertheless one day you will sleep.
          <br/>Run
          <br/>Coz after that day you will not be able to.
          <br/>Run.
        </p>

      </main>

      <footer className={styles.footer}>
        <div>
          Made with ❤️ using {' '}
          <span className={styles.logo}>
            <Image src="/next-js.svg" alt="Next.js Logo" width={80} height={30} />
          </span>
        </div>
        <span>
          Copyright ©️ 2021 Shivam Poddar. All rights reserved.
        </span>
        {/* TODO: Add links for social media */}
      </footer>
    </div>
  )
}
