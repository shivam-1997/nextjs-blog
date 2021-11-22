import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {

  const spotifyRefreshInterval = 30 * 1000; //30,000ms = 30s
  const fetcher = (url) => fetch(url).then((r) => r.json());
  // TODO: convert SWR use to useEffect
  // cannot assign any variable name to useSWR, only data, error are valid
  const spotifyData = useSWR('/api/spotify', fetcher, { refreshInterval: spotifyRefreshInterval }).data;

  return (
    <div>
      <Head>
        <title>Home | Shivam Poddar</title>
        <meta name="description" content="Personal blog of Shivam Poddar" />
        <meta name="NextJs" content="This site is made using Next.Js" />
        <link rel="icon" href="/android.ico" />
      </Head>

      <header>
        <a target='_blank' rel="noopener noreferrer"
          href={
            spotifyData?.isPlaying
              ? spotifyData.songUrl
              : 'https://open.spotify.com/user/shivampoddar1997'
          }
        >
          <div>
            {spotifyData?.isPlaying ? (
              // Since, this image is dynamic and has not to be cached,
              // therfore use normal img tag.
              // Since, the image is dynamic, therefore it causes problem with next/image
              <img
                src={spotifyData.albumImageUrl}
                alt={spotifyData.album}
                height={0}
                width={100}
              />
            ) : (
              <></>
            )}
          </div>

          <div>
            {spotifyData?.isPlaying
            ?<>
            {/* <marquee> */}
              <p >
                { spotifyData.title }
                {' '}
                ({spotifyData.artist})
              </p>
            {/* </marquee> */}
            </>
            :<></>}
            <span> Spotify</span>
          </div>
        </a>

      </header>

      <main>
        {console.log(spotifyData)}
        <h1>
          {/* TODO: Add a popup when hovered over shivam_poddar, which shows type, birth-date, currently listening */}
          Hi, this is <a href="https://shivampoddar.com">shivam_poddar</a>!
        </h1>

        <Link passHref href="/run">
          <p>
            🏃‍♂️{' '}
            <code >Run</code>
          </p>
        </Link>

        <div >
          <a href="https://nextjs.org/docs">
            <h2  className="bg-blue-900" >Dummy Post 1 &rarr;</h2>
            <p>Something something.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Dummy Post2 &rarr;</h2>
            <p>Something else.</p>
          </a>
        </div>
      </main>

      <footer>
        <div>
          Made with ❤️ using {' '}
          <span>
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
