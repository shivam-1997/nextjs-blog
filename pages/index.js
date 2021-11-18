import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr';
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Shivam Poddar</title>
        <meta name="description" content="Personal blog of Shivam Poddar" />
        <meta name="NextJs" content="This site is made using Next.Js" />
        <link rel="icon" href="/android.ico" />
      </Head>

      <main className={styles.main}>
        {console.log(data)}
        <h1 className={styles.title}>
          {/* TODO: Add a popup when hovered over shivam_poddar, which shows type, birth-date, currently listening */}
          Hi, this is <a href="https://shivampoddar.com">shivam_poddar</a>!
        </h1>

        <Link passHref href="/run">
        <p className={styles.description}>
        🏃‍♂️{' '}
          <code className={styles.code}>Run</code>
        </p>
        </Link>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          Made with ❤️ using {' '}
          <span className={styles.logo}>
            <img src="/next-js.svg" alt="Next.js Logo" width={80} height={30} />
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
