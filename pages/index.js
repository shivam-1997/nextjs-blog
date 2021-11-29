import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Header from '../components/Header';
// import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className='body ml-6 mr-6'>
      <Head>
        <title>Home | Shivam Poddar</title>
        <meta name="description" content="Personal blog of Shivam Poddar" />
        <meta name="NextJs" content="This site is made using Next.Js" />
        <link rel="icon" href="/android.ico" />
      </Head>
      <div className='header flex justify-between sticky mt-4'>
        <div className='header-left'>
          <span>Home</span>
          <span>Blog</span>
          <span>Learning_Resources</span>
          <span>Projects</span>
        </div>
        <div className='header-right'>
          <span>🎵</span>
          <span>🌗</span>
        </div>
      </div>
      <br />
      <br />
      <div className='home-landing'>
        <div className='home-landing-about flex justify-self-auto'>
          <div className='short-bio whitespace-normal'>
            <h1>Shivam Poddar</h1>
            Software Developer
            <br />
            Not a web-developer but this website is my attempt to full-stack development.
            Also, an archive for all the things I learn on the way.
            Currently working with:
            <div className='devStack flex'>
              <span>Next.Js</span>
              <span>Tailwind CSS</span>
              <span>Docker & Kubernetes</span>
              <span></span>
            </div>
          </div>
          <div className='profile-picture object-contain ml-28'>
            {/* TODO: Convert following to NextJs Image tag */}
            <img
              src='https://media-exp1.licdn.com/dms/image/C4E03AQE0XgUa_MOYRA/profile-displayphoto-shrink_400_400/0/1595365377974?e=1643846400&v=beta&t=Ue-FzIu1-iMWVCJoMSrFjzDUKutfGmV3sW-vRl2D5hk'
              className='rounded-full max-h-40 shadow-xl'
            />
          </div>
        </div>
      </div>
      <div className='h-52 border-black border-solid border-2 mt-4'>
        {/* Empty div just to check page scrolling */}
        <h1 className='text-green-700  p-4 m-auto'>Work In Progress!</h1>
        <span className='p-4 m-auto'>Just a template for now.</span>
      </div>
      <br />
      <div className='suggestions m-auto max-w-prose mt-4 mb-4'>
        <p>
          Feel free to ping for any change on this website, an interesting read, a place to visit or any other discussion.
        </p>
        <p><a className='text-blue-600 font-bold' href='mailto: shivampoddar.work@gmail.com'>Email</a> ↗️. Find other contact points in the footer.
        </p>
      </div>
      <hr />
      <div className='footer mb-4'>
        <div className='spotify-full mt-4 mb-4'>Playing Something - Spotify</div>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Blog</a>
          </div>

          <div className='flex flex-col'>
            <a href=''>GitHub</a>
            <a href=''>LinkedIn</a>
            <a href=''>Twitter</a>
            <a href=''>Instagram</a>
          </div>

          <div className='flex flex-col'>
            <a href=''>Email</a>
            <a href=''>Discord</a>
            <a href=''>I use</a>
            <a href=''>Buy me a coffee</a>
          </div>

          <div className='flex flex-col footer-col-w'>
            <p>An Ad! <br />I Need money, more importantly, one more article to write. 🙃</p>
          </div>
        </div>
      </div>
    </div>
  )
}
