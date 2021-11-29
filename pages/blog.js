import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Header from '../components/Header';

const navigation = [
  { name: 'Home', href: '', current: false },
  { name: 'Blog', href: '/blog', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]


// import styles from '../styles/Home.module.css'

export default function Blog() {

  return (
    <div>

      <Header navigation={navigation}/>

      <main>
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
            <h2 className="bg-blue-900" >Dummy Post 1 &rarr;</h2>
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
